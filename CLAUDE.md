# Adventure Time Catalog — Claude Context

@.planet-smars/templates/ai-context/CLAUDE.md

> _[View shared context](.planet-smars/templates/ai-context/CLAUDE.md) — git, testing, PR workflows_

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

## External Resources

- **Episode data:** TMDB API (series IDs: 15260, 105971, 205962)
- **Song tabs:** Link to Kumodori/Tumblr (don't host)

## TODO

See `c:/Dev/todo.md` for project tasks.
