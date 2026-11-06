#!/usr/bin/env node
/**
 * qm-build-manifest.js
 * ------------------
 * Scans the question-banks/ folder and regenerates manifest.json.
 *
 * WHY THIS EXISTS:
 * The quiz app used to fetch every single .json bank file on page load just
 * to show counts on the home screen (months, sources, categories, etc).
 * With thousands of questions across many files, that made the app download
 * everything before the user even picked anything — which is what was
 * causing the slowdown.
 *
 * Now the app only fetches manifest.json on load. This script is what
 * builds that manifest: it scans every bank file ONE time, on your machine,
 * and writes out a small summary (filename, count, categories, sub-categories,
 * tags) for each file. The app reads only this tiny file at startup, and only
 * fetches a bank file's full questions when that specific file is actually
 * needed (filtered into the quiz or the user picks it).
 *
 * USAGE:
 *   node qm-build-manifest.js
 *
 * Run this any time you add, remove, or edit files in question-banks/.
 * It will overwrite question-banks/manifest.json.
 *
 * Requires Node.js (no extra packages needed).
 */

const fs = require('fs');
const path = require('path');

const BANKS_DIR = path.join(__dirname, 'question-banks');
const MANIFEST_PATH = path.join(BANKS_DIR, 'manifest.json');

function main() {
  if (!fs.existsSync(BANKS_DIR)) {
    console.error(`✗ Folder not found: ${BANKS_DIR}`);
    console.error(`  Create a "question-banks" folder next to this script, put your .json bank files in it, then re-run.`);
    process.exit(1);
  }

  const files = fs.readdirSync(BANKS_DIR)
    .filter(f => f.endsWith('.json') && f !== 'manifest.json')
    .sort();

  if (files.length === 0) {
    console.error(`✗ No .json bank files found in ${BANKS_DIR}`);
    process.exit(1);
  }

  const manifest = [];
  let totalQuestions = 0;
  let errors = 0;

  for (const filename of files) {
    const fullPath = path.join(BANKS_DIR, filename);
    let raw;
    try {
      raw = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
      console.error(`✗ Could not read ${filename}: ${e.message}`);
      errors++;
      continue;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error(`✗ Invalid JSON in ${filename}: ${e.message}`);
      errors++;
      continue;
    }

    if (!Array.isArray(data)) {
      console.error(`✗ ${filename} does not contain a JSON array — skipped`);
      errors++;
      continue;
    }

    if (data.length === 0) {
      console.warn(`⚠ ${filename} is an empty array — skipped`);
      continue;
    }

    const categories = new Set();
    const subCategories = new Set();
    const tags = new Set();

    for (const q of data) {
      if (q.category) categories.add(q.category);
      if (q.sub_category) subCategories.add(q.sub_category);
      if (q.tag) tags.add(q.tag);
    }

    manifest.push({
      file: filename,
      count: data.length,
      categories: [...categories].sort(),
      sub_categories: [...subCategories].sort(),
      tags: [...tags].sort(),
    });

    totalQuestions += data.length;
    console.log(`✓ ${filename} — ${data.length} questions`);
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  console.log('');
  console.log('────────────────────────────────────────');
  console.log(`Manifest written to: ${MANIFEST_PATH}`);
  console.log(`Files included:      ${manifest.length}`);
  console.log(`Total questions:     ${totalQuestions}`);
  if (errors > 0) console.log(`Files skipped:       ${errors} (see ✗ above)`);
  console.log('────────────────────────────────────────');
}

main();
