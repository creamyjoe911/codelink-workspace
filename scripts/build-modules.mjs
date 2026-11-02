import { readFileSync, writeFileSync } from "fs";

const processed = JSON.parse(readFileSync("/tmp/processed-images.json", "utf8"));
const content = readFileSync("src/lib/grandnatural-content.ts", "utf8");

// Extract SITE_CSS and SITE_BODY_HTML verbatim (lines 4-6 region).
// SITE_CSS is the string literal on line 5 (after "export const SITE_CSS: string =").
// SITE_BODY_HTML is the string literal on line 7 (after "export const SITE_BODY_HTML: string =").
// They are single-line string literals ending with \n';

function extractStringLiteral(src, varName) {
  const re = new RegExp(`export const ${varName}: string =\\s*\\n\\s*(')`);
  const startMatch = re.exec(src);
  if (!startMatch) throw new Error(`could not find ${varName}`);
  const quoteStart = startMatch.index + startMatch[0].length - 1; // index of opening quote
  // The literal is a single-quoted string with escaped \n and \'. Find the closing quote.
  // It ends with "';" at end of the literal. Scan for unescaped closing single quote.
  let i = quoteStart + 1;
  while (i < src.length) {
    if (src[i] === "\\" ) { i += 2; continue; }
    if (src[i] === "'") break;
    i++;
  }
  const literal = src.slice(quoteStart, i + 1); // includes quotes
  return literal;
}

const cssLiteral = extractStringLiteral(content, "SITE_CSS");
const bodyLiteral = extractStringLiteral(content, "SITE_BODY_HTML");

console.log("CSS literal length:", cssLiteral.length);
console.log("BODY literal length:", bodyLiteral.length);

// Now build the image data URI map.
// Logo (01) and hero (02) are inline. Everything else is lazy.
// 16-kep.jpg and 16-munkaink-referenciak.jpg are the same photo — both go to lazy.

const INLINE_KEYS = ["01-grandnatural.png", "02-grandnatural-darus-teherautoja-es-geppar.jpg"];

function fullKey(k) { return `images/${k}`; }

// Build inline images object literal (logo + hero) with width/height.
const inlineEntries = INLINE_KEYS.map((k) => {
  const p = processed[k];
  return `  "${fullKey(k)}": { src: "data:${p.mime};base64,${p.base64}", width: ${p.width}, height: ${p.height} },`;
}).join("\n");

// Build lazy images object literal (all others).
const lazyKeys = Object.keys(processed).filter((k) => !INLINE_KEYS.includes(k));
const lazyEntries = lazyKeys.map((k) => {
  const p = processed[k];
  return `  "${fullKey(k)}": { src: "data:${p.mime};base64,${p.base64}", width: ${p.width}, height: ${p.height} },`;
}).join("\n");

// Write the new content module (CSS + BODY + inline images only).
const newContent = `// Grandnatural site — CSS, body markup, and the two inline images (logo + hero).
// All other photos live in ./grandnatural-lazy-images and are loaded after render.
export const SITE_CSS: string =
  ${cssLiteral};
export const SITE_BODY_HTML: string =
  ${bodyLiteral};

export type SiteImage = { src: string; width: number; height: number };

// Only the logo and the hero photo are inlined in the homepage HTML response.
export const SITE_INLINE_IMAGES: Record<string, SiteImage> = {
${inlineEntries}
};
`;

writeFileSync("src/lib/grandnatural-content.ts", newContent);
console.log("Wrote src/lib/grandnatural-content.ts");

// Write the lazy images module.
const lazyModule = `// Grandnatural site — all photos except the logo and hero.
// Dynamically imported by the homepage after first paint so the initial HTML
// response stays small. Statically imported by the service/hub routes, which
// are separate pages and need their images immediately.
import type { SiteImage } from "./grandnatural-content";

export const SITE_LAZY_IMAGES: Record<string, SiteImage> = {
${lazyEntries}
};
`;

writeFileSync("src/lib/grandnatural-lazy-images.ts", lazyModule);
console.log("Wrote src/lib/grandnatural-lazy-images.ts");

// Report sizes
const inlineBytes = INLINE_KEYS.reduce((s, k) => s + processed[k].bytes, 0);
const lazyBytes = lazyKeys.reduce((s, k) => s + processed[k].bytes, 0);
console.log(`\nInline (logo+hero): ${(inlineBytes / 1024).toFixed(0)} KB`);
console.log(`Lazy (26 photos):  ${(lazyBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total WebP:         ${((inlineBytes + lazyBytes) / 1024 / 1024).toFixed(2)} MB`);