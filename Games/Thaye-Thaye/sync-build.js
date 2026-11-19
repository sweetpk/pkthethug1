import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const distAssetsDir = path.join(distDir, "assets");
const targetAssetsDir = path.join(__dirname, "assets");
const targetHtml = path.join(__dirname, "index.html");
const distHtml = path.join(distDir, "template.html");

if (!fs.existsSync(distDir) || !fs.existsSync(distHtml)) {
  console.error("Error: dist or dist/template.html does not exist.");
  process.exit(1);
}

// 1. Copy dist/template.html -> index.html
fs.copyFileSync(distHtml, targetHtml);
console.log("✓ Synced dist/template.html -> index.html");

// 2. Replace target assets/ recursively with dist/assets/
fs.rmSync(targetAssetsDir, { recursive: true, force: true });
fs.cpSync(distAssetsDir, targetAssetsDir, { recursive: true });
console.log("✓ Synced dist/assets -> assets/");
console.log("✓ Build sync complete!");
