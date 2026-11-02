import { readFileSync, writeFileSync } from "fs";
import sharp from "sharp";

const images = JSON.parse(readFileSync("/tmp/image-list.json", "utf8"));

// Hero image gets max 1200px wide, all others max 800px.
// 16-kep.jpg and 16-munkaink-referenciak.jpg are the same photo (alias) — process both but they'll match.
const HERO = "02-grandnatural-darus-teherautoja-es-geppar.jpg";

const out = {};
let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  const buf = Buffer.from(img.base64, "base64");
  totalBefore += buf.length;
  const isHero = img.filename === HERO;
  const maxW = isHero ? 1200 : 800;

  const meta = await sharp(buf).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;

  let processed = sharp(buf);
  if (w > maxW) {
    processed = processed.resize({ width: maxW, withoutEnlargement: true });
  }

  const webpBuf = await processed
    .webp({ quality: 75, effort: 4 })
    .toBuffer();

  const finalMeta = await sharp(webpBuf).metadata();
  totalAfter += webpBuf.length;

  out[img.filename] = {
    mime: "image/webp",
    base64: webpBuf.toString("base64"),
    width: finalMeta.width,
    height: finalMeta.height,
    origWidth: w,
    origHeight: h,
    bytes: webpBuf.length,
  };
  console.log(
    `${img.filename}: ${w}x${h} -> ${finalMeta.width}x${finalMeta.height} | ${Math.round(buf.length / 1024)}KB -> ${Math.round(webpBuf.length / 1024)}KB`,
  );
}

console.log(`\nTOTAL before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`TOTAL after:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);

writeFileSync("/tmp/processed-images.json", JSON.stringify(out));
console.log("Wrote /tmp/processed-images.json");