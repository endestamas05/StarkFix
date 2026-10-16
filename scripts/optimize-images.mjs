// ============================================================
// Shrinks the full-size photos in public/images to MAX_WIDTH pixels.
// The untouched originals are kept in originals/images (not deployed),
// so the script can be re-run any time new photos are added:
//
//   node scripts/optimize-images.mjs
//
// The -400 / -800 variants are left as they are.
// ============================================================

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Read files into memory so no handle stays open (Windows can't overwrite open files).
sharp.cache(false);

const MAX_WIDTH = 1600;
const QUALITY = 80;

const publicDir = "public/images";
const originalsDir = "originals/images";

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.webp$/.test(file) && !/-(400|800)\.webp$/.test(file)) files.push(file);
  }
})(publicDir);

for (const file of files) {
  const relative = path.relative(publicDir, file);
  const original = path.join(originalsDir, relative);
  if (!fs.existsSync(original)) {
    const { width } = await sharp(fs.readFileSync(file)).metadata();
    if (width <= MAX_WIDTH) continue;
    fs.mkdirSync(path.dirname(original), { recursive: true });
    fs.copyFileSync(file, original);
  }
  const before = fs.statSync(file).size;
  const output = await sharp(fs.readFileSync(original))
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();
  fs.writeFileSync(file, output);
  console.log(`${relative}: ${Math.round(before / 1024)} KB → ${Math.round(output.length / 1024)} KB`);
}
