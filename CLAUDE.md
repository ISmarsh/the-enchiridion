# Adventure Time Catalog — Claude Context

@.toolbox/templates/ai-context/CLAUDE.md

> _[View shared context](.toolbox/templates/ai-context/CLAUDE.md) — git, testing, PR workflows_

---

## Project Overview

An ad-free catalog of Adventure Time episodes, characters, storylines, and songs.

**Vision:** Public wiki alternative + React portfolio piece

**Deployment:** GitHub Pages

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS with dark mode
- Static JSON data (no backend)
- TMDB API for episode metadata (via movie-metadata-mcp)

## Data Structure

```
src/data/
├── episodes.json      # Fetched from TMDB
├── characters.json    # Manual curation (main cast)
├── storylines.json    # Manual curation (major arcs)
└── songs.json         # Manual curation (with external links)
```

## Scope (v1)

| Content    | Scope                                                         |
| ---------- | ------------------------------------------------------------- |
| Episodes   | All 3 series (Adventure Time, Distant Lands, Fionna and Cake) |
| Characters | Main cast (~10-15)                                            |
| Storylines | Major arcs (~5-8)                                             |
| Songs      | Popular songs, link to external tabs                          |

## Theming

CSS variables in `src/index.css`, Tailwind tokens in `tailwind.config.js`.

Two theme layers:

- **Enchiridion** (site chrome) — brown, gold, parchment
- **Character** — finn, jake, bubblegum, marceline, bmo, iceking, flame, lsp, simon, lemongrab, prismo

Each theme defines: primary, secondary, accent, dark.

**Design rule:** Shared components (cards, badges, etc.) must use semantic tokens
(`bg-primary`, `border-accent`) — never hardcode a specific theme name. Parent
context sets which palette maps to the semantic tokens via `data-theme` or class:

```css
[data-theme="finn"] {
  --primary: var(--finn-primary);
  --accent: var(--finn-accent);
  ...
}
```

This lets the same `<Card>` work on the book-themed home page and a character-themed
detail page.

## External Resources

- **Episode data:** TMDB API (series IDs: 15260, 94810, 131378)
- **Song tabs:** Link to Kumodori/Tumblr (don't host)
- **Transcripts:** Submodule at `transcripts/` (CC-BY-SA 3.0 from Adventure Time Wiki)
- **AT Wiki:** adventuretime.fandom.com — Fandom sites block automated requests
  (403 from WebFetch, curl, scripts). Use Wikimedia Commons or web search instead.

## Transcripts Submodule

Git submodule: `transcripts/` → [ISmarsh/adventuretime-transcripts](https://github.com/ISmarsh/adventuretime-transcripts)

See [transcripts/README.md](transcripts/README.md) for full documentation including:

- Gap filling from SRT/SDH subtitles
- PGS (Blu-ray bitmap) OCR workflow
- Verification and correction processes

**Initialize submodule** (optional, only needed for transcript scripts):

```bash
git submodule update --init transcripts
```

**Scripts:**

- `scripts/parse_transcript_speakers.py` — Extract speaker names, map to character IDs
- `scripts/populate_character_ids.py` — Update episodes.json with characterIds from transcripts

**Future uses:**

- Full-text search through dialogue
- Extract memorable quotes for display

## Python Scripts

Scripts in `scripts/` require Python 3.10+ and no external dependencies.

Run from project root:

```bash
python scripts/parse_transcript_speakers.py --output scripts/speaker-analysis.json
python scripts/populate_character_ids.py
```
