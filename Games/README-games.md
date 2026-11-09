# Games Hub — Developer Guide

## How Games Work on the Website

The website features an in-browser Arcade showcase at `games.html`. All games inside this `Games/` directory are automatically tracked, indexed, and displayed on the main site.

---

## Adding a New Game

1. **Add your game file:**  
   Drop any standalone HTML game into this folder:
   ```
   Games/your-game-name.html
   ```

2. **Update the manifest:**  
   Double-click `update-games-manifest.bat` (on Windows) or run:
   ```bash
   node update-games-manifest.js
   ```

3. **Verify:**  
   Open `games.html` in your browser. Your new game will appear immediately as a playable, responsive card with keyboard & touch controls!

---

## Customizing a Game's Card Details

In `Games/manifest.json`, each entry can be customized with:
- `title`: Display name (e.g. `"Downhill Rush"`)
- `subtitle`: Catchy genre / tagline (e.g. `"Endless Mountain Bike Freeride"`)
- `description`: 1-2 sentence description of the gameplay
- `tag`: Category / index pill (e.g. `"01 ★ ACTION / MTB"`)
- `badge`: Badge text (e.g. `"HOT ★ PLAY NOW"`, `"NEW"`, `"FEATURED"`)
- `color`: Card background theme (`"mint"`, `"pink"`, `"yellow"`, `"coral"`, `"white"`)
- `icon`: Large hero emoji or visual icon (e.g. `"🚵‍♂️"`, `"🏎️"`, `"🚀"`)
- `controls`: List of control tags (e.g. `["⌨ Arrow Keys", "📱 Touch D-Pad", "🔊 SFX"]`)

When you re-run `update-games-manifest.js`, any custom descriptions, tags, and icons you set in `manifest.json` are safely preserved!
