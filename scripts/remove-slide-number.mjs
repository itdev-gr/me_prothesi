/**
 * One-off: removes red-highlighted slide number region from PNG (fills with sampled background).
 */
import { createCanvas, loadImage } from "@napi-rs/canvas";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SRC =
  process.argv[2] ||
  join(
    process.env.USERPROFILE || "",
    ".cursor",
    "projects",
    "c-Users-itdev-OneDrive-Desktop-panagopoulou-me-prothesi-panagopoulou-2",
    "assets",
    "c__Users_itdev_AppData_Roaming_Cursor_User_workspaceStorage_c776c3cd2a2ad1f2cc6232865181d45a_images_image-68791472-1cd7-485a-89e1-aa6d82dd8e2d.png",
  );

const OUT = process.argv[3] || join(root, "public", "slide-topothesi-no-number.png");

const img = await loadImage(SRC);
const w = img.width;
const h = img.height;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0);
const imageData = ctx.getImageData(0, 0, w, h);
const { data } = imageData;

let minX = w,
  minY = h,
  maxX = 0,
  maxY = 0;
let found = false;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 200 && g < 100 && b < 100) {
      found = true;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

if (!found) {
  console.error("No red region found; adjust thresholds or path.");
  process.exit(1);
}

const pad = 4;
const padLeft = 28;
minX = Math.max(0, minX - padLeft);
minY = Math.max(0, minY - pad);
maxX = Math.min(w - 1, maxX + pad);
maxY = Math.min(h - 1, maxY + pad);

// Sample background to the right of the box
const sampleX0 = Math.min(maxX + 24, w - 40);
const sampleY0 = minY;
const sw = Math.min(80, w - sampleX0);
const sh = Math.min(maxY - minY + 8, h - sampleY0);
let sr = 0,
  sg = 0,
  sb = 0,
  n = 0;
for (let y = sampleY0; y < sampleY0 + sh && y < h; y++) {
  for (let x = sampleX0; x < sampleX0 + sw && x < w; x++) {
    const i = (y * w + x) * 4;
    sr += data[i];
    sg += data[i + 1];
    sb += data[i + 2];
    n++;
  }
}
sr = Math.round(sr / n);
sg = Math.round(sg / n);
sb = Math.round(sb / n);

for (let y = minY; y <= maxY; y++) {
  for (let x = minX; x <= maxX; x++) {
    const i = (y * w + x) * 4;
    data[i] = sr;
    data[i + 1] = sg;
    data[i + 2] = sb;
    data[i + 3] = 255;
  }
}

ctx.putImageData(imageData, 0, 0);
const buf = await canvas.encode("png");
writeFileSync(OUT, buf);
console.log("Wrote", OUT, "bbox", minX, minY, maxX, maxY, "fill", sr, sg, sb);
