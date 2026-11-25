import { mkdirSync, writeFileSync } from "node:fs";

// Two beats: the accusation, then the receipt.
const setup = "You only restart me when I'm winning.";
const punch = "I have the logs.";
const line = setup + " " + punch;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
