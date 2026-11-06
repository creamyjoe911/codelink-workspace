import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({
  width: 390,
  height: 900,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
await page.setContent(
  `<!doctype html><meta charset=utf-8>
<style>
.t{padding-inline:14vw}
.u{padding-right:0}
</style>
<div class="t u" id=a>x</div>
<div class="t" style="padding-right:0" id=b>y</div>`,
);
const a = await page.evaluate(() => {
  const e = getComputedStyle(document.getElementById("a"));
  return [e.paddingRight, e.paddingLeft];
});
const b2 = await page.evaluate(() => {
  const e = getComputedStyle(document.getElementById("b"));
  return [e.paddingRight, e.paddingLeft];
});
console.log("class u after class t ->", JSON.stringify(a));
console.log("inline attr after class t ->", JSON.stringify(b2));
await browser.close();