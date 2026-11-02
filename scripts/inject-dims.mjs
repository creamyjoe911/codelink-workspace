import { readFileSync, writeFileSync } from "fs";

const processed = JSON.parse(readFileSync("/tmp/processed-images.json", "utf8"));
const content = readFileSync("src/lib/grandnatural-content.ts", "utf8");

// Extract the body literal.
const re = /export const SITE_BODY_HTML: string =\s*\n\s*(')/;
const startMatch = re.exec(content);
const quoteStart = startMatch.index + startMatch[0].length - 1;
let i = quoteStart + 1;
while (i < content.length) {
  if (content[i] === "\\") { i += 2; continue; }
  if (content[i] === "'") break;
  i++;
}
const bodyLiteral = content.slice(quoteStart, i + 1);
let body = bodyLiteral.slice(1, -1); // inner string content (with \n escapes)

// Decode \n to real newlines for manipulation, then re-encode.
const decoded = body.replace(/\\n/g, "\n").replace(/\\'/g, "'");

// For each img tag, add width/height based on the processed image dimensions.
// Map filename -> {width,height}. Note 16-kep.jpg and 16-munkaink-referenciak.jpg both map.
function dimsFor(filename) {
  const key = filename.replace(/^images\//, "");
  const p = processed[key];
  if (!p) throw new Error("no dims for " + filename);
  return { width: p.width, height: p.height };
}

let out = decoded.replace(/<img\b[^>]*>/g, (tag) => {
  const srcMatch = tag.match(/src="images\/([^"]+)"/);
  if (!srcMatch) return tag;
  const filename = "images/" + srcMatch[1];
  const { width, height } = dimsFor(filename);
  // Skip if width/height already present.
  if (/width=/.test(tag) && /height=/.test(tag)) return tag;
  // Insert width/height right after <img (before other attrs).
  return tag.replace(/<img/, `<img width="${width}" height="${height}"`);
});

// Re-encode back to the literal form.
const reEncoded = out.replace(/'/g, "\\'").replace(/\n/g, "\\n");
const newLiteral = "'" + reEncoded + "'";

const newContent = content.slice(0, quoteStart) + newLiteral + content.slice(i + 1);
writeFileSync("src/lib/grandnatural-content.ts", newContent);
console.log("Injected width/height into body HTML img tags.");

// Verify
const verify = readFileSync("src/lib/grandnatural-content.ts", "utf8");
const vImgs = [...verify.matchAll(/<img[^>]*>/g)];
console.log("img tags now:", vImgs.length);
vImgs.slice(0, 4).forEach((m) => console.log("  " + m[0].slice(0, 120)));
vImgs.slice(-2).forEach((m) => console.log("  " + m[0].slice(0, 120)));