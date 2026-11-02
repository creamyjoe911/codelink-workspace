import { readFileSync, writeFileSync } from "fs";

const content = readFileSync("src/lib/grandnatural-content.ts", "utf8");

const regex = /"images\/([^"]+)":\s*\n\s*"data:image\/([^;]+);base64,([^"]+)"/g;
const images = [];
let m;
while ((m = regex.exec(content)) !== null) {
  images.push({ filename: m[1], mime: m[2], base64: m[3] });
}
console.log(`Found ${images.length} images`);
for (const img of images) {
  console.log(`  ${img.filename} (${img.mime}, ${Math.round((img.base64.length * 3) / 4 / 1024)} KB)`);
}
writeFileSync("/tmp/image-list.json", JSON.stringify(images, null, 2));
console.log("Wrote /tmp/image-list.json");