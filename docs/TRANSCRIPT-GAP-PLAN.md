# Transcript Gap-Filling Plan

31 Adventure Time episodes have no transcript file in the submodule. All 31 have transcript pages on the Adventure Time Wiki (adventuretime.fandom.com). This document tracks each gap, its expected filename, wiki status, and recommended source method.

## Gap Summary

| Season | Missing | Total | Coverage |
|--------|---------|-------|----------|
| S05 | 1 | 52 | 98% |
| S06 | 4 | 43 | 91% |
| S07 | 7 | 26 | 73% |
| S08 | 15 | 27 | 44% |
| S10 | 4 | 13 | 69% |
| **Total** | **31** | **303** | **90%** |

## Episode Details

### Season 5 (1 missing)

| # | Ep | Title | Expected Filename | Wiki Status | Source |
|---|-----|-------|-------------------|-------------|--------|
| 1 | S05E36 | Dungeon Train | `Adventure.Time.S05E36.Dungeon.Train.txt` | Complete | Wiki scrape |

### Season 6 (4 missing)

| # | Ep | Title | Expected Filename | Wiki Status | Source |
|---|-----|-------|-------------------|-------------|--------|
| 2 | S06E32 | Friends Forever | `Adventure.Time.S06E32.Friends.Forever.txt` | Complete | Wiki scrape |
| 3 | S06E37 | Water Park Prank | `Adventure.Time.S06E37.Water.Park.Prank.txt` | Complete | Wiki scrape |
| 4 | S06E38 | You Forgot Your Floaties | `Adventure.Time.S06E38.You.Forgot.Your.Floaties.txt` | Complete | Wiki scrape |
| 5 | S06E40 | Orgalorg | `Adventure.Time.S06E40.Orgalorg.txt` | Incomplete | Wiki + SDH fill |

### Season 7 (7 missing)

| # | Ep | Title | Expected Filename | Wiki Status | Source |
|---|-----|-------|-------------------|-------------|--------|
| 6 | S07E19 | Blank Eyed Girl | `Adventure.Time.S07E19.Blank.Eyed.Girl.txt` | Complete | Wiki scrape |
| 7 | S07E20 | Bad Jubies | `Adventure.Time.S07E20.Bad.Jubies.txt` | Complete | Wiki scrape |
| 8 | S07E22 | Scamps | `Adventure.Time.S07E22.Scamps.txt` | Incomplete | Wiki + SDH fill |
| 9 | S07E23 | Crossover | `Adventure.Time.S07E23.Crossover.txt` | Complete | Wiki scrape |
| 10 | S07E24 | The Hall of Egress | `Adventure.Time.S07E24.The.Hall.of.Egress.txt` | Incomplete | Wiki + SDH fill |
| 11 | S07E25 | Flute Spell | `Adventure.Time.S07E25.Flute.Spell.txt` | Incomplete | Wiki + SDH fill |
| 12 | S07E26 | The Thin Yellow Line | `Adventure.Time.S07E26.The.Thin.Yellow.Line.txt` | Complete | Wiki scrape |

### Season 8 (15 missing)

| # | Ep | Title | Expected Filename | Wiki Status | Source |
|---|-----|-------|-------------------|-------------|--------|
| 13 | S08E03 | Beyond the Grotto | `Adventure.Time.S08E03.Beyond.the.Grotto.txt` | Complete | Wiki scrape |
| 14 | S08E04 | Lady Rainicorn of the Crystal Dimension | `Adventure.Time.S08E04.Lady.Rainicorn.of.the.Crystal.Dimension.txt` | Complete | Wiki scrape |
| 15 | S08E06 | Bun Bun | `Adventure.Time.S08E06.Bun.Bun.txt` | Incomplete | Wiki + SDH fill |
| 16 | S08E08 | Elemental | `Adventure.Time.S08E08.Elemental.txt` | Incomplete | Wiki + SDH fill |
| 17 | S08E09 | Five Short Tables | `Adventure.Time.S08E09.Five.Short.Tables.txt` | Incomplete | Wiki + SDH fill |
| 18 | S08E10 | The Music Hole | `Adventure.Time.S08E10.The.Music.Hole.txt` | Complete | Wiki scrape |
| 19 | S08E11 | Daddy-Daughter Card Wars | `Adventure.Time.S08E11.Daddy-Daughter.Card.Wars.txt` | Complete | Wiki scrape |
| 20 | S08E12 | Preboot | `Adventure.Time.S08E12.Preboot.txt` | Incomplete | Wiki + SDH fill |
| 21 | S08E13 | Reboot | `Adventure.Time.S08E13.Reboot.txt` | Incomplete | Wiki + SDH fill |
| 22 | S08E14 | Two Swords | `Adventure.Time.S08E14.Two.Swords.txt` | Incomplete | Wiki + SDH fill |
| 23 | S08E15 | Do No Harm | `Adventure.Time.S08E15.Do.No.Harm.txt` | Complete | Wiki scrape |
| 24 | S08E16 | Wheels | `Adventure.Time.S08E16.Wheels.txt` | Complete | Wiki scrape |
| 25 | S08E17 | High Strangeness | `Adventure.Time.S08E17.High.Strangeness.txt` | Complete (needs formatting) | Wiki scrape + format |
| 26 | S08E18 | Horse and Ball | `Adventure.Time.S08E18.Horse.and.Ball.txt` | Incomplete | Wiki + SDH fill |
| 27 | S08E19 | Jelly Beans Have Power | `Adventure.Time.S08E19.Jelly.Beans.Have.Power.txt` | Complete (needs formatting) | Wiki scrape + format |

### Season 10 (4 missing)

| # | Ep | Title | Expected Filename | Wiki Status | Source |
|---|-----|-------|-------------------|-------------|--------|
| 28 | S10E01 | The Wild Hunt | `Adventure.Time.S10E01.The.Wild.Hunt.txt` | Complete | Wiki scrape |
| 29 | S10E02 | Always BMO Closing | `Adventure.Time.S10E02.Always.BMO.Closing.txt` | Complete | Wiki scrape |
| 30 | S10E06 | Ring of Fire | `Adventure.Time.S10E06.Ring.of.Fire.txt` | Complete | Wiki scrape |
| 31 | S10E08 | The First Investigation | `Adventure.Time.S10E08.The.First.Investigation.txt` | Complete | Wiki scrape |

## Source Methods

### 1. Wiki Scrape (19 episodes — complete transcripts)

The Adventure Time Wiki has full transcripts for these episodes at:
```
https://adventuretime.fandom.com/wiki/<Episode_Title>/Transcript
```

**Problem:** Fandom sites block all automated requests (403 for WebFetch, curl, scripts, API endpoints).

**Desktop workflow:**
1. Open each transcript page in a browser
2. Copy the transcript content (dialogue section only, skip wiki chrome)
3. Ensure wiki format is preserved:
   - Two spaces after speaker colon: `Character:  dialogue`
   - Scene descriptions in brackets: `[Scene description here.]`
   - Inline actions: `Character:  [gasps] Dialogue here.`
4. Remove any `==Transcript==` headers
5. Save as `Adventure.Time.SxxExx.Title.Here.txt` in the appropriate season directory

**Bulk approach (if wiki scraping tool works on desktop):**
```python
# The existing tools/ directory may have a scraper.
# Fandom API endpoint (may work from non-sandboxed environment):
# https://adventuretime.fandom.com/api.php?action=parse&page=<Title>/Transcript&format=json&prop=wikitext
```

### 2. Wiki + SDH Fill (12 episodes — incomplete wiki transcripts)

These episodes have partial wiki transcripts (missing stage directions, some dialogue gaps).

**Desktop workflow:**
1. Scrape available wiki content as baseline
2. Extract SDH subtitles from video files:
   ```bash
   ffprobe -v error -show_entries stream=index,codec_type:stream_tags=title -of csv=p=0 "<video>"
   ffmpeg -y -i "<video>" -map 0:<sdh_index> output.srt
   ```
3. Use SDH speaker labels and timestamps to fill gaps
4. Verify speaker attribution via video frame extraction (see [VERIFICATION-WORKFLOW.md](VERIFICATION-WORKFLOW.md))
5. Format to wiki standard and save

### 3. SDH-Only Fallback

If wiki content is too incomplete, convert directly from SDH subtitles:
1. Extract SDH subtitle track
2. Convert SRT format to wiki format
3. Add scene descriptions from video observation
4. Verify all speaker attributions

See [TRANSCRIPT-GAPS.md](TRANSCRIPT-GAPS.md) for documentation of this process (used for F&C S01 and S02).

## Priority Order

### Tier 1 — Direct wiki scrape (19 episodes)

These need only a browser copy-paste + format check. Estimated: quick.

```
S05E36, S06E32, S06E37, S06E38
S07E19, S07E20, S07E23, S07E26
S08E03, S08E04, S08E10, S08E11, S08E15, S08E16, S08E17, S08E19
S10E01, S10E02, S10E06, S10E08
```

### Tier 2 — Wiki + SDH supplement (12 episodes)

These need wiki content plus SDH gap-filling and verification. Requires video archive.

```
S06E40 (Orgalorg)
S07E22 (Scamps), S07E24 (The Hall of Egress), S07E25 (Flute Spell)
S08E06 (Bun Bun), S08E08 (Elemental), S08E09 (Five Short Tables)
S08E12 (Preboot), S08E13 (Reboot), S08E14 (Two Swords)
S08E18 (Horse and Ball)
```

### Tier 3 — Storyline-critical episodes (subset of above, highest value)

These appear in major storylines and are most valuable for character validation:

| Episode | Storyline(s) | Tier |
|---------|-------------|------|
| S07E23 Crossover | prismo-cosmic, simon-and-marcy | 1 |
| S08E08 Elemental | elements | 2 |
| S08E12 Preboot | finn-the-human, grass-sword-fern | 2 |
| S08E13 Reboot | finn-the-human, grass-sword-fern | 2 |
| S08E14 Two Swords | finn-the-human, grass-sword-fern | 2 |
| S08E19 Jelly Beans Have Power | flame-princess-arc | 1 |
| S10E01 The Wild Hunt | grass-sword-fern | 1 |

## File Naming Convention

Pattern: `Adventure.Time.SxxExx.Title.Here.txt`

Rules:
- Dots separate words (no spaces)
- Preserve `&` in titles (e.g., `Simon.&.Marcy`)
- Preserve `!` in titles (e.g., `Shh!`)
- Preserve `'` in contractions (e.g., `Don't.Look`)
- Preserve `+` in titles (e.g., `Graybles.1000+`)
- Preserve `,` in titles (e.g., `The.More.You.Moe,.The.Moe.You.Know`)
- Use `-` for hyphenated words (e.g., `Daddy-Daughter.Card.Wars`)
- Article case: lowercase `the`, `of`, `a` mid-title (e.g., `Vault.of.Bones`)

## Post-Addition Checklist

After adding each transcript file:

1. **Link in episodes.json** — Add `transcriptFile` field pointing to the new file
2. **Run speaker analysis** — `python scripts/parse_transcript_speakers.py --output scripts/speaker-analysis.json`
3. **Cross-check characters** — Compare transcript speakers against `characterIds` in episodes.json
4. **Fix any gaps** — Add missing characterIds, document false positives
5. **Update this document** — Mark episode as completed

## Video File Locations (Desktop)

```
D:\Shows\Adventure Time\          # Main series S01-S10
S:\Shows\Adventure Time\          # Overflow / Distant Lands
```

## Status

| Status | Count |
|--------|-------|
| Not started | 31 |
| In progress | 0 |
| Complete | 0 |

_Last updated: 2026-02-05_
