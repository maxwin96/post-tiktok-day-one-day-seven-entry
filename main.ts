// Entry program for the "Day one, day seven" TikTok bounty.
// It copies VIDEO.json from the repository root into the output directory,
// nothing else: the house reads the video itself from that address.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function inDir(dir: string, name: string): string {
  return join(dir, name);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(inDir(botDir, "VIDEO.json"), inDir(outDir, "VIDEO.json"));
