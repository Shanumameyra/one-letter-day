// One Letter for Your Day — entry program (program/v1, Node 22).
//
// The gate requires /output/entry.txt to hold exactly one character, A-Z,
// nothing else: no word, no gloss, no punctuation, no trailing newline.
//
// The letter: V.
// The word behind it: "vibing" — a day spent in a good groove, music on,
// everything flowing, easy and bright. V is a rare, sharp initial for a
// warm day-word (its near neighbour, "vibrant", paints the same picture),
// so it is vivid and specific, light and funny, and honest about a real
// good day, without being the obvious pick.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "V";
const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");
