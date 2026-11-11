import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const targetAssetsDir = path.join(__dirname, 'assets');
const targetHtml = path.join(__dirname, 'index.html');
const distHtml = path.join(distDir, 'template.html');

if (!fs.existsSync(distDir) || !fs.existsSync(distHtml)) {
  console.error('Error: dist or dist/template.html does not exist.');
  process.exit(1);
}

// 1. Copy dist/template.html to index.html
fs.copyFileSync(distHtml, targetHtml);
console.log('✓ Synced dist/template.html -> index.html');

// 2. Clean out old files in assets/ and copy new assets
if (fs.existsSync(targetAssetsDir)) {
  for (const f of fs.readdirSync(targetAssetsDir)) {
    fs.unlinkSync(path.join(targetAssetsDir, f));
  }
} else {
  fs.mkdirSync(targetAssetsDir, { recursive: true });
}

for (const f of fs.readdirSync(distAssetsDir)) {
  fs.copyFileSync(path.join(distAssetsDir, f), path.join(targetAssetsDir, f));
  console.log(`✓ Copied asset ${f}`);
}
console.log('✓ Build sync complete!');
