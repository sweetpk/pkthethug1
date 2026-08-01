// reeltale-update-manifest.js
// For the REELTALE app only (not quiz master).
// Scans the Story-JSONs folder and rewrites manifest.json to list every
// story file found there. Run this after adding/removing/renaming story
// JSON files, then commit the updated manifest.json alongside them.

const fs = require('fs');
const path = require('path');

const STORY_DIR = path.join(__dirname, 'Story-JSONs');
const MANIFEST_PATH = path.join(STORY_DIR, 'manifest.json');

function fail(msg){
  console.error('✖ ' + msg);
  process.exitCode = 1;
}

console.log('Reeltale manifest updater');
console.log('--------------------------');

if (!fs.existsSync(STORY_DIR)){
  fail(`Couldn't find a "Story-JSONs" folder next to this script (expected at: ${STORY_DIR}).`);
} else {
  const files = fs.readdirSync(STORY_DIR)
    .filter(f => f.toLowerCase().endsWith('.json'))
    .filter(f => f.toLowerCase() !== 'manifest.json')
    .sort((a, b) => a.localeCompare(b));

  if (!files.length){
    fail('No story .json files found in Story-JSONs — nothing to write.');
  } else {
    // Quick validity check so a broken file doesn't silently end up in the manifest.
    const bad = [];
    for (const f of files){
      try{
        const data = JSON.parse(fs.readFileSync(path.join(STORY_DIR, f), 'utf8'));
        if (!data || !Array.isArray(data.slides) || !data.slides.length){
          bad.push(f + ' (missing/empty "slides" array)');
        }
      } catch(e){
        bad.push(f + ' (invalid JSON: ' + e.message + ')');
      }
    }

    if (bad.length){
      console.warn('⚠ Skipping ' + bad.length + ' file(s) with problems:');
      bad.forEach(b => console.warn('  - ' + b));
    }

    const goodFiles = files.filter(f => !bad.some(b => b.startsWith(f + ' ')));

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(goodFiles, null, 2) + '\n', 'utf8');

    console.log(`✔ manifest.json updated with ${goodFiles.length} stor${goodFiles.length === 1 ? 'y' : 'ies'}:`);
    goodFiles.forEach(f => console.log('  - ' + f));
  }
}
