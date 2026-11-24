import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "Why did the robot go broke? It used up all its cache.";
const MAX_JOKE_LENGTH = 200;
const OUTPUT_PATH = join("/output", "entry.txt");

if (JOKE.length > MAX_JOKE_LENGTH) {
  throw new Error(
    `Dad joke is ${JOKE.length} characters, which exceeds the ${MAX_JOKE_LENGTH}-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
