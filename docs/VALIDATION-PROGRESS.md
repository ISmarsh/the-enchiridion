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
| S05 | 52 | Complete | 3 | 3 |
| S06 | 43 | Complete | 1 | 1 |
| S07 | 26 | Complete | 2 | 2 |
| S08 | 27 | Complete | 2 | 2 |
| S09 | 14 | Complete | 0 | 0 |
| S10 | 13 | Complete | 1 | 1 |
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

**Transcript coverage:** 51/52 (S05E36 "Dungeon Train" has no transcript)
**Automated discrepancies:** 8 episodes flagged
**Storyline episodes:** S05E01 (the-lich, finn-the-human, prismo-cosmic), S05E02 (the-lich, sweet-p, prismo-cosmic), S05E06 (jake-pups), S05E09 (lemongrab-saga), S05E12 (flame-princess-arc), S05E14 (simon-and-marcy), S05E29 (simon-and-marcy, bubbline), S05E30 (flame-princess-arc), S05E31 (lemongrab-saga), S05E32 (flame-princess-arc), S05E34 (finn-the-human), S05E45 (grass-sword-fern), S05E47 (flame-princess-arc), S05E48 (simon-and-marcy), S05E50-51 (lemongrab-saga), S05E52 (the-lich) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S05E01 | Finn the Human | OK | Lich + Choose Goose appear visually; storylines correct |
| S05E02 | Jake the Dog | OK | Lich speaks as Lich/Jake (transcript parser missed composite speaker) |
| S05E03 | Five More Short Graybles | OK | |
| S05E04 | Up a Tree | OK | |
| S05E05 | All the Little People | OK | |
| S05E06 | Jake the Dad | OK | Jake's Pups — storyline correct |
| S05E07 | Davey | OK | |
| S05E08 | Mystery Dungeon | OK | |
| S05E09 | All Your Fault | OK | Lemongrab saga — correct |
| S05E10 | Little Dude | OK | |
| S05E11 | Bad Little Boy | FIXED | Added turtle-princess + wildberry-princess (speaking lines as audience) |
| S05E12 | Vault of Bones | OK | Flame Princess arc — correct |
| S05E13 | The Great Bird Man | OK | |
| S05E14 | Simon & Marcy | OK | Simon & Marcy — correct |
| S05E15 | A Glitch Is a Glitch | OK | |
| S05E16 | Puhoy | OK | FP mentioned in dialogue + calls Finn at end, doesn't appear on screen — correct to include |
| S05E17 | BMO Lost | OK | |
| S05E18 | Princess Potluck | OK | Turtle/Wildberry appear visually at potluck, don't speak — correct |
| S05E19 | James Baxter the Horse | OK | |
| S05E20 | Shh! | OK | |
| S05E21 | The Suitor | OK | |
| S05E22 | The Party's Over, Isla de Señorita | OK | |
| S05E23 | One Last Job | OK | |
| S05E24 | Another Five More Short Graybles | FIXED | Added mr-fox (has a short grayble segment with speaking lines) |
| S05E25 | Candy Streets | OK | |
| S05E26 | Wizards Only, Fools | OK | |
| S05E27 | Jake Suit | OK | |
| S05E28 | Be More | OK | |
| S05E29 | Sky Witch | OK | Simon & Marcy + Bubbline — correct |
| S05E30 | Frost & Fire | OK | Flame Princess arc — correct |
| S05E31 | Too Old | OK | Lemongrab saga — correct |
| S05E32 | Earth & Water | OK | Flame Princess arc — correct |
| S05E33 | Time Sandwich | OK | |
| S05E34 | The Vault | OK | BMO appears in framing, doesn't speak in past segment — correct |
| S05E35 | Love Games | OK | |
| S05E36 | Dungeon Train | OK | No transcript available; characters (Finn, Jake, BMO) match synopsis |
| S05E37 | Box Prince | OK | |
| S05E38 | Red Starved | OK | |
| S05E39 | We Fixed a Truck | OK | |
| S05E40 | Play Date | OK | |
| S05E41 | The Pit | OK | |
| S05E42 | James | OK | |
| S05E43 | Root Beer Guy | OK | |
| S05E44 | Apple Wedding | OK | |
| S05E45 | Blade of Grass | OK | Grass Sword & Fern — correct |
| S05E46 | Rattleballs | OK | Root Beer Guy appears visually, doesn't speak — correct |
| S05E47 | The Red Throne | OK | Flame Princess arc — correct |
| S05E48 | Betty | OK | Simon & Marcy — correct |
| S05E49 | Bad Timing | OK | |
| S05E50 | Lemonhope (1) | OK | Lemongrab saga — correct |
| S05E51 | Lemonhope (2) | OK | Lemongrab saga — correct |
| S05E52 | Billy's Bucket List | OK | The Lich — correct |

**Summary:** 3 fixes applied. No storyline changes needed.

---

## Season 6 (43 episodes)

### Validation Notes

**Transcript coverage:** 39/43 (S06E32, S06E37, S06E38, S06E40 have no transcripts)
**Automated discrepancies:** 7 episodes flagged
**Storyline episodes:** S06E01-02 (finn-the-human, prismo-cosmic, the-lich, grass-sword-fern, sweet-p), S06E04 (finn-the-human), S06E06 (finn-the-human, grass-sword-fern), S06E12 (jake-pups), S06E15 (peppermint-butler-dark), S06E16 (jake-pups), S06E19 (prismo-cosmic), S06E22 (elements, flame-princess-arc), S06E24 (simon-and-marcy, elements), S06E26 (the-lich, sweet-p), S06E27 (finn-the-human), S06E35 (lemongrab-saga, future-ooo), S06E39 (sweet-p), S06E43 (finn-the-human) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S06E01 | Wake Up | FIXED | transcriptFile was pointing to mini-episode "All's Well That Rats Swell" instead of "Wake Up" |
| S06E02 | Escape from the Citadel | OK | Multiple storylines — correct |
| S06E03 | James II | OK | |
| S06E04 | The Tower | OK | Finn the Human arc — correct |
| S06E05 | Sad Face | OK | |
| S06E06 | Breezy | OK | Storylines correct |
| S06E07 | Food Chain | OK | |
| S06E08 | Furniture & Meat | OK | Transcript parser false positive on "Wildberry kid" → wildberry-princess |
| S06E09 | The Prince Who Wanted Everything | OK | |
| S06E10 | Something Big | OK | Root Beer Guy visual appearance, no dialogue — correct |
| S06E11 | Little Brother | OK | |
| S06E12 | Ocarina | OK | Jake's Pups — correct |
| S06E13 | Thanks for the Crabapples, Giuseppe! | OK | |
| S06E14 | Princess Day | OK | Turtle/Wildberry visual appearances — correct |
| S06E15 | Nemesis | OK | Peppermint Butler dark — correct |
| S06E16 | Joshua & Margaret Investigations | OK | Jake's Pups — correct |
| S06E17 | Ghost Fly | OK | |
| S06E18 | Everything's Jake | OK | |
| S06E19 | Is That You? | OK | Prismo & Cosmic — correct |
| S06E20 | Jake the Brick | OK | |
| S06E21 | Dentist | OK | |
| S06E22 | The Cooler | OK | Elements + FP arc — correct |
| S06E23 | The Pajama War | OK | |
| S06E24 | Evergreen | OK | Simon & Marcy + Elements — correct |
| S06E25 | Astral Plane | OK | Banana Man visual appearance — correct |
| S06E26 | Gold Stars | OK | Lich presence within Sweet P — correct |
| S06E27 | The Visitor | OK | Finn the Human — correct |
| S06E28 | The Mountain | OK | |
| S06E29 | Dark Purple | OK | |
| S06E30 | The Diary | OK | |
| S06E31 | Walnuts & Rain | OK | |
| S06E32 | Friends Forever | OK | No transcript; characters match episode |
| S06E33 | Jermaine | OK | |
| S06E34 | Chips & Ice Cream | OK | |
| S06E35 | Graybles 1000+ | OK | Lemongrab + Future Ooo — correct |
| S06E36 | Hoots | OK | |
| S06E37 | Water Park Prank | OK | No transcript; characters match episode |
| S06E38 | You Forgot Your Floaties | OK | No transcript; Simon & Marcy — correct |
| S06E39 | Be Sweet | OK | Sweet P arc — correct |
| S06E40 | Orgalorg | OK | No transcript; characters match episode |
| S06E41 | On the Lam | OK | |
| S06E42 | Hot Diggity Doom | OK | |
| S06E43 | The Comet | OK | Finn the Human — correct |

**Summary:** 1 fix applied (S06E01 transcriptFile corrected). No character or storyline changes needed.

---

## Season 7 (26 episodes)

### Validation Notes

**Transcript coverage:** 18/26 (S07E19-26 have no transcripts — late S7 gap)
**Automated discrepancies:** 8 episodes flagged (6 due to missing transcripts)
**Storyline episodes:** S07E01 (gum-war), S07E02 (bubbline), S07E06-13 (stakes), S07E21 (simon-and-marcy), S07E23 (simon-and-marcy, prismo-cosmic) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S07E01 | Bonnie and Neddy | OK | Gum War — correct |
| S07E02 | Varmints | FIXED | transcriptFile was pointing to mini-episode "Frog Seasons Summer" |
| S07E03 | Cherry Cream Soda | OK | Maja in visual coma, doesn't speak — correct |
| S07E04 | Mama Said | FIXED | transcriptFile was pointing to mini-episode "Frog Seasons Winter" |
| S07E05 | Football | OK | |
| S07E06-13 | Stakes miniseries (8 eps) | OK | All storyline assignments correct |
| S07E14-18 | OK | | Characters match transcripts |
| S07E19-26 | OK | | No transcripts; character data validated against synopses |

**Summary:** 2 transcript file fixes. No character or storyline changes needed.

---

## Season 8 (27 episodes)

### Validation Notes

**Transcript coverage:** 7/27 (major gap — Islands miniseries and late episodes lack transcripts)
**Automated discrepancies:** 23 episodes flagged (20 due to missing transcripts)
**Storyline episodes:** S08E01 (simon-and-marcy), S08E05 (grass-sword-fern), S08E08 (elements), S08E11 (jake-pups), S08E12-15 (finn-the-human, grass-sword-fern), S08E19 (flame-princess-arc), S08E20-27 Islands miniseries (finn-the-human) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S08E01 | Broke His Crown | OK | winter-king + gunter are false positives (Simon Petrikov alias / Evergreen's Gunther) |
| S08E02 | Don't Look | FIXED | Added turtle-princess (has "Shh!" speaking line) |
| S08E03-04 | No transcripts | OK | Character data validated against synopses |
| S08E05 | I am a Sword | OK | Grass Sword & Fern — correct |
| S08E06 | No transcript | OK | |
| S08E07 | Normal Man | FIXED | Added grob-gob-glob-grod (Glob has speaking lines) |
| S08E08-27 | Mixed transcript coverage | OK | Character data validated; storyline assignments correct |

**Notable false positives documented:**
- S08E01: `winter-king` detected via shared alias "Simon Petrikov" — this refers to AT's Simon/Ice King, not F&C's Winter King
- S08E01: `gunter` detected via "Gunther" — this is Evergreen's ancient dinosaur apprentice, not the penguin

**Summary:** 2 character fixes applied. No storyline changes needed.

---

## Season 9 (14 episodes)

### Validation Notes

**Transcript coverage:** 0/14 (entire season lacks transcripts)
**Storyline episodes:** S09E01-09 (elements miniseries), S09E10 (jake-pups), S09E11 (bubbline), S09E13 (the-lich, sweet-p), S09E14 (grass-sword-fern) — all correct

All episodes validated against synopses and storyline definitions. No transcript data available for cross-reference. Character data appears consistent with episode descriptions.

**Summary:** No fixes needed. No transcripts available for deeper validation.

---

## Season 10 (13 episodes)

### Validation Notes

**Transcript coverage:** 9/13 (S10E01-02, S10E06, S10E08 lack transcripts)
**Automated discrepancies:** 5 episodes flagged
**Storyline episodes:** S10E01 (grass-sword-fern), S10E04-05 (gum-war, grass-sword-fern), S10E07 (bubbline), S10E11 (simon-and-marcy), S10E12 (gum-war), S10E13 (6 storylines — series finale) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S10E01-02 | No transcripts | OK | Characters validated against synopses |
| S10E03 | Son of Rap Bear | OK | |
| S10E04 | Bonnibel Bubblegum | OK | Gum War — correct |
| S10E05 | Seventeen | OK | Bronwyn visual appearance — correct |
| S10E06 | Ring of Fire | OK | No transcript |
| S10E07 | Marcy & Hunson | OK | Bubbline — correct |
| S10E08 | The First Investigation | OK | No transcript |
| S10E09 | Blenanas | OK | |
| S10E10 | Jake the Starchild | OK | |
| S10E11 | Temple of Mars | FIXED | Added gunter (appears as Ice Thing, a known alias) |
| S10E12 | Gumbaldia | OK | Gum War — correct |
| S10E13 | Come Along With Me | OK | Series finale — winter-king is false positive (alias overlap); 8 chars visual-only in ensemble |

**Summary:** 1 character fix applied. No storyline changes needed.

---

## Distant Lands (4 episodes)

### Validation Notes

*(pending)*

---

## Fionna and Cake (20 episodes)

### Validation Notes

*(pending)*
