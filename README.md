# Beyond Beta website — file guide

This is now a real multi-page site: 6 HTML pages sharing one stylesheet and
one script file, so editing content in `shared.js` updates it everywhere at
once instead of needing to hand-edit every page.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `framework.html` | The Sovereignty Map — full interactive map + archive grouped by layer |
| `briefings.html` | Full archive of weekly Briefings |
| `signals.html` | Full archive of Signals, each with a "Share on LinkedIn" button |
| `authors.html` | Full editorial team bios + guest contributors |
| `about.html` | Mission, method, independence, contact |
| `shared.css` | All styling — colors, fonts, layout, components |
| `shared.js` | **All content lives here**: layer names, Briefings, Signals, team bios — plus the code that draws the map and renders every list |

Upload all 8 files to the same folder in your GitHub repo (keep the
filenames exactly as they are — the pages link to each other by name, and
they all load `shared.css` and `shared.js` from the same folder).

## What's safe to edit yourself, and where

Open `shared.js`, find the block you want, edit the text between quotes.
Everything below is plain content, not code logic — as long as you keep
the punctuation (commas, quotes, curly braces) intact around what you
change, you can't break anything by editing the words.

- **`const LAYERS = [...]`** — the 8 Sovereignty Stack layers: name,
  description, color, essay count. Changes here update the map, the
  homepage layer grid, and the Framework page everywhere at once.
- **`const BRIEFINGS = [...]`** — every Briefing. Add a new one by copying
  an existing `{...}` block and changing the values. Set `featured:true`
  on the one you want shown on the homepage (only one should be `true`
  at a time). `url:'#'` is a placeholder — replace it with the real Kit
  post link once one exists, and the "Read briefing" / "Share" links
  will use it automatically.
- **`const SIGNALS = [...]`** — every Signal, same pattern as Briefings.
- **`const TEAM = [...]`** — editors and guest contributors. Set
  `guest:true` for guest contributors so they're grouped separately on
  the Authors page.

## What's *not* simple text editing

Colors, spacing, the map's line-drawing logic, and page layout live in
`shared.css` and the functions in `shared.js` (below the data arrays).
Editing those safely means understanding CSS/JS syntax — worth asking me
to change rather than hand-editing, since one misplaced bracket can break
every page at once (since they all share these two files).

## Known placeholders to swap out before this feels "real"

- Every `url:'#'` in `BRIEFINGS` and `SIGNALS` — should point to the
  actual Kit post once published.
- The subscribe form (bottom of every page) shows a placeholder message
  on submit — needs to be pointed at your real Kit form action.
- Team bios and guest contributor text are illustrative — worth a pass
  once real long-form bios exist.
