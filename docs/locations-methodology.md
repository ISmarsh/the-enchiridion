# Locations Data — Curation Methodology

> Working document for planning the locations dataset.
> Intended for Claude desktop session with full tool access.

---

## 1. How Other Data Was Curated (Precedent)

| Data       | Count | Selection basis                                                                           | Cross-refs                                         | Population method                                                        |
| ---------- | ----- | ----------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Characters | 78    | Narrative significance; expanded incrementally (61→78)                                    | Family relationships (symmetric), episode wiring   | Descriptions manual; episodeIds automated via transcript speaker parsing |
| Storylines | 15    | Multi-episode arcs; major (10+ eps, series-shaping) vs minor (5-7 eps, character-focused) | episodeOrder + characterIds                        | Fully manual curation                                                    |
| Episodes   | 303   | Comprehensive — all episodes from TMDB                                                    | characterIds from transcripts, storylineIds manual | TMDB metadata + transcript scripts                                       |

**Key takeaway:** This project uses _curated significance_ over _exhaustive completeness_. Characters were 61, then grown to 78 when coverage gaps became clear. The same incremental approach should apply to locations.

---

## 2. Selection Criteria for Locations

A location earns inclusion if it meets **at least one** of these thresholds:

### Tier 1 — Include (strong signal)

- **Has a resident character in characters.json** (e.g., Candy Kingdom ← Princess Bubblegum)
- **Is the primary setting for a storyline** (e.g., Castle Lemongrab ← Lemongrab Saga)
- **Appears in 3+ episode synopses** by name

### Tier 2 — Strong candidate (needs verification)

- **Appears in 1-2 episode synopses** AND has a named ruler/resident
- **Is a named episode title** that's also a place (e.g., "City of Thieves")
- **Appears in the Elements or other multi-part specials** as a distinct zone

### Tier 3 — Exclude (unless upgraded by transcript evidence)

- Places mentioned only once in passing with no associated character
- Generic biomes (forest, desert, ocean) unless narratively distinct
- Alternate timeline versions of existing locations

---

## 3. Data Mining Results

### 3a. Locations derived from character home bases

| Character                      | Location                       | In current data?                     |
| ------------------------------ | ------------------------------ | ------------------------------------ |
| Princess Bubblegum             | Candy Kingdom                  | Yes                                  |
| Ice King                       | Ice Kingdom                    | Yes                                  |
| Flame Princess / Flame King    | Fire Kingdom                   | Yes                                  |
| Finn, Jake, BMO                | Tree Fort                      | Yes                                  |
| Marceline                      | Marceline's House (cave)       | Yes                                  |
| Hunson Abadeer                 | The Nightosphere               | Yes                                  |
| LSP                            | Lumpy Space                    | Yes                                  |
| Lemongrab                      | Castle Lemongrab               | Yes                                  |
| Prismo                         | Prismo's Time Room             | Yes                                  |
| Death                          | Dead Worlds / Land of the Dead | Yes                                  |
| Grob Gob Glob Grod / Magic Man | Mars                           | Yes                                  |
| Tree Trunks / Lady Rainicorn   | Crystal Dimension              | Yes (both characters linked)         |
| Wildberry Princess             | Wildberry Kingdom              | Yes                                  |
| Slime Princess                 | Slime Kingdom                  | Yes (added this session)             |
| Starchy / Ghost Princess       | Candy Kingdom Graveyard        | Yes (reworked from "Ghost Kingdom")  |
| Susan Strong                   | Beautopia                      | No                                   |
| Jermaine                       | Joshua & Margaret's house      | No                                   |
| BMO (future)                   | Land of Ooo (future)           | No (covered by Future Ooo storyline) |

### 3b. Locations derived from storylines

| Storyline          | Primary setting(s)                          | In current data?           |
| ------------------ | ------------------------------------------- | -------------------------- |
| Simon & Marcy      | Pre-war ruins → Ice Kingdom                 | Ice Kingdom: yes           |
| The Lich           | Multiverse, Prismo's Time Room, Citadel     | Prismo's: yes; Citadel: no |
| Finn the Human     | Founders' Island, Tree Fort                 | Both: yes                  |
| Bubbline           | Marceline's House, Candy Kingdom            | Both: yes                  |
| Stakes             | Various Ooo locations                       | —                          |
| Elements           | 4 elemental zones (Candy, Slime, Fire, Ice) | Slime zone: no             |
| Grass Sword & Fern | Tree Fort                                   | Yes                        |
| Gum War & GOLB     | Candy Kingdom outskirts                     | Yes (Candy Kingdom)        |
| Flame Princess     | Fire Kingdom                                | Yes                        |
| Lemongrabs         | Castle Lemongrab                            | Yes                        |
| Peppermint Butler  | Candy Kingdom, Dead Worlds                  | Both: yes                  |
| Jake's Pups        | Various                                     | —                          |
| Prismo & Cosmic    | Prismo's Time Room                          | Yes                        |
| Future Ooo         | Future version of Ooo                       | No (but niche)             |

### 3c. Episode synopsis frequency (place name search)

| Place name          | Synopsis mentions | In current data?                                      |
| ------------------- | ----------------- | ----------------------------------------------------- |
| Candy Kingdom       | 15                | Yes                                                   |
| Ooo (general)       | 15                | N/A (world, not a location)                           |
| Island(s)           | 8                 | Yes (Founders' Island)                                |
| Lumpy Space         | 7                 | Yes                                                   |
| Fire Kingdom        | 6                 | Yes                                                   |
| Dungeon(s)          | 5                 | No (generic, multiple dungeons)                       |
| Ice Kingdom         | 3                 | Yes                                                   |
| Treehouse/Tree Fort | 3                 | Yes                                                   |
| Desert              | 3                 | No (generic biome)                                    |
| Mountain            | 3                 | No (generic, though "The Mountain" is a Lemongrab ep) |
| Marceline's house   | 2                 | Yes                                                   |
| Nightosphere        | 2                 | Yes                                                   |
| Mars                | 2                 | Yes                                                   |
| Wizard City         | 2                 | Yes                                                   |
| Slime Kingdom       | 2                 | **No — should add**                                   |
| Founders' Island    | 2                 | Yes                                                   |
| City of Thieves     | 1                 | No                                                    |
| Land of the Dead    | 1                 | Yes (as Dead Worlds)                                  |
| Beautopia           | 1                 | No                                                    |
| Pillow World        | 1                 | Yes                                                   |
| Citadel             | 1                 | No                                                    |
| Crystal Dimension   | 1                 | Yes                                                   |
| Wildberry Kingdom   | 1                 | Yes                                                   |

---

## 4. Current Data Quality Assessment (Updated)

### 4a. Validation results

```
18 locations, 0 broken references
Characters: all valid
Storylines: all valid
Episodes:   all valid
```

### 4b. Cross-reference density (current 18 locations)

| Location                | Chars | Eps | Storylines | Signal strength |
| ----------------------- | ----- | --- | ---------- | --------------- |
| Candy Kingdom           | 7     | 11  | 2          | Strong          |
| Tree Fort               | 6     | 5   | 2          | Strong          |
| Founders' Island        | 4     | 7   | 1          | Strong          |
| Fire Kingdom            | 3     | 6   | 2          | Strong          |
| Castle Lemongrab        | 2     | 5   | 1          | Strong          |
| Prismo's Time Room      | 2     | 4   | 2          | Strong          |
| Ice Kingdom             | 2     | 4   | 1          | Strong          |
| Wizard City             | 2     | 4   | 0          | Moderate        |
| Mars                    | 2     | 3   | 1          | Moderate        |
| Crystal Dimension       | 2     | 3   | 0          | Moderate        |
| Nightosphere            | 2     | 2   | 1          | Moderate        |
| Candy Kingdom Graveyard | 2     | 1   | 0          | Moderate\*      |
| Marceline's House       | 1     | 4   | 2          | Moderate        |
| Lumpy Space             | 1     | 6   | 0          | Moderate\*\*    |
| Dead Worlds             | 1     | 3   | 0          | Moderate        |
| Wildberry Kingdom       | 1     | 1   | 0          | Weak            |
| Slime Kingdom           | 1     | 2   | 1          | Moderate        |
| Pillow World            | 1     | 1   | 0          | Weak            |

\*Graveyard: user confirms it appears more often than data shows; transcript search priority.
\*\*Lumpy Space: see quality concern below.

### 4c. Episode coverage — lessons learned

**Key finding: hand-picked episode IDs from memory are unreliable.** The initial data had **6 incorrect episode references** caught by spot-checking IDs against actual episode content:

- `s10e16` (doesn't exist) in Tree Fort
- `s05e03` (Short Graybles) in Pillow World — should be `s05e16` (Puhoy)
- `s06e32` (Friends Forever, an Ice King ep) in Fire Kingdom
- `s03e18` (The New Frontier, Jake's death dream) in Wildberry Kingdom
- `s06e14` (Princess Day, LSP/Marceline prank) in Wildberry Kingdom
- `s05e37` (Box Prince, Box Kingdom) in Graveyard
- `s08e18-21` (wrong range) for Founders' Island — actual Islands miniseries is `s08e20-27`

**Implication:** Every episode reference should be verified against actual episode content before committing. Synopsis search is more reliable than recall.

**Lumpy Space quality concern:** Synopsis search enriched Lumpy Space to 6 episodes, but several (s04e12 Gotcha, s05e49 Bad Timing, s06e09 Prince Who Wanted Everything, s06e39 Be Sweet) are LSP-centric episodes that may not be _set_ in Lumpy Space itself. Only s01e02 and s03e06 clearly take place there. Needs transcript verification.

**Remaining coverage gap:** Synopsis search catches explicit name-drops, but many episodes _take place_ in a location without naming it. Transcript search would dramatically improve coverage.

### 4d. Validation branch convergence

The `claude/validate-episode-data-PKJEc` branch (in progress) adds:

- **96 character additions** across episodes.json
- **20 transcriptFile fields** (especially Fionna & Cake, previously 0% linked)
- **2 character aliases** (Huntress, Marshall) for better parser coverage

Once merged, this improves the locations pipeline:

- More transcripts available for `parse_transcript_locations.py`
- Better character data for co-occurrence heuristics (method 3 in §6a)
- Validated episode data means cross-references we build on top are trustworthy

---

## 5. Recommended Additions

### Definite adds — completed

| Location          | Category | Basis                                                                       | Status |
| ----------------- | -------- | --------------------------------------------------------------------------- | ------ |
| **Slime Kingdom** | kingdom  | Slime Princess is a character; 2 synopsis mentions; Elements storyline zone | Added  |

### Strong candidates (meet Tier 2, need transcript verification)

| Location                                   | Category  | Basis                                                                        | Needs                               |
| ------------------------------------------ | --------- | ---------------------------------------------------------------------------- | ----------------------------------- |
| **Cosmic Citadel**                         | dimension | Martin Mertens imprisoned here; Finn the Human storyline; 1 synopsis mention | Verify episode list via transcripts |
| **City of Thieves**                        | landmark  | Episode title (s01e13); iconic standalone episode                            | Only 1 episode — thin for inclusion |
| **Beautopia**                              | landmark  | Susan Strong's home; 1 episode (s03e14)                                      | Only 1 episode                      |
| **Jermaine's House** (Joshua & Margaret's) | landmark  | Jermaine character description; demon-guarding plot                          | Need episode IDs from transcripts   |

### Deferred (need transcript search to justify)

| Location          | Why deferred                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| Breakfast Kingdom | 0 synopsis mentions; no character in characters.json                         |
| Hot Dog Kingdom   | 0 synopsis mentions; no character in characters.json                         |
| Goblin Kingdom    | 0 synopsis mentions; no character in characters.json                         |
| Cloud Kingdom     | 0 synopsis mentions                                                          |
| Grasslands        | Geographic region rather than distinct location; Tree Fort already covers it |
| Future Ooo        | More of a time period than a location; covered by storyline                  |

---

## 6. Population Methodology

### 6a. episodeIds — How to populate comprehensively

**Current method:** Manual recall → 2-5 hand-picked episodes per location.

**Recommended pipeline:**

1. **Synopsis search** (can do now): Search episodes.json titles + synopses for location name keywords. This catches explicit mentions.

2. **Transcript search** (needs desktop): Search the full transcript corpus (`transcripts/`) for location name mentions in dialogue. A script similar to `parse_transcript_speakers.py` could:
   - Take a location name + aliases as input
   - Search all transcripts for mentions
   - Output matched episode IDs sorted by mention frequency
   - Human reviews and curates the final list

3. **Character co-occurrence** (partial automation): For a location like Candy Kingdom, episodes featuring PB + Peppermint Butler + Banana Guards together likely take place there. This is heuristic but could surface episodes that don't name the location.

**Priority:** Method 2 (transcript search) would give the richest results.

### 6b. characterIds — How to populate

**Method:** Derive from character descriptions + show knowledge.

- **Rulers/residents:** Direct from character descriptions (already mined above)
- **Frequent visitors:** Requires transcript or episode analysis
- **Scope rule:** Include characters who _live there_ or _rule there_, not characters who merely visit once. Match the project's "narrative significance" standard.

### 6c. storylineIds — How to populate

**Method:** Cross-reference from storylines.json. Small dataset (15), easy to do manually.

- For each storyline, identify its primary setting(s)
- Assign storylineIds to matching locations
- Current coverage is already decent; Slime Kingdom needs `elements` added

### 6d. descriptions — Quality standard

Based on existing descriptions in characters.json and storylines.json:

- **Length:** 1-3 sentences (locations are simpler than characters)
- **Content:** What it is, who rules/lives there, one distinctive detail
- **Tone:** Encyclopedic but with personality (matches the existing style)

### 6e. notes — When to include

Include notes when:

- The location has significant lore (creation story, destruction, transformation)
- There's a non-obvious connection worth explaining
- Match existing pattern: ~1-2 sentences of editorial context

---

## 7. Proposed Transcript Search Script

A `scripts/parse_transcript_locations.py` script could follow the pattern of `parse_transcript_speakers.py`:

```
Input:  locations.json (names + aliases to search for)
        transcripts/ directory

Process:
  For each transcript file:
    Search for location name mentions (case-insensitive)
    Track mention count per location per episode
    Map transcript filename → episode ID (via episodes.json transcriptFile field)

Output: location-analysis.json
  {
    "candy-kingdom": {
      "episodeMatches": [
        {"episodeId": "adventure-time-s01e01", "mentions": 5},
        {"episodeId": "adventure-time-s02e04", "mentions": 2},
        ...
      ]
    },
    ...
  }
```

This would be the most reliable way to build comprehensive episodeIds lists.

---

## 8. Action Items

### Can do now (this session or web Claude)

- [x] Mine characters.json for location candidates
- [x] Mine storylines.json for location-tied settings
- [x] Search episode synopses for place name frequency
- [x] Validate current cross-references
- [x] Fix broken episode reference (adventure-time-s10e16 → s10e13 in Tree Fort)
- [x] Fix Pillow World episode (s05e03 → s05e16 "Puhoy")
- [x] Fix Founders' Island episodes (s08e18-21 → s08e20-27, actual Islands miniseries)
- [x] Remove bad episode refs: s06e32 from Fire Kingdom, s03e18/s06e14 from Wildberry, s05e37 from Graveyard
- [x] Add Slime Kingdom (Slime Princess + Elements storyline)
- [x] Enrich episodeIds: Candy Kingdom 5→11, Fire Kingdom 4→6, Lumpy Space 3→6
- [x] Rework Ghost Kingdom → Candy Kingdom Graveyard (recurring location, not a kingdom)
- [x] Add Lady Rainicorn to Crystal Dimension (per "Lady Rainicorn of the Crystal Dimension")
- [x] Add Furniture & Meat (s06e08) to Wildberry Kingdom
- [x] Keep Pillow World, Wildberry Kingdom, Crystal Dimension; all have valid basis

### Needs desktop (transcript access + richer tools)

- [ ] Initialize transcripts submodule
- [ ] Write `scripts/parse_transcript_locations.py`
- [ ] Run transcript search to build comprehensive episodeIds
- [ ] Evaluate Tier 2 candidates (Citadel, City of Thieves, Beautopia, Jermaine's House) with transcript evidence
- [ ] Evaluate deferred candidates (Breakfast Kingdom, etc.) with transcript evidence
- [ ] Review and finalize descriptions with richer context
- [ ] Consider adding `aliases` field to Location type for search (e.g., "CK" for Candy Kingdom, "PB's Kingdom")
