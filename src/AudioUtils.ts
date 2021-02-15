
import {pad, withCommas} from "./Utils";

export class AudioFile {
    // In samples per second.
    rate: number;
    samples: Int16Array;

    constructor(rate: number, samples: Int16Array) {
        this.rate = rate;
        this.samples = samples;
    }
}

/**
 * Simple high-pass box filter.
 *
 * @param samples samples to filter.
 * @param size size of filter
 * @returns filtered samples.
 */
export function highPassBoxFilter(samples: Int16Array, size: number): Int16Array {
    const out = new Int16Array(samples.length);
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += samples[i];

        // Subtract out the average of the last "size" samples (to estimate local DC component).
        out[i] = clampToInt16(samples[i] - sum / size);
    }
    for (let i = size; i < samples.length; i++) {
        sum += samples[i] - samples[i - size];

        // Subtract out the average of the last "size" samples (to estimate local DC component).
        out[i] = clampToInt16(samples[i] - sum / size);
    }

    return out;
}

/**
 * Performs a simple RC high-pass filter at the given frequency.
 *
 * https://en.wikipedia.org/wiki/High-pass_filter
 */
export function highPassRcFilter(samples: Int16Array, frequency: number, sampleRate: number): Int16Array {
    const rc = 1/(2*Math.PI*frequency);
    const dt = 1/sampleRate;
    const alpha = rc/(rc + dt);

    const out = new Int16Array(samples.length);
    out[0] = samples[0];
    for (let i = 1; i < samples.length; i++) {
        out[i] = clampToInt16(alpha*(out[i - 1] + samples[i] - samples[i - 1]));
    }

    return out;
}

/**
 * Performs a simple RC low-pass filter at the given frequency.
 *
 * https://en.wikipedia.org/wiki/Low-pass_filter
 */
export function lowPassRcFilter(samples: Int16Array, frequency: number, sampleRate: number): Int16Array {
    const rc = 1/(2*Math.PI*frequency);
    const dt = 1/sampleRate;
    const alpha = dt/(rc + dt);

    const out = new Int16Array(samples.length);
    out[0] = alpha*samples[0];
    for (let i = 1; i < samples.length; i++) {
        out[i] = clampToInt16(out[i - 1] + alpha*(samples[i] - out[i - 1]));
    }

    return out;
}

/**
 * Compute the derivative of the signal.
 */
export function differentiate(samples: Int16Array): Int16Array {
    const out = new Int16Array(samples.length);

    for (let i = 0; i < samples.length; i++) {
        const newSample = i > 0 ? samples[i - 1] - samples[i] : 0;
        out[i] = clampToInt16(newSample);
    }

    return out;
}

/**
 * @param frame the frame number to be described as a timestamp.
 * @param hz number of frames per second in original recording.
 * @param brief omit hour if zero, omit milliseconds and frame itself.
 */
export function frameToTimestamp(frame: number, hz: number, brief?: boolean) {
    const time = frame / hz;

    let ms = Math.floor(time * 1000);
    let sec = Math.floor(ms / 1000);
    ms -= sec * 1000;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    const hour = Math.floor(min / 60);
    min -= hour * 60;

    if (brief) {
        return (hour !== 0 ? hour + ":" + pad(min, 10, 2) : min) + ":" + pad(sec, 10, 2);
    } else {
        return hour + ":" + pad(min, 10, 2) + ":" + pad(sec, 10, 2) + "." + pad(ms, 10, 3) + " (frame " + withCommas(frame) + ")";
    }
}

/**
 * @param frame the frame duration to be described as a string.
 * @param hz number of frames per second in original recording.
 */
export function frameDurationToString(frame: number, hz: number) {
    const time = frame / hz;

    let us = Math.floor(time * 1000000);
    let sec = Math.floor(us / 1000000);
    us -= sec * 1000000;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    const hour = Math.floor(min / 60);
    min -= hour * 60;

    return (hour !== 0 ? hour + ":" + pad(min, 10, 2) : min) + ":" + pad(sec, 10, 2) + "." +
        withCommas(pad(us, 10, 6)) + " (" + withCommas(frame) + " frame" + (frame === 1 ? "" : "s") + ")";
}

/**
 * Concatenate a list of audio samples into one.
 */
export function concatAudio(samplesList: Int16Array[]): Int16Array {
    const length = samplesList.reduce((sum, samples) => sum + samples.length, 0);
    const allSamples = new Int16Array(length);

    let offset = 0;
    for (const samples of samplesList) {
        allSamples.set(samples, offset);
        offset += samples.length;
    }

    return allSamples;
}

/**
 * Clamp the number to the range of signed 16-bit int.
 */
export function clampToInt16(x: number): number {
    return Math.max(Math.min(Math.round(x), 32767), -32768);
}

/**
 * Generate a certain amount of silence.
 */
export function makeSilence(seconds: number, sampleRate: number): Int16Array {
    return new Int16Array(Math.round(seconds*sampleRate));
}
