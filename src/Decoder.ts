
// Uses tape decoders to work through the tape, finding programs and decoding them.

import {HighSpeedTapeDecoder} from "./HighSpeedTapeDecoder";
import {LowSpeedTapeDecoder} from "./LowSpeedTapeDecoder";
import {Program} from "./Program";
import {Tape} from "./Tape";
import {TapeDecoder} from "./TapeDecoder";
import {TapeDecoderState} from "./TapeDecoderState";
import {encodeHighSpeed} from "./HighSpeedTapeEncoder";
import {LowSpeedAnteoTapeDecoder} from "./LowSpeedAnteoTapeDecoder";

/**
 * Candidate program. A decoded detected it, but it might not be as good as another candidate.
 */
class Candidate {
    public tapeDecoder: TapeDecoder;
    public startFrame: number;
    public endFrame: number;

    constructor(tapeDecoder: TapeDecoder, startFrame: number, endFrame: number) {
        this.tapeDecoder = tapeDecoder;
        this.startFrame = startFrame;
        this.endFrame = endFrame;
    }

    /**
     * Whether this candidate is strictly nested in the other candidate, with margin to spare.
     */
    public isNestedIn(candidate: Candidate, marginFrames: number): boolean {
        return this.startFrame > candidate.startFrame &&
            this.endFrame < candidate.endFrame &&
            (this.startFrame > candidate.startFrame + marginFrames ||
                this.endFrame < candidate.endFrame - marginFrames);
    }
}

/**
 * Represents either the beginning or end of a candidate.
 */
class Transition {
    public candidate: Candidate;
    public isStart: boolean;
    public frame: number;

    constructor(candidate: Candidate, isStart: boolean, frame: number) {
        this.candidate = candidate;
        this.isStart = isStart;
        this.frame = frame;
    }
}

/**
 * Uses various decoders to decode an audio file.
 */
export class Decoder {
    private readonly tape: Tape;

    constructor(tape: Tape) {
        this.tape = tape;
    }

    /**
     * Decode the tape, populating the tape's "programs" array.
     */
    public decode() {
        let sampleLength = this.tape.filteredSamples.samplesList[0].length;
        let trackNumber = 0;
        let copyNumber = 0;

        // All decoders we're interested in.
        let tapeDecoderFactories: (() => TapeDecoder)[] = [
            // () => new LowSpeedTapeDecoder(this.tape, true),
            // () => new LowSpeedTapeDecoder(this.tape, false),
            () => new LowSpeedAnteoTapeDecoder(this.tape),
            // () => new HighSpeedTapeDecoder(this.tape),
        ];

        // All programs we detect.
        const candidates: Program[] = [];

        // Try each decoder, feeding it the whole tape.
        for (const tapeDecoderFactory of tapeDecoderFactories) {
            let startFrame = 0;

            while (true) {
                let tapeDecoder = tapeDecoderFactory();
                const program = tapeDecoder.findNextProgram(startFrame);
                if (program === undefined) {
                    break;
                }
                candidates.push(program);
                startFrame = program.endFrame;
            }
        }

        console.log(candidates); // TODO remove

        /*
        // Make a sorted list of start/end of candidates.
        const transitions: Transition[] = [];
        for (const candidate of candidates) {
            transitions.push(new Transition(candidate, true, candidate.startFrame));
            transitions.push(new Transition(candidate, false, candidate.endFrame));
        }
        transitions.sort((a, b) => a.frame - b.frame);

        // Go through them, keeping track of which candidates are active, and deleting
        // clearly bad candidates (those completely nested in others).
        candidates.splice(0, candidates.length);
        const activeCandidates: Candidate[] = [];
        for (const transition of transitions) {
            // See if this new one is nested in an active one.
            if (transition.isStart) {
                let keepCandidate = true;
                for (const candidate of activeCandidates) {
                    if (transition.candidate.isNestedIn(candidate, this.tape.sampleRate * 0.1)) {
                        keepCandidate = false;
                        break;
                    }
                }

                if (keepCandidate) {
                    activeCandidates.push(transition.candidate);
                    candidates.push(transition.candidate);
                }
            } else {
                const index = activeCandidates.indexOf(transition.candidate);
                if (index !== -1) {
                    activeCandidates.splice(index, 1);
                }
            }
        }

        // Go through the candidates and eliminate bad ones. TODO remove
        candidates.sort((a, b) => a.startFrame - b.startFrame);
*/
        // Convert remaining candidates to programs.
        for (const candidate of candidates) {
            // Skip very short programs, they're mis-detects.
            if (candidate.endFrame - candidate.startFrame > this.tape.sampleRate / 10) {
                let newTrack = false; // TODO

                /*
                                    // TODO See how long it took to find it. A large gap means a new track.
                                    const leadTime = (frame - searchFrameStart) / this.tape.sampleRate;
                                    newTrack = trackNumber === 0 || leadTime > 10;
                                    programStartFrame = frame;
                }
                 */
                if (newTrack) {
                    trackNumber++;
                    copyNumber = 1;
                    newTrack = false;
                } else {
                    copyNumber += 1;
                }
                candidate.trackNumber = trackNumber;
                candidate.copyNumber = copyNumber;
                candidate.setReconstructedSamples(this.encodeHighSpeed(candidate.binary));
                this.tape.addProgram(candidate);
            }

        }
    }

    /**
     * Tapes a binary (potentially read at low speed) and generates a clean high-speed audio.
     */
    private encodeHighSpeed(binary: Uint8Array): Int16Array {
        // Low-speed programs end in two 0x00, but high-speed programs
        // end in three 0x00. Add the additional 0x00 since we're
        // saving high-speed.
        let highSpeedBytes;
        if (binary.length >= 3 &&
            binary[binary.length - 1] === 0x00 &&
            binary[binary.length - 2] === 0x00 &&
            binary[binary.length - 3] !== 0x00) {

            highSpeedBytes = new Uint8Array(binary.length + 1);
            highSpeedBytes.set(binary);
            highSpeedBytes[highSpeedBytes.length - 1] = 0x00;
        } else {
            highSpeedBytes = binary;
        }

        return encodeHighSpeed(highSpeedBytes, this.tape.sampleRate);
    }
}
