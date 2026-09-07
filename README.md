# Font files needed here

`shared.css` expects these 10 files in this folder (same names, `.woff2` format):

- playfair-display-500.woff2
- playfair-display-600.woff2
- playfair-display-700.woff2
- playfair-display-800.woff2
- playfair-display-900.woff2
- playfair-display-italic-500.woff2
- inter-400.woff2
- inter-500.woff2
- inter-600.woff2
- inter-700.woff2

## How to get them (2 minutes)

1. Go to **https://gwfh.mranftl.com/fonts** (Google Webfonts Helper — a well-known open-source tool for exactly this).
2. Search **Playfair Display**. Under "Select styles," tick: 500, 600, 700, 800, 900 (regular) and 500 (italic).
3. Under "Copy CSS," set the format checkbox to **woff2 only** (uncheck the rest — smaller download, and it's the only format `shared.css` references).
4. Click **Download files**, unzip, and rename each file to match the list above (the tool's own filenames include a version string, e.g. `playfair-display-v37-latin-500.woff2` — just drop everything before the weight number).
5. Repeat steps 2–4 for **Inter**, selecting weights 400, 500, 600, 700 (regular only, no italic needed).
6. Drop all 10 renamed files into this `fonts/` folder and push to GitHub.

Until these files are added, the site still works fine — it just falls back to Georgia/system-serif and system-sans (the fallback fonts already built into `shared.css`), so nothing breaks in the meantime.
