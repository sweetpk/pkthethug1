#!/usr/bin/env node
/**
 * update-games-manifest.js
 * -----------------------
 * Scans the Games/ folder and regenerates Games/manifest.json.
 * Run this after adding, removing, or editing HTML game files.
 *
 * Usage:
 *   node update-games-manifest.js
 * (or double-click update-games-manifest.bat on Windows)
 */

const fs = require('fs');
const path = require('path');

const GAMES_DIR = __dirname;
const MANIFEST_PATH = path.join(GAMES_DIR, 'manifest.json');

console.log('Games Manifest Updater');
console.log('----------------------');

// Palette of colors for newly detected games
const PALETTE = ['mint', 'pink', 'yellow', 'coral', 'white'];

// Read existing manifest if present to preserve custom descriptions and tags
let existingMap = new Map();
if (fs.existsSync(MANIFEST_PATH)) {
  try {
    const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
    const existingList = JSON.parse(raw);
    if (Array.isArray(existingList)) {
      existingList.forEach(item => {
        if (item && item.file) existingMap.set(item.file, item);
      });
    }
  } catch (err) {
    console.warn('⚠ Could not read existing manifest. Creating a fresh one.');
  }
}

// Find all HTML game files in the Games directory
const files = fs.readdirSync(GAMES_DIR)
  .filter(f => f.toLowerCase().endsWith('.html'))
  .sort((a, b) => a.localeCompare(b));

if (!files.length) {
  console.error('✖ No .html game files found in ' + GAMES_DIR);
  process.exitCode = 1;
} else {
  const manifest = [];

  files.forEach((file, idx) => {
    const existing = existingMap.get(file);
    const filePath = path.join(GAMES_DIR, file);

    // Extract title from HTML if possible
    let extractedTitle = '';
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
      if (titleMatch && titleMatch[1]) {
        extractedTitle = titleMatch[1].trim();
      }
    } catch (e) {
      // ignore
    }

    // Split title and subtitle if it has an en-dash or hyphen
    let displayTitle = extractedTitle || file.replace(/\.html$/i, '').replace(/[-_]/g, ' ');
    let displaySubtitle = 'Web Arcade Game';
    if (extractedTitle.includes('–')) {
      const parts = extractedTitle.split('–');
      displayTitle = parts[0].trim();
      displaySubtitle = parts.slice(1).join('–').trim();
    } else if (extractedTitle.includes('—')) {
      const parts = extractedTitle.split('—');
      displayTitle = parts[0].trim();
      displaySubtitle = parts.slice(1).join('—').trim();
    } else if (extractedTitle.includes('-')) {
      const parts = extractedTitle.split('-');
      displayTitle = parts[0].trim();
      displaySubtitle = parts.slice(1).join('-').trim();
    }

    const item = {
      file: file,
      title: existing?.title || displayTitle,
      subtitle: existing?.subtitle || displaySubtitle,
      description: existing?.description || `Play ${displayTitle} directly in your browser with keyboard and touch support.`,
      tag: existing?.tag || `0${idx + 1} ★ ARCADE`,
      badge: existing?.badge || 'PLAYABLE NOW',
      color: existing?.color || PALETTE[idx % PALETTE.length],
      icon: existing?.icon || '🎮',
      image: existing?.image || null,
      controls: existing?.controls || ['⌨ Keyboard', '📱 Touch Controls']
    };

    manifest.push(item);
  });

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log(`✔ manifest.json updated with ${manifest.length} game(s):`);
  manifest.forEach(m => console.log(`  - [${m.file}] ${m.title} (${m.subtitle})`));
}
