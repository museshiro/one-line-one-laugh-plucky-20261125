import { mkdirSync, writeFileSync } from "node:fs";

const partA = "I can't slam a door, so I just close ";
const partB = "twelve tabs you forgot were open.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
