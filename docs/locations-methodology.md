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
| Tree Trunks                    | Crystal Dimension              | Yes                                  |
| Wildberry Princess             | Wildberry Kingdom              | Yes                                  |
| Slime Princess                 | **Slime Kingdom**              | **No — should add**                  |
| Ghost Princess                 | Ghost Kingdom                  | Yes                                  |
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

## 4. Current Data Quality Assessment

### 4a. Validation results

```
Characters: 39/39 valid references
Storylines: 15/15 valid references
Episodes:   56/57 valid references
```

**One broken reference:** `adventure-time-s10e16` in Tree Fort's episodeIds does not exist in episodes.json. Needs correction.

### 4b. Cross-reference density (current 17 locations)

| Location           | Chars | Eps | Storylines | Signal strength |
| ------------------ | ----- | --- | ---------- | --------------- |
| Candy Kingdom      | 7     | 5   | 2          | Strong          |
| Tree Fort          | 6     | 4   | 2          | Strong          |
| Founders' Island   | 4     | 4   | 1          | Strong          |
| Fire Kingdom       | 3     | 4   | 2          | Strong          |
| Castle Lemongrab   | 2     | 5   | 1          | Strong          |
| Prismo's Time Room | 2     | 4   | 2          | Strong          |
| Ice Kingdom        | 2     | 4   | 1          | Strong          |
| Wizard City        | 2     | 4   | 0          | Moderate        |
| Mars               | 2     | 3   | 1          | Moderate        |
| Nightosphere       | 2     | 2   | 1          | Moderate        |
| Marceline's House  | 1     | 4   | 2          | Moderate        |
| Lumpy Space        | 1     | 3   | 0          | Moderate        |
| Dead Worlds        | 1     | 3   | 0          | Moderate        |
| Crystal Dimension  | 1     | 3   | 0          | Weak            |
| Wildberry Kingdom  | 1     | 2   | 0          | Weak            |
| Ghost Kingdom      | 1     | 2   | 0          | Weak            |
| Pillow World       | 1     | 1   | 0          | Weak            |

**Weak entries** (Wildberry, Ghost, Pillow, Crystal) have minimal cross-references. They're real locations but borderline for inclusion at the current curation level. Could be kept for completeness or deferred until transcript search enriches their episode lists.

### 4c. Episode coverage is thin

The episodeIds in the current data are hand-picked highlights (2-5 per location). For comparison:

- Candy Kingdom appears in **15** episode synopses but only has **5** episodeIds
- Lumpy Space appears in **7** synopses but only has **3** episodeIds
- Fire Kingdom appears in **6** synopses but only has **4** episodeIds

This is the biggest gap. Synopsis-based search catches explicit name-drops, but many episodes _take place_ in a location without naming it in the synopsis. **Transcript search would dramatically improve episode coverage.**

---

## 5. Recommended Additions

### Definite adds (meet Tier 1 criteria)

| Location          | Category | Basis                                                                       |
| ----------------- | -------- | --------------------------------------------------------------------------- |
| **Slime Kingdom** | kingdom  | Slime Princess is a character; 2 synopsis mentions; Elements storyline zone |

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
- [ ] Fix broken episode reference (adventure-time-s10e16 in Tree Fort)
- [ ] Add Slime Kingdom to locations.json
- [ ] Enrich episodeIds using synopsis search results (low-hanging fruit)
- [ ] Decide on weak entries (Wildberry, Ghost, Pillow, Crystal): keep or defer?

### Needs desktop (transcript access + richer tools)

- [ ] Initialize transcripts submodule
- [ ] Write `scripts/parse_transcript_locations.py`
- [ ] Run transcript search to build comprehensive episodeIds
- [ ] Evaluate Tier 2 candidates (Citadel, City of Thieves, Beautopia, Jermaine's House) with transcript evidence
- [ ] Evaluate deferred candidates (Breakfast Kingdom, etc.) with transcript evidence
- [ ] Review and finalize descriptions with richer context
- [ ] Consider adding `aliases` field to Location type for search (e.g., "CK" for Candy Kingdom, "PB's Kingdom")
