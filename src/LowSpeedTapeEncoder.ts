
import {concatAudio, makeSilence} from "./AudioUtils";
import {concatByteArrays} from "./Utils";

const SYNC_BYTE = 0xA5;

/**
 * Generate one pulse for 500 baud audio.
 */
function generatePulse(length: number): Int16Array {
    const audio = new Int16Array(length);

    // Center it in the audio.
    const offset = Math.round(length/4);
    for (let i = 0; i < length/2; i++) {
        const t = 2*Math.PI*i/(length/2);

        // -0.5 to 0.5, matches recorded audio.
        audio[i + offset] = Math.sin(t)*16384;
    }

    return audio;
}

/**
 * Adds the byte "b" to the samples list, most significant bit first.
 * @param samplesList list of samples we're adding to.
 * @param b byte to generate.
 * @param cycle samples for a cycle.
 * @param silence samples for silence.
 */
function addByte(samplesList: Int16Array[], b: number, cycle: Int16Array, silence: Int16Array) {
    // MSb first.
    for (let i = 7; i >= 0; i--) {
        // Clock pulse.
        samplesList.push(cycle);

        // Data pulse.
        const bit = (b & (1 << i)) != 0;
        samplesList.push(bit ? cycle : silence);
    }
}

/**
 * Adds the header bytes necessary for writing low-speed cassettes.
 */
export function wrapLowSpeed(bytes: Uint8Array): Uint8Array {
    // Add tape header.
    const buffers = [
        new Uint8Array(256),
        new Uint8Array([SYNC_BYTE]),
        bytes,
    ];
    return concatByteArrays(buffers);
}

/**
 * Encode the sequence of bytes as an array of audio samples for low-speed (500 baud) cassettes.
 * @param bytes cas-style array of bytes, including 256 zero bytes, sync byte, and trailing zero bytes.
 * @param sampleRate number of samples per second in the generated audio.
 */
export function encodeLowSpeed(bytes: Uint8Array, sampleRate: number): Int16Array {
    // Length of one cycle, in samples. They're all 1ms.
    const cycleLength = Math.round(0.001*sampleRate);

    // Samples representing one cycle.
    const cycle = generatePulse(cycleLength);

    // Samples representing 1ms of silence.
    const silence = new Int16Array(cycleLength);

    // List of samples.
    const samplesList: Int16Array[] = [];

    // Start with half a second of silence.
    samplesList.push(makeSilence(0.5, sampleRate));

    // All data bytes.
    for (let i = 0; i < bytes.length; i++) {
        addByte(samplesList, bytes[i], cycle, silence);
    }

    // End with half a second of silence.
    samplesList.push(makeSilence(0.5, sampleRate));

    // Concatenate all samples.
    return concatAudio(samplesList);
}
