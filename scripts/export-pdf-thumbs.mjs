/**
 * Εξαγωγή σελίδων PDF → PNG + manifest για το site.
 * Τρέξε: npm run assets:pdf
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "pause-mode");
const dataDir = path.join(root, "src", "data");

const worker = path.join(root, "node_modules", "pdfjs-dist", "legacy", "build", "pdf.worker.mjs");
GlobalWorkerOptions.workerSrc = pathToFileURL(worker).href;

function resolvePdf(shortName) {
  const p = path.join(root, shortName);
  if (fs.existsSync(p)) return p;
  const found = fs.readdirSync(root).find((f) => f.toLowerCase().endsWith(".pdf") && f.includes(shortName));
  return found ? path.join(root, found) : null;
}

function findTwoPdfs() {
  let box = resolvePdf("FINAL1~1.PDF") || resolvePdf("FINAL1");
  let stickers = resolvePdf("143AB~1.PDF") || resolvePdf("143AB");
  if (box && stickers && fs.existsSync(box) && fs.existsSync(stickers)) {
    return { box, stickers };
  }
  const all = fs.readdirSync(root).filter((f) => f.endsWith(".pdf"));
  if (all.length < 2) return null;
  const sorted = all
    .map((f) => ({ f, s: fs.statSync(path.join(root, f)).size }))
    .sort((a, b) => b.s - a.s);
  return {
    box: path.join(root, sorted[0].f),
    stickers: path.join(root, sorted[1].f),
  };
}

async function exportPages(pdfPath, prefix, maxPages, scale) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await getDocument({ data, verbosity: 0 }).promise;
  const n = Math.min(doc.numPages, maxPages);
  const urls = [];
  for (let i = 1; i <= n; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale });
    const w = Math.floor(viewport.width);
    const h = Math.floor(viewport.height);
    const canvas = createCanvas(w, h);
    const context = canvas.getContext("2d");
    await page.render({ canvasContext: context, viewport, canvas }).promise;
    const name = `${prefix}-${String(i).padStart(2, "0")}.png`;
    const dest = path.join(outDir, name);
    console.log("Export:", path.basename(pdfPath), `σελ. ${i}/${n}`, "->", name);
    fs.writeFileSync(dest, canvas.toBuffer("image/png"));
    urls.push(`/images/pause-mode/${name}`);
  }
  return urls;
}

const pair = findTwoPdfs();
if (!pair) {
  console.error("Δεν βρέθηκαν τουλάχιστον 2 PDF στη ρίζα του project.");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const boxScale = 1.35;
const stickerScale = 2;

const box = await exportPages(pair.box, "box", 12, boxScale);
const stickers = await exportPages(pair.stickers, "stickers", 8, stickerScale);

const manifest = { box, stickers };
fs.writeFileSync(path.join(dataDir, "pause-gallery.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log("Manifest -> src/data/pause-gallery.json");

const pdfPublic = path.join(root, "public", "pdfs");
fs.mkdirSync(pdfPublic, { recursive: true });
fs.copyFileSync(pair.box, path.join(pdfPublic, "final-box-cards.pdf"));
fs.copyFileSync(pair.stickers, path.join(pdfPublic, "stickers-box-1.pdf"));
console.log("PDF -> public/pdfs/");

console.log("Έτοιμο.");
