# Episode Data Validation Progress

Systematic validation of `episodes.json` character and storyline linkage against transcripts and episode summaries.

**Branch:** `claude/validate-episode-data-PKJEc`
**Started:** 2026-02-05
**Total episodes:** 303

## Methodology

1. **Automated transcript analysis** — `parse_transcript_speakers.py` extracts speaking characters from 282 transcripts
2. **Cross-reference comparison** — Compare transcript-detected characters vs `characterIds` in episodes.json
3. **Synopsis review** — Verify synopsis mentions align with character assignments
4. **Storyline validation** — Check each episode's storylineIds against storyline definitions and episode content
5. **Web search** — Used selectively for episodes without transcripts or ambiguous data

## Pre-Validation Consistency Checks

| Check | Result |
|-------|--------|
| Episode characterIds → valid character IDs | 0 broken refs |
| Episode storylineIds → valid storyline IDs | 0 broken refs |
| Storyline episodeOrder → valid episode IDs | 0 broken refs |
| Storyline characterIds → valid character IDs | 0 broken refs |
| Episodes with storylineId appear in storyline episodeOrder | 0 mismatches |
| Storyline episodeOrder episodes have matching storylineId | 0 mismatches |
| Storyline characters appear in at least one storyline episode | 2 gaps (GOLB in gum-war, Hunson Abadeer in peppermint-butler-dark) |

## Automated Discrepancy Summary

34 episodes had differences between transcript-detected characters and episode data.
Many are expected (non-speaking visual appearances, alternate name forms).

## Season Progress

| Season | Episodes | Status | Issues Found | Fixed |
|--------|----------|--------|--------------|-------|
| S01 | 26 | Complete | 1 | 1 |
| S02 | 26 | Complete | 1 | 1 |
| S03 | 26 | Complete | 2 | 2 |
| S04 | 26 | Complete | 3 | 3 |
| S05 | 52 | Not started | — | — |
| S06 | 43 | Not started | — | — |
| S07 | 26 | Not started | — | — |
| S08 | 27 | Not started | — | — |
| S09 | 14 | Not started | — | — |
| S10 | 13 | Not started | — | — |
| DL | 4 | Not started | — | — |
| F&C S1 | 10 | Not started | — | — |
| F&C S2 | 10 | Not started | — | — |

---

## Season 1 (26 episodes)

### Validation Notes

**Transcript coverage:** 26/26 (100%)
**Automated discrepancies:** 3 episodes flagged
**Storyline episodes:** S01E25 (the-lich) — correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S01E01 | Slumber Party Panic | OK | Characters match transcript |
| S01E02 | Trouble in Lumpy Space | OK | Characters match transcript |
| S01E03 | Prisoners of Love | OK | Ghost Princess appears visually but doesn't speak — correct to include |
| S01E04 | Tree Trunks | OK | Characters match transcript |
| S01E05 | The Enchiridion! | OK | Characters match transcript |
| S01E06 | The Jiggler | OK | Characters match transcript |
| S01E07 | Ricardio the Heart Guy | FIXED | Added wildberry-princess (has speaking line in transcript) |
| S01E08 | Business Time | OK | Characters match transcript |
| S01E09 | My Two Favorite People | OK | Characters match transcript |
| S01E10 | Memories of Boom Boom Mountain | OK | Characters match transcript |
| S01E11 | Wizard | OK | Characters match transcript |
| S01E12 | Evicted! | OK | Characters match transcript |
| S01E13 | City of Thieves | OK | Characters match transcript |
| S01E14 | The Witch's Garden | OK | "Gary" (river mermaid) ≠ gary-prince (F&C) — transcript parser false positive |
| S01E15 | What Is Life? | OK | Characters match transcript |
| S01E16 | Ocean of Fear | OK | Characters match transcript |
| S01E17 | When Wedding Bells Thaw | OK | Characters match transcript |
| S01E18 | Dungeon | OK | Characters match transcript |
| S01E19 | The Duke | OK | Characters match transcript |
| S01E20 | Freak City | OK | Characters match transcript |
| S01E21 | Donny | OK | Characters match transcript |
| S01E22 | Henchman | OK | Characters match transcript |
| S01E23 | Rainy Day Daydream | OK | Characters match transcript |
| S01E24 | What Have You Done? | OK | Characters match transcript |
| S01E25 | His Hero | OK | Billy introduced; storyline=the-lich is correct |
| S01E26 | Gut Grinder | OK | Characters match transcript |

**Summary:** 1 fix applied (added wildberry-princess to S01E07). No storyline changes needed.

---

## Season 2 (26 episodes)

### Validation Notes

**Transcript coverage:** 26/26 (100%)
**Automated discrepancies:** 2 episodes flagged
**Storyline episodes:** S02E17 (peppermint-butler-dark), S02E18 (finn-the-human), S02E24-25 (the-lich) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S02E01 | It Came from the Nightosphere | OK | Characters match |
| S02E02 | The Eyes | OK | Characters match |
| S02E03 | Loyalty to the King | OK | Wildberry Princess appears visually among princesses, doesn't speak — correct |
| S02E04 | Blood Under the Skin | OK | Characters match |
| S02E05 | Storytelling | OK | Characters match |
| S02E06 | Slow Love | OK | Characters match |
| S02E07 | Power Animal | OK | Characters match |
| S02E08 | Crystals Have Power | OK | Characters match |
| S02E09 | The Other Tarts | OK | Characters match |
| S02E10 | To Cut a Woman's Hair | OK | Characters match |
| S02E11 | The Chamber of Frozen Blades | OK | Characters match |
| S02E12 | Her Parents | OK | Characters match |
| S02E13 | The Pods | OK | Characters match |
| S02E14 | The Silent King | OK | Characters match |
| S02E15 | The Real You | FIXED | Added choose-goose (has speaking lines visiting his magic shack) |
| S02E16 | Guardians of Sunshine | OK | Characters match |
| S02E17 | Death in Bloom | OK | Peppermint Butler dark side — storyline correct |
| S02E18 | Susan Strong | OK | Susan Strong introduced — storyline correct |
| S02E19 | Mystery Train | OK | Characters match |
| S02E20 | Go with Me | OK | Characters match |
| S02E21 | Belly of the Beast | OK | Characters match |
| S02E22 | The Limit | OK | Characters match |
| S02E23 | Video Makers | OK | Characters match |
| S02E24 | Mortal Folly | OK | Lich arc — storyline correct |
| S02E25 | Mortal Recoil | OK | Lich arc — storyline correct |
| S02E26 | Heat Signature | OK | Characters match |

**Summary:** 1 fix applied (added choose-goose to S02E15). No storyline changes needed.

---

## Season 3 (26 episodes)

### Validation Notes

**Transcript coverage:** 26/26 (100%)
**Automated discrepancies:** 3 episodes flagged
**Storyline episodes:** S03E04 (peppermint-butler-dark), S03E05 (lemongrab-saga), S03E10 (bubbline), S03E14 (finn-the-human), S03E19-20 (simon-and-marcy), S03E25 (finn-the-human), S03E26 (flame-princess-arc) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S03E01 | Conquest of Cuteness | OK | |
| S03E02 | Morituri te Salutamus | OK | |
| S03E03 | Memory of a Memory | OK | |
| S03E04 | Hitman | OK | Pep But dark — storyline correct |
| S03E05 | Too Young | OK | Lemongrab saga — storyline correct |
| S03E06 | The Monster | OK | |
| S03E07 | Still | OK | |
| S03E08 | Wizard Battle | OK | Choose Goose + Huntress Wizard appear visually, don't speak — correct |
| S03E09 | Fionna and Cake | OK | |
| S03E10 | What Was Missing | OK | Bubbline — storyline correct |
| S03E11 | Apple Thief | OK | |
| S03E12 | The Creeps | OK | |
| S03E13 | From Bad to Worse | OK | |
| S03E14 | Beautopia | OK | Finn the Human arc — storyline correct |
| S03E15 | No One Can Hear You | OK | |
| S03E16 | Jake vs. Me-Mow | OK | |
| S03E17 | Thank You | OK | |
| S03E18 | The New Frontier | OK | |
| S03E19 | Holly Jolly Secrets (1) | OK | Simon & Marcy — storyline correct |
| S03E20 | Holly Jolly Secrets (2) | FIXED | Added wildberry-princess (has speaking lines on Ice King's tape) |
| S03E21 | Marceline's Closet | OK | |
| S03E22 | Paper Pete | FIXED | Added turtle-princess (has speaking lines as librarian) |
| S03E23 | Another Way | OK | |
| S03E24 | Ghost Princess | OK | |
| S03E25 | Dad's Dungeon | OK | Finn the Human arc — storyline correct |
| S03E26 | Incendium | OK | Flame Princess arc — storyline correct |

**Summary:** 2 fixes applied. No storyline changes needed.

---

## Season 4 (26 episodes)

### Validation Notes

**Transcript coverage:** 26/26 (100%)
**Automated discrepancies:** 3 episodes flagged
**Storyline episodes:** S04E01 (flame-princess-arc), S04E11 (peppermint-butler-dark), S04E15 (prismo-cosmic), S04E16 (flame-princess-arc), S04E20 (lemongrab-saga), S04E22 (flame-princess-arc), S04E25 (simon-and-marcy), S04E26 (the-lich, prismo-cosmic) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S04E01 | Hot to the Touch | OK | Flame Princess arc — correct |
| S04E02 | Five Short Graybles | OK | |
| S04E03 | Web Weirdos | OK | |
| S04E04 | Dream of Love | OK | |
| S04E05 | Return to the Nightosphere | OK | |
| S04E06 | Daddy's Little Monster | OK | |
| S04E07 | In Your Footsteps | OK | |
| S04E08 | Hug Wolf | OK | |
| S04E09 | Princess Monster Wife | FIXED | Added turtle-princess + wildberry-princess (both have speaking lines) |
| S04E10 | Goliad | OK | |
| S04E11 | Beyond This Earthly Realm | OK | Peppermint Butler dark — correct |
| S04E12 | Gotcha! | OK | |
| S04E13 | Princess Cookie | OK | |
| S04E14 | Card Wars | OK | |
| S04E15 | Sons of Mars | OK | Prismo & Cosmic — correct |
| S04E16 | Burning Low | OK | Flame Princess arc — correct |
| S04E17 | BMO Noire | OK | |
| S04E18 | King Worm | OK | Dream episode — many chars appear visually but don't speak; data correct |
| S04E19 | Lady & Peebles | OK | |
| S04E20 | You Made Me! | OK | Lemongrab saga — correct |
| S04E21 | Who Would Win? | OK | |
| S04E22 | Ignition Point | OK | Flame Princess arc — correct |
| S04E23 | The Hard Easy | OK | |
| S04E24 | Reign of Gunters | FIXED | Added huntress-wizard (has speaking lines in magic shop scene) |
| S04E25 | I Remember You | OK | Simon & Marcy — correct |
| S04E26 | The Lich | OK | The Lich + Prismo — correct |

**Summary:** 3 fixes applied. No storyline changes needed.

---

## Season 5 (52 episodes)

### Validation Notes

*(pending)*

---

## Season 6 (43 episodes)

### Validation Notes

*(pending)*

---

## Season 7 (26 episodes)

### Validation Notes

*(pending)*

---

## Season 8 (27 episodes)

### Validation Notes

*(pending)*

---

## Season 9 (14 episodes)

### Validation Notes

*(pending)*

---

## Season 10 (13 episodes)

### Validation Notes

*(pending)*

---

## Distant Lands (4 episodes)

### Validation Notes

*(pending)*

---

## Fionna and Cake (20 episodes)

### Validation Notes

*(pending)*
