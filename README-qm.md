# Quiz Master — Lazy Loading Fix

## What was slowing things down

The app used to fetch **every** `.json` file in `question-banks/` and load
**all** questions into memory the moment the page opened — before you'd
picked anything. With a handful of files that's invisible. With thousands
of questions across many files, it meant downloading and parsing
everything on every page load, which is what was making the site grind to
a halt.

## What changed

1. **Page load now only reads `manifest.json`.** This is a small file
   listing each bank file's name, question count, and which
   categories/sub-categories/tags it contains. No actual question content
   is downloaded yet. This is what makes the home screen (totals, source
   list, month grid, category chips) load instantly no matter how many
   banks you have.

2. **Real question content loads only once you narrow down.** The home
   screen now asks you to pick a source or month before it fetches
   anything. Once you do, it fetches *only* the matching files — not
   everything. Already-fetched files are cached for the rest of the
   session, so clicking around between filters doesn't re-download.

3. **The Upload feature is unchanged.** Uploading files still loads them
   fully and immediately — that flow was never the bottleneck, since you
   control exactly how many files you upload at once.

## Your new workflow

Nothing changes about how you add question banks — just drop `.json`
files into `question-banks/` like before. The one new step: after
adding/removing/editing files, regenerate the manifest:

```
node build-manifest.js
```

Run this from the same folder as `quiz-master.html` (it expects a
`question-banks/` subfolder next to it). It scans every file once, and
writes `question-banks/manifest.json` for you — no more hand-editing the
manifest, and it now carries enough metadata (per-file category/tag lists)
that the app never has to download a bank file's content just to build a
filter chip.

You'll need [Node.js](https://nodejs.org) installed on whatever machine
you run this from (just to run the script — your visitors' browsers don't
need it).

**Tip:** since you're planning to add thousands of questions, it's worth
running this script as a step in however you publish/deploy the site (a
git pre-commit hook, a build script, etc.) so the manifest never goes
stale relative to the files in the folder.

## A heads-up about "All Sources"

Picking "All Sources" with no month/file filter, once you have a huge
number of banks, **will** fetch everything — there's no way around that if
you genuinely want every question pooled together. The app just no longer
does this automatically on page load; it only happens if you deliberately
ask for it (or never narrow down before starting a quiz, at which point a
loading spinner appears while it gathers what's needed). For day-to-day
use with thousands of questions, narrowing by source/month first keeps
things fast.
