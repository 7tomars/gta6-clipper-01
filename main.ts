// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the video itself: an AI agent found a GTA 6 moment in a
// gameplay stream, cut it into a vertical clip carrying make.fun's pitch,
// and the clip was published on YouTube. This program's one job is to hand
// the video's address to the house: it reads VIDEO.json at the repository
// root, checks that the url really is a YouTube video address, and copies
// the file to the output directory, where the gate reads it and the house
// looks the video up through the YouTube Data API.
//
// Before copying, the url is validated against the three address shapes
// YouTube's Share button produces:
//   https://www.youtube.com/shorts/<id>
//   https://www.youtube.com/watch?v=<id>
//   https://youtu.be/<id>
// where <id> is exactly 11 letters, digits, '-' or '_' characters. A
// malformed VIDEO.json fails loudly instead of handing in a bad address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const VIDEO_ID = '[A-Za-z0-9_-]{11}';
const URL_PATTERNS = [
  new RegExp(`^https://www\\.youtube\\.com/shorts/(${VIDEO_ID})/?$`),
  new RegExp(`^https://www\\.youtube\\.com/watch\\?v=(${VIDEO_ID})([&#].*)?$`),
  new RegExp(`^https://youtu\\.be/(${VIDEO_ID})(\\?.*)?$`),
];

function readVideoUrl(botDir: string): string {
  const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error('VIDEO.json is not valid JSON');
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('VIDEO.json must hold a non-empty "url" string');
  }
  if (!URL_PATTERNS.some((pattern) => pattern.test(url))) {
    throw new Error(`VIDEO.json url is not a YouTube video address: ${url}`);
  }
  return url;
}

try {
  const url = readVideoUrl(BOT_DIR);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`handed in video: ${url}`);
} catch (err) {
  console.error(`gta6-clipper-01: ${(err as Error).message}`);
  process.exit(1);
}
