# trs80-cassette-reader

> **This repo has moved to the [TRS-80 monorepo](https://github.com/lkesteloot/trs80).**

Web app and command-line tool to read programs off of TRS-80 Model I and Model
III cassettes.

![Tape](images/tape.jpg)

[Try it now in your browser](https://www.my-trs-80.com/cassette/)
or run it locally:

    (clone repo)
    % npm install
    % npm start

Open http://127.0.0.1:8080 in your browser.

# Command-line usage

The program can also be run on the command line. It reads a WAV file
and generates various output files, which are placed in the same directory
as the input file.

You can try it without installing:

    % npx trs80-cassette-reader --help

Or, to install the version on npm:

    % npm install -g trs80-cassette-reader
    % trs80-cassette-reader --help

Or, to run from source:

    (clone repo)
    % npm install
    % npm run build-node
    % bin/trs80-cassette-reader --help

By default the program will generate the appropriate binary file for
each program on the cassette:

* `.BAS` files for Basic programs.
* `.3BN` files for system programs.
* `.BIN` files for unknown programs.

The `--wav` flag will also cause a clean (reconstructed) audio file
to be generated for each program. The `--cas` flag will generate a cassette
file for each program. (These are readable in most emulators.) The
`--all` flag will, instead of generating one file for each program,
generate one audio and/or cassette file for the whole input file.

For system programs, the `--asm` flag will generate a disassembly.
For Basic programs, the `--tokenize` flag will generate a detokenized
(text) version of the program.

If any output file exists, it will not be overwritten unless the
`--force` flag is given.

# Cassette coding schemes

## Low-speed (250 baud, 500 baud, and 1000 baud)

Low-speed encoding is used for 250 baud (Level 1 Basic) and
500 baud (Level 2 Basic). Some tapes have been found with 1000 baud
using the same encoding. The coding scheme is digital Frequency Modulation (FM)
without [NRZI](https://en.wikipedia.org/wiki/Non-return-to-zero#Non-return-to-zero_inverted).
The time values below apply to 500 baud.

Each **bit** is made of two 1 ms pulses, for a total of 2 ms (500 Hz).
Each **pulse** takes 1 ms: 125 µs positive, 125 µs negative, and 750 µs neutral.
In practice each pulse looks more like this on tape after various analog distortion:

![Low speed pulse](images/low-speed-pulse.png)

The first pulse of each bit is the **clock pulse** and is always present. The second
pulse is the **data pulse** and can either be absent (1 ms of silence) for a 0 bit or
present for a 1 bit. This sample shows bit values 0, 1, and 0:

![Low speed example](images/low-speed-example.png)

Each byte is written with its most-significant bit first.
The header is about 2040 zero bits (255 zero bytes) followed by the **sync byte** value 0xA5.
In some recordings the length of the zero bits in the header can increase
smoothly from 0.7 ms to 2 ms.
The program is then written as a sequence of bytes.
Between the header and the program there is a 1 ms pause. This is probably not intentional,
but a result of some processing the ROM has to do when writing the program. The pause
is just before the clock pulse of the first bit of the program.

The ROM reading code waits (indefinitely) until a pulse is seen, skips over
it (waiting 500 µs), then reads for 850 µs to see if a second pulse is
detected, indicating a 1 bit. The 1 ms pause after the header is therefore
harmless, since the ROM doesn't depend on the clock pulse being exactly 2 ms
after the previous clock pulse. Some recordings have these kinds of pauses
throughout, and reading code should be permissive with the timing of the
clock pulse.

References:

* Barden, Bill. *More TRS-80 Assembly Language Programming*, 1982. 221-227.

## High-speed (1500 baud)

The TRS-80 Model III high-speed (1500 baud) encoding is as follows:
Each bit is one cycle of a sine wave (positive half-cycle, then negative
half-cycle). A 0 bit is encoded with a 1320 Hz cycle, while a 1 bit is encoded
with a 2680 Hz cycle. These correspond to 768 and 1536 Z80 T-cycles at
2,027,520 Hz, the Model III's clock frequency.

More precisely, the timing of the square waves are:

* **Start bit**: 903 to 1007 T-cycles high and 765 T-cycle low (1777 total).
* **Zero bit**: 771 T-cycles high and 765 T-cycle low (1536 total).
* **One bit**: 378 T-cycles high and 381 T-cycle low (759 total).
* The high section of the data bit after the start bit is 6 T-cycles shorter.

Each byte is written with its most-significant bit first.
The header is 256 instances of the byte 0x55, followed by the **sync byte** value 0x7F.
The program is then written as a sequence of bytes, each starting with a
start bit of value 0 followed by the byte value.
Between the header and the program is a 1 ms pause. This is probably not intentional,
but a result of some processing the ROM had to do when writing the program.

This sample encodes the sequence `10011110`:

![High speed example](images/high-speed-example.png)

References:

* [Story behind "1500" baud decisions](http://www.vcfed.org/forum/archive/index.php/t-56618.html)
* [U.S. Patent 4443883, "Data synchronization apparatus"](https://patents.google.com/patent/US4443883)

# 1500 baud mystery

Note that in the high-speed encoding a 0 bit is about twice as long as a 1 bit.
This is a strange design, since 0 bits appear more often in programs: all
space characters (0x20) have 0 for 7 of their 8 bits; all ASCII characters
(comments, strings) have their most significant bit as 0; every start bit is a
zero.

In one Basic program I analyzed, there were 15,472 zero bits and 2960 one bits. That's
a recording time of 12.2 seconds, or 1508 baud. Had they swapped the meaning of
the two cycle times, that would have been reduced to 7.4 seconds, or 2489 baud.
Instead of a jump from 500 baud (on the Model I) to 1500 baud, they could have
claimed nearly 2500 baud! If anyone knows why they made this decision, please
let me know.

# Credits

[Cassette](https://thenounproject.com/term/cassette/13639/) by Jasmine Jones from the Noun Project.

# License

Copyright &copy; Lawrence Kesteloot, [MIT license](LICENSE).

