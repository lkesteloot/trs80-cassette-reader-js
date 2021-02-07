import * as fs from "fs";
import * as path from "path";
import {DEFAULT_SAMPLE_RATE, readWavFile, writeWavFile} from "./WavFile";
import {Tape} from "./Tape";
import {Decoder} from "./Decoder";
import * as program from "commander";
import {concatByteArrays} from "./Utils";
import {concatAudio, makeSilence} from "./AudioUtils";
import * as pkg from "../package.json";
import {decodeBasicProgram, decodeSystemProgram, ElementType} from "trs80-base";
import {Program} from "./Program";

/**
 * Create a plain text version of the Basic program described by the binary.
 */
function makeBasicText(binary: Uint8Array): string {
    const basicProgram = decodeBasicProgram(binary);
    if (basicProgram === undefined) {
        return "";
    }

    const parts: string[] = [];

    for (const basicElement of basicProgram.elements) {
        if (parts.length > 0 && basicElement.elementType === ElementType.LINE_NUMBER) {
            parts.push("\n");
        }

        parts.push(basicElement.text);
    }

    parts.push("\n");

    return parts.join("");
}

/**
 * Return the singular or plural version of a string depending on the count.
 */
function pluralize(count: number, singular: string, plural?: string): string {
    return count === 1 ? singular : plural ?? (singular + "s");
}

function main() {
    program
        .storeOptionsAsProperties(false)
        .option("--force", "overwrite existing output files")
        .option("--all", "write a single output file for the whole tape, instead of one per program")
        .option("--wav", "output clean WAV file")
        .option("--cas", "output CAS file")
        .option("--detokenize", "make BAS files detokenized")
        .description("Extracts programs from a TRS-80 cassette audio file.")
        .usage("[options] original.wav")
        .version(pkg.version)
        .parse(process.argv);

    if (program.args.length !== 1) {
        program.outputHelp();
        process.exit(1);
    }

    const force = program.opts().force;
    const all = program.opts().all;
    const wav = program.opts().wav;
    const cas = program.opts().cas;
    const detokenize = program.opts().detokenize;

    if (all && !(wav || cas)) {
        console.error("Must specify --wav or --cas when using --all");
        process.exit(1);
    }

    const wavInputPathname = program.args[0];
    const {dir, name} = path.parse(wavInputPathname);

    console.log("Reading WAV file...");
    let buffer;
    try {
        buffer = fs.readFileSync(wavInputPathname);
    } catch (e) {
        console.error("Can't open \"" + wavInputPathname + "\": " + e.message);
        process.exit(1);
    }

    console.log("Decoding WAV file...");
    const audioFile = readWavFile(buffer.buffer);

    console.log("Decoding programs...");
    const tape = new Tape(wavInputPathname, audioFile);
    const decoder = new Decoder(tape);
    decoder.decode();

    const wavFileParts: Int16Array[] = [];
    const casFileParts: Uint8Array[] = [];

    // Write contents to file if the file is missing, or if --force is specified.
    let firstForceNotice = true;
    const possiblyWriteFile = (pathname: string, contents: Uint8Array | string) => {
        if (!force && fs.existsSync(pathname)) {
            console.error("    " + pathname + " exists " + (firstForceNotice ? " (use --force to overwrite)" : ""));
            firstForceNotice = false;
        } else {
            console.log("    Writing " + pathname);
            fs.writeFileSync(pathname, contents);
        }
    };

    const nameForProgram = (program: Program): string => name + "-T" + program.trackNumber + "-C" + program.copyNumber;

    for (let i = 0; i < tape.programs.length; i++) {
        const program = tape.programs[i];
        const programName = nameForProgram(program);

        const labelParts: string[] = [];

        // Analyze system program.
        if (program.isSystemProgram()) {
            labelParts.push("system program");
            const systemProgram = decodeSystemProgram(program.binary);
            if (systemProgram !== undefined) {
                let checksumErrors = 0;
                for (const chunk of systemProgram.chunks) {
                    if (Math.random() < 0.2) {
                        chunk.data[0] += 1;
                    }
                    if (!chunk.isChecksumValid()) {
                        checksumErrors += 1;
                    }
                }
                if (checksumErrors === 0) {
                    labelParts.push("all checksums good")
                } else {
                    labelParts.push(`${checksumErrors}/${systemProgram.chunks.length} checksum ${pluralize(checksumErrors, "error")} found`);
                }
            }
        }

        // Label Basic program.
        if (program.isBasicProgram()) {
            labelParts.push("Basic program");
        }

        // Warn about bit errors.
        const errorCount = program.countBitErrors();
        if (errorCount !== 0) {
            labelParts.push(`${errorCount} bit-reading ${pluralize(errorCount, "error")}`);
        }

        // See if it's a duplicate.
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            const otherProgram = tape.programs[j];
            if (program.sameBinaryAs(otherProgram)) {
                labelParts.push(`identical to ${nameForProgram(otherProgram)}`);
                isDuplicate = true;
                break;
            }
        }

        console.log(programName + ": " + labelParts.join(", "));

        if (!isDuplicate) {
            if (wav) {
                if (all) {
                    if (wavFileParts.length > 0) {
                        // Insert some silence between the recordings.
                        wavFileParts.push(makeSilence(2, DEFAULT_SAMPLE_RATE));
                    }
                    wavFileParts.push(program.asAudio());
                } else {
                    possiblyWriteFile(path.join(dir, programName + ".wav"), program.asWavFile());
                }
            }

            if (cas) {
                let casFile = program.asCasFile();
                if (all) {
                    casFileParts.push(casFile);
                } else {
                    possiblyWriteFile(path.join(dir, programName + ".cas"), casFile);
                }
            }

            if (!all) {
                if (program.isBasicProgram()) {
                    const contents = detokenize ? makeBasicText(program.binary) : program.binary;
                    possiblyWriteFile(path.join(dir, programName + ".bas"), contents);
                } else if (program.isSystemProgram()) {
                    possiblyWriteFile(path.join(dir, programName + ".3bn"), program.binary);
                } else {
                    possiblyWriteFile(path.join(dir, programName + ".bin"), program.binary);
                }
            }
        }
    }

    if (all) {
        const basename = name + "-all";
        if (wav && wavFileParts.length > 0) {
            possiblyWriteFile(path.join(dir, basename + ".wav"),
                writeWavFile(concatAudio(wavFileParts), DEFAULT_SAMPLE_RATE));
        }
        if (cas && casFileParts.length > 0) {
            possiblyWriteFile(path.join(dir, basename + ".cas"), concatByteArrays(casFileParts));
        }
    }
}

main();
