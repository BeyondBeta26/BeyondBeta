#!/usr/bin/env python3
"""
Pulls the published Google Sheet CSV for Signals and writes signals.json
in the same shape the website expects. Run by
.github/workflows/update-signals.yml on a schedule -- not meant to be
run manually unless you're testing (see README note at the bottom).
"""
import csv
import io
import json
import re
import sys
import urllib.request
from datetime import date

CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlZKv4JBXqErNaEhVjksW9Ta61qSSbibm4uwTR0a5C1TP6eZxurnIHYagvWYwpbA/pub?output=csv"
OUTPUT_PATH = "signals.json"


def parse_flexible_date(raw):
    raw = (raw or "").strip()
    m = re.match(r"^(\d{4})-(\d{1,2})-(\d{1,2})", raw)
    if m:
        y, mo, d = m.groups()
        return date(int(y), int(mo), int(d))
    m = re.match(r"^(\d{1,2})\.(\d{1,2})\.(\d{4})", raw)
    if m:
        d, mo, y = m.groups()
        return date(int(y), int(mo), int(d))
    m = re.match(r"^(\d{1,2})/(\d{1,2})/(\d{4})", raw)
    if m:
        mo, d, y = m.groups()
        return date(int(y), int(mo), int(d))
    return None


def slugify(s):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return "signal-" + s[:45]


def main():
    try:
        req = urllib.request.Request(CSV_URL, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            raw = resp.read().decode("utf-8")
    except Exception as e:
        print(f"ERROR: could not fetch the sheet CSV: {e}", file=sys.stderr)
        sys.exit(1)

    reader = csv.DictReader(io.StringIO(raw))
    rows = []
    for row in reader:
        row = {(k or "").strip(): (v or "").strip() for k, v in row.items()}
        if (row.get("Approved", "") or "").lower() != "yes":
            continue
        title = row.get("Headline / Titel", "")
        url = row.get("Link", "")
        layer_raw = row.get("Layer-Nr", "")
        d = parse_flexible_date(row.get("Signal-Datum", ""))
        if not (title and url and layer_raw and d):
            continue
        try:
            layer = int(float(layer_raw))
        except ValueError:
            continue
        rows.append({
            "layer": layer,
            "date": d.isoformat(),
            "title": title,
            "url": url,
            "source": row.get("Quelle", ""),
            "_sort": d,
        })

    rows.sort(key=lambda r: r["_sort"])
    for i, r in enumerate(rows, start=1):
        r["num"] = f"#{i:03d}"
        r["id"] = slugify(r["title"])
        del r["_sort"]
    rows.reverse()  # newest first, matching the site's existing convention

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(rows, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(rows)} approved signals to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()

# To test locally: python3 scripts/update_signals.py
# (writes signals.json in whatever directory you run it from)
