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
| S04 | 26 | Complete | 4 | 4 |
| S05 | 52 | Complete | 3 | 3 |
| S06 | 43 | Complete | 2 | 2 |
| S07 | 26 | Complete | 2 | 2 |
| S08 | 27 | Complete | 4 | 4 |
| S09 | 14 | Complete | 8 | 8 |
| S10 | 13 | Complete | 2 | 2 |
| DL | 4 | Complete | 2 | 2 |
| F&C S1 | 10 | Complete | 7 | 7 |
| F&C S2 | 10 | Complete | 10 | 10 |

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
| S04E18 | King Worm | FIXED | Added flame-princess, peppermint-butler (both speak in dream sequence — transcript confirmed) |
| S04E19 | Lady & Peebles | OK | |
| S04E20 | You Made Me! | OK | Lemongrab saga — correct |
| S04E21 | Who Would Win? | OK | |
| S04E22 | Ignition Point | OK | Flame Princess arc — correct |
| S04E23 | The Hard Easy | OK | |
| S04E24 | Reign of Gunters | FIXED | Added huntress-wizard (has speaking lines in magic shop scene) |
| S04E25 | I Remember You | OK | Simon & Marcy — correct |
| S04E26 | The Lich | OK | The Lich + Prismo — correct |

**Summary:** 4 fixes applied. No storyline changes needed.

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
**Storyline episodes:** S06E01-02 (finn-the-human, prismo-cosmic, the-lich, grass-sword-fern, sweet-p), S06E04 (finn-the-human), S06E06 (finn-the-human, grass-sword-fern), S06E12 (jake-pups), S06E15 (peppermint-butler-dark), S06E16 (jake-pups), S06E19 (prismo-cosmic), S06E22 (elements, flame-princess-arc), S06E24 (simon-and-marcy, elements), S06E26 (the-lich, sweet-p), S06E27 (finn-the-human), S06E28 (lemongrab-saga), S06E35 (lemongrab-saga, future-ooo), S06E39 (sweet-p), S06E43 (finn-the-human) — all correct

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
| S06E28 | The Mountain | FIXED | Added lemongrab-saga storylineId (Lemongrab's self-discovery journey; Lemonhope appears in vision) |
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

**Summary:** 2 fixes applied (S06E01 transcriptFile corrected, S06E28 added to lemongrab-saga storyline).

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

**Transcript coverage:** 12/27 (S08E20-27 Islands linked; 15 episodes still missing transcripts)
**Automated discrepancies:** 23 episodes flagged (15 due to missing transcripts)
**Storyline episodes:** S08E01 (simon-and-marcy), S08E05 (grass-sword-fern), S08E08 (elements), S08E11 (jake-pups), S08E12-15 (finn-the-human, grass-sword-fern), S08E19 (flame-princess-arc), S08E20-27 Islands miniseries (finn-the-human) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S08E01 | Broke His Crown | OK | winter-king + gunter are false positives (Simon Petrikov alias / Evergreen's Gunther) |
| S08E02 | Don't Look | FIXED | Added turtle-princess (has "Shh!" speaking line) |
| S08E03-04 | No transcripts | OK | Character data validated against synopses |
| S08E05 | I am a Sword | OK | Grass Sword & Fern — correct |
| S08E06 | No transcript | OK | |
| S08E07 | Normal Man | FIXED | Added grob-gob-glob-grod (Glob has speaking lines) |
| S08E08-19 | No transcripts | OK | Character data validated against synopses; 15 episodes in gap plan |
| S08E20 | The Invitation | FIXED | Added charlie, fern, lady-rainicorn, marceline, neptr, princess-bubblegum, starchy (transcript confirmed — Islands opener) |
| S08E21-25 | Islands miniseries | OK | Transcripts linked; characters match |
| S08E26 | Helpers | FIXED | Added susan-strong (transcript confirmed) |
| S08E27 | The Light Cloud | OK | Characters match transcript |

**Notable false positives documented:**
- S08E01: `winter-king` detected via shared alias "Simon Petrikov" — this refers to AT's Simon/Ice King, not F&C's Winter King
- S08E01: `gunter` detected via "Gunther" — this is Evergreen's ancient dinosaur apprentice, not the penguin

**Summary:** 4 character fixes applied. No storyline changes needed.

---

## Season 9 (14 episodes)

### Validation Notes

**Transcript coverage:** 14/14 (all transcripts linked — Elements miniseries + post-Elements)
**Automated discrepancies:** 8 episodes had character gaps
**Storyline episodes:** S09E01-09 (elements miniseries), S09E10 (jake-pups), S09E11 (bubbline), S09E13 (the-lich, sweet-p), S09E14 (grass-sword-fern) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| S09E01 | Orb | OK | No character matches in transcript (dialogue-only format, no speaker labels) |
| S09E02 | Skyhooks | FIXED | Added betty-grof, gunter, ice-king, mr-pig, princess-bubblegum, shelby, sweet-p, tree-trunks (Elements opener — many characters present) |
| S09E03 | Bespoken For | FIXED | Added gunter, patience-st-pim (transcript confirmed) |
| S09E04 | Winter Light | OK | No speaker labels in transcript |
| S09E05 | Cloudy | OK | No speaker labels in transcript |
| S09E06 | Slime Central | OK | No speaker labels in transcript |
| S09E07 | Happy Warrior | FIXED | Added cinnamon-bun, gunter, lady-rainicorn (Fire Kingdom episode — transcript confirmed) |
| S09E08 | Hero Heart | FIXED | Added betty-grof, flame-princess, gunter, ice-king, jake (Elements climax — transcript confirmed) |
| S09E09 | Skyhooks II | OK | No speaker labels in transcript |
| S09E10 | Abstract | FIXED | Added finn, joshua (transcript confirmed — Jake transformation episode) |
| S09E11 | Ketchup | OK | BMO and Marceline match |
| S09E12 | Fionna and Cake and Fionna | FIXED | Added gunter, jake (Ice King's fanfic episode — transcript confirmed) |
| S09E13 | Whispers | FIXED | Added bmo, fern, the-lich (Lich hand speaks through Sweet P — transcript confirmed) |
| S09E14 | Three Buckets | FIXED | Added bmo, gumbald, neptr, princess-bubblegum (Gumbald foreshadowed — transcript confirmed) |

**Note:** S09E01, E04-E06, E09 transcripts exist but lack speaker labels (raw dialogue format per TRANSCRIPT-CORRECTIONS.md). Character data for these was validated against synopses.

**Unmatched Elements speakers:** Several transformed characters appear frequently in S09 transcripts as unmatched speakers with no character entries: Marshmaline (Marceline), Nectr (Lemongrab), Lemonpink (LSP), Fun (Flame Princess), Fire Finn (Finn). These are elementally transformed versions of main characters. Decision needed: map to base characters, create separate entries, or leave unmatched.

**Summary:** 8 episodes fixed, 29 character additions. Transcript linkage revealed significant gaps in season that previously had no transcript cross-reference.

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
| S10E13 | Come Along With Me | FIXED | Added golb (major physical presence); winter-king is false positive (alias overlap) |

**Summary:** 2 character fixes applied (gunter in S10E11, golb in S10E13). No storyline changes needed.

---

## Distant Lands (4 episodes)

### Validation Notes

**Transcript coverage:** 4/4 (DL S01E03-04 transcripts linked this pass)
**Storyline episodes:** DL S01E01 (future-ooo), DL S01E02 (simon-and-marcy, bubbline), DL S01E03 (future-ooo), DL S01E04 (peppermint-butler-dark) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| DL S01E01 | BMO | OK | Characters match transcript |
| DL S01E02 | Obsidian | OK | Bronwyn visual appearance — correct |
| DL S01E03 | Together Again | FIXED | Added ice-king, jermaine, joshua, lumpy-space-princess, margaret, mr-pig, peppermint-butler, the-lich, tiffany, tree-trunks, turtle-princess (Dead World episode — 11 characters with speaking lines in transcript). Note: "New Death" speaks 45 times as an unmatched speaker — no `new-death` character entry exists; `death` is listed but transcript uses different name. |
| DL S01E04 | Wizard City | FIXED | Added abracadaniel (transcript confirmed speaking) |

**Summary:** 2 episodes fixed, 12 character additions. Transcript linkage revealed DL S01E03 had only 6 of 17 speaking characters listed.

---

## Fionna and Cake (20 episodes)

### Validation Notes

**Transcript coverage:** 20/20 (transcriptFile was missing — added for all F&C episodes; aliases "Huntress" and "Marshall" added to characters.json)
**Storyline episodes:** F&C S01E02 (simon-and-marcy), S01E04 (prismo-cosmic), S01E06 (simon-and-marcy), S01E10 (simon-and-marcy) — all correct

| Episode | Title | Status | Notes |
|---------|-------|--------|-------|
| F&C S01E01 | Fionna Campbell | FIXED | Added marshall-lee (confirmed via web search — significant dialogue) |
| F&C S01E02 | Simon Petrikov | OK | Simon & Marcy — correct |
| F&C S01E03 | Cake the Cat | FIXED | Added finn, jake (brief Ooo scene — transcript confirmed) |
| F&C S01E04 | Prismo the Wishmaster | FIXED | Added betty-grof, marceline (transcript confirmed speaking) |
| F&C S01E05 | Destiny | FIXED | Added finn (22 lines), jake, prismo. "Bonnie" = Finn's daughter, NOT princess-bubblegum (false positive) |
| F&C S01E06 | The Winter King | OK | Simon & Marcy — correct |
| F&C S01E07 | The Star | OK | Marshall Lee listed — correct |
| F&C S01E08 | Jerry | FIXED | Added betty-grof (25 lines as Betty + Past Betty), bmo (26 lines), gunter, scarab (10 lines) |
| F&C S01E09 | Casper & Nova | FIXED | Added beth (36 lines), gary-prince, lumpy-space-princess, marshall-lee, prismo, shermy — major crossover episode |
| F&C S01E10 | Cheers | FIXED | Added marshall-lee (prior web search), beth (13 lines), finn (3 lines) — all transcript confirmed |
| F&C S02E01 | The Hare and the Sprout | FIXED | Added gary-prince, huntress-wizard, marceline, marshall-lee, princess-bubblegum (web search) + hunter, winter-king (transcript confirmed) |
| F&C S02E02 | The Crocodile Who Bit a Log | FIXED | Added gary-prince, huntress-wizard, ice-king, marshall-lee (web search) + finn (speaks while dying), princess-bubblegum (transcript confirmed) |
| F&C S02E03 | The Lion of Embers | FIXED | Added flame-princess, gary-prince, huntress-wizard, ice-king, marceline, princess-bubblegum, prismo (web search) + cosmic-owl, hunter, scarab (transcript confirmed) |
| F&C S02E04 | The Cat Who Tipped the Box | FIXED | Added huntress-wizard, ice-king, marceline, princess-bubblegum, prismo (all confirmed speaking) |
| F&C S02E05 | The Butterfly and the River | FIXED | Added gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum (all confirmed speaking) |
| F&C S02E06 | The Bird in the Clock | FIXED | Added cosmic-owl, gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum (Cosmic Owl is killed by Huntress) |
| F&C S02E07 | The Wolves Who Wandered | FIXED | Added huntress-wizard, marshall-lee (web search) + starchy (transcript confirmed) |
| F&C S02E08 | The Insect that Sang | FIXED | Added gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum, scarab (trial episode + Boys Night) |
| F&C S02E09 | The Worm and his Orchard | FIXED | Added cosmic-owl, fern, huntress-wizard, princess-bubblegum (Fern's major return; Cosmic Owl resurrected) |
| F&C S02E10 | The Bear and the Rose | FIXED | Added finn, gary-prince, hunson-abadeer, huntress-wizard, ice-king, marceline, marshall-lee (web search) + hunter, minerva-campbell (transcript confirmed) |

**Summary:** 17 fixes applied — 7 in S1 (transcript analysis revealed finn, jake, betty-grof, bmo, gunter, scarab, beth, gary-prince, lumpy-space-princess, marshall-lee, prismo, shermy, marceline across 6 episodes), 10 in S2 (web search + transcript cross-check). Root cause: transcriptFile field was never populated for F&C episodes, so automated analysis couldn't link transcripts to episode data. Also added "Huntress" and "Marshall" aliases to characters.json for parser coverage.

---

## Final Validation Summary

**Completed:** 2026-02-05
**Total episodes validated:** 303

### Fixes Applied

| # | Episode | Fix | Source |
|---|---------|-----|--------|
| 1 | S01E07 | Added wildberry-princess | Transcript (speaking line) |
| 2 | S02E15 | Added choose-goose | Transcript (speaking lines) |
| 3 | S03E20 | Added wildberry-princess | Transcript (speaking lines on Ice King tape) |
| 4 | S03E22 | Added turtle-princess | Transcript (speaking lines as librarian) |
| 5 | S04E09 | Added turtle-princess + wildberry-princess | Transcript (speaking lines) |
| 6 | S04E24 | Added huntress-wizard | Transcript (speaking lines in magic shop) |
| 7 | S05E11 | Added turtle-princess + wildberry-princess | Transcript (speaking lines as audience) |
| 8 | S05E24 | Added mr-fox | Transcript (Short Graybles segment) |
| 9 | S06E01 | Fixed transcriptFile mapping | Was pointing to mini-episode |
| 10 | S07E02 | Fixed transcriptFile mapping | Was pointing to Frog Seasons mini-episode |
| 11 | S07E04 | Fixed transcriptFile mapping | Was pointing to Frog Seasons mini-episode |
| 12 | S08E02 | Added turtle-princess | Transcript (speaking line) |
| 13 | S08E07 | Added grob-gob-glob-grod | Transcript (Glob has speaking lines) |
| 14 | S10E11 | Added gunter | Transcript (appears as Ice Thing) |
| 15 | S10E13 | Added golb | Transcript (major physical presence in finale) |
| 16 | F&C S01E01 | Added marshall-lee | Web search (significant dialogue confirmed) |
| 17 | F&C S01E10 | Added marshall-lee | Web search (fights Scarab in finale) |
| 18 | S06E28 | Added lemongrab-saga storylineId | Transcript + web search (core Lemongrab episode) |
| 19 | F&C S02E01 | Added gary-prince, huntress-wizard, marceline, marshall-lee, princess-bubblegum | Web search (all speaking) |
| 20 | F&C S02E02 | Added gary-prince, huntress-wizard, ice-king, marshall-lee | Web search (all speaking) |
| 21 | F&C S02E03 | Added flame-princess, gary-prince, huntress-wizard, ice-king, marceline, princess-bubblegum, prismo | Web search (all speaking) |
| 22 | F&C S02E04 | Added huntress-wizard, ice-king, marceline, princess-bubblegum, prismo | Web search (all speaking) |
| 23 | F&C S02E05 | Added gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum | Web search (all speaking) |
| 24 | F&C S02E06 | Added cosmic-owl, gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum | Web search (Cosmic Owl major role) |
| 25 | F&C S02E07 | Added huntress-wizard, marshall-lee | Web search (both speaking) |
| 26 | F&C S02E08 | Added gary-prince, huntress-wizard, ice-king, marceline, marshall-lee, princess-bubblegum, scarab | Web search (trial + Boys Night) |
| 27 | F&C S02E09 | Added cosmic-owl, fern, huntress-wizard, princess-bubblegum | Web search (Fern's major return) |
| 28 | F&C S02E10 | Added finn, gary-prince, hunson-abadeer, huntress-wizard, ice-king, marceline, marshall-lee | Web search (Finn wakes up; season finale) |
| 29 | F&C S01E03 | Added finn, jake | Transcript (brief Ooo scene) |
| 30 | F&C S01E04 | Added betty-grof, marceline | Transcript (both speaking) |
| 31 | F&C S01E05 | Added finn, jake, prismo | Transcript (Finn 22 lines; "Bonnie" ≠ PB — false positive) |
| 32 | F&C S01E08 | Added betty-grof, bmo, gunter, scarab | Transcript (Betty 25 lines, BMO 26 lines, Scarab 10 lines) |
| 33 | F&C S01E09 | Added beth, gary-prince, lumpy-space-princess, marshall-lee, prismo, shermy | Transcript (major crossover episode) |
| 34 | F&C S01E10 | Added beth, finn | Transcript (Beth 13 lines, Finn 3 lines) |
| 35 | F&C S02E01 | Added hunter, winter-king | Transcript (Hunter 9 lines, Winter King 1 line) |
| 36 | F&C S02E02 | Added finn, princess-bubblegum | Transcript (Finn speaks while dying, PB 1 line) |
| 37 | F&C S02E03 | Added cosmic-owl, hunter, scarab | Transcript (all speaking) |
| 38 | F&C S02E07 | Added starchy | Transcript (3 lines) |
| 39 | F&C S02E10 | Added hunter, minerva-campbell | Transcript (Hunter 7 lines, Minerva 16 lines) |
| 40 | S04E18 | Added flame-princess, peppermint-butler | Transcript (both speak in King Worm dream) |
| 41 | S08E20 | Added charlie, fern, lady-rainicorn, marceline, neptr, princess-bubblegum, starchy | Transcript (Islands opener — 7 characters) |
| 42 | S08E26 | Added susan-strong | Transcript (speaking in Helpers) |
| 43 | S09E02 | Added betty-grof, gunter, ice-king, mr-pig, princess-bubblegum, shelby, sweet-p, tree-trunks | Transcript (Elements opener — 8 characters) |
| 44 | S09E03 | Added gunter, patience-st-pim | Transcript (both speaking) |
| 45 | S09E07 | Added cinnamon-bun, gunter, lady-rainicorn | Transcript (Fire Kingdom episode) |
| 46 | S09E08 | Added betty-grof, flame-princess, gunter, ice-king, jake | Transcript (Elements climax — 5 characters) |
| 47 | S09E10 | Added finn, joshua | Transcript (both speaking in Abstract) |
| 48 | S09E12 | Added gunter, jake | Transcript (Ice King's fanfic episode) |
| 49 | S09E13 | Added bmo, fern, the-lich | Transcript (Lich hand speaks through Sweet P) |
| 50 | S09E14 | Added bmo, gumbald, neptr, princess-bubblegum | Transcript (Gumbald foreshadowed) |
| 51 | DL S01E03 | Added ice-king, jermaine, joshua, lumpy-space-princess, margaret, mr-pig, peppermint-butler, the-lich, tiffany, tree-trunks, turtle-princess | Transcript (Dead World — 11 characters) |
| 52 | DL S01E04 | Added abracadaniel | Transcript (speaking in Wizard City) |

**Total: 147 character additions, 3 transcript file corrections, 1 storyline addition, 44 transcriptFile fields added, 2 character aliases added**

### Known False Positives in Transcript Analysis

The automated speaker analysis produces false matches in these cases:
- **winter-king** detected in AT episodes via shared alias "Simon Petrikov" (actually refers to Ice King)
- **gary-prince** detected in S01E14 via alias "Gary" (actually a different character — a river mermaid)
- **gunter** detected in S08E01 via alias "Gunther" (Evergreen's ancient dinosaur apprentice, not the penguin)
- **princess-bubblegum** detected in F&C S01E05 via alias "Bonnie" (actually Finn's daughter in alternate Destiny universe)

### Storyline Integrity

All 15 storyline definitions verified:
- Episode-to-storyline cross-references: **100% consistent** (no broken links)
- Storyline-to-episode cross-references: **100% consistent**
- Storyline character gap resolved: **GOLB added to S10E13** (was missing from gum-war storyline episodes)
- Remaining storyline metadata note: `hunson-abadeer` is listed as a peppermint-butler-dark storyline character but doesn't appear in any of its episodes — thematic reference rather than direct appearance

### Transcript Coverage

After linking orphan transcripts (DL S01E03-04, Islands S08E20-27, Elements S09E01-14) and fixing the S04E18 broken link:

| Series | With Transcript | Without | Coverage |
|--------|----------------|---------|----------|
| Adventure Time S01-S06 | 174 | 5 | 97% |
| Adventure Time S07-S10 | 54 | 26 | 68% |
| Distant Lands | 4 | 0 | 100% |
| Fionna and Cake | 20 | 0 | 100% |
| **Total** | **272** | **31** | **90%** |

#### Transcript Linkage Audit

24 transcript files existed in the submodule but had no `transcriptFile` field in episodes.json:
- **DL S01E03-04** — 2 episodes (wiki-scraped transcripts per TRANSCRIPT-GAPS.md)
- **AT S08E20-27** — 8 episodes (Islands miniseries)
- **AT S09E01-14** — 14 episodes (Elements miniseries + post-Elements)

Also fixed: S04E18 "King Worm" had a broken link (`King.Worm 2.txt` → `King.Worm.txt`).

Orphan transcript files with no matching episode in the database (mini-episodes/specials):
- `S00E00` Animated short, `S00E279` Diamonds and Lemons
- `S06E01-03` mini-episodes (All's Well That Rats Swell, Have You Seen the Muffin Mess, Sow Do You Like Them Apples)
- `S07E01-05` Frog Seasons (Spring, Summer, Autumn, Winter, Spring Again)

#### 31 Episodes With No Transcript on Disk

All 31 have transcript pages on the Adventure Time Wiki — they were never scraped into the submodule.

| Season | Episodes | Titles | Wiki Status |
|--------|----------|--------|-------------|
| S05 | E36 | Dungeon Train | Complete |
| S06 | E32, E37, E38 | Friends Forever, Water Park Prank, You Forgot Your Floaties | Complete |
| S06 | E40 | Orgalorg | Incomplete |
| S07 | E19-E20, E26 | Blank Eyed Girl, Bad Jubies, The Thin Yellow Line | Complete |
| S07 | E22 | Scamps | Incomplete |
| S07 | E23 | Crossover | Complete |
| S07 | E24-E25 | The Hall of Egress, Flute Spell | Incomplete (missing [actions]) |
| S08 | E03-E04, E10-E11, E15-E16 | Beyond the Grotto, Lady Rainicorn, Music Hole, Daddy-Daughter Card Wars, Do No Harm, Wheels | Complete |
| S08 | E06, E08-E09 | Bun Bun, Elemental, Five Short Tables | Incomplete |
| S08 | E12-E14 | Preboot, Reboot, Two Swords | Incomplete |
| S08 | E17 | High Strangeness | Complete (needs formatting) |
| S08 | E18 | Horse and Ball | Incomplete |
| S08 | E19 | Jelly Beans Have Power | Complete (needs formatting) |
| S10 | E01-E02, E06, E08 | The Wild Hunt, Always BMO Closing, Ring of Fire, The First Investigation | Complete |

**Summary:** 19 complete or near-complete, 12 incomplete (missing stage directions or partial dialogue). All have at least partial dialogue with speaker labels usable for character validation.

#### Character Gaps Exposed by New Linkage — RESOLVED

Cross-checking the 24 newly linked episodes against transcript speaker analysis revealed and fixed discrepancies in 13 episodes (51 character additions):
- **DL S01E03** "Together Again" — 11 characters added (Dead World episode with many returning characters)
- **DL S01E04** "Wizard City" — 1 added (abracadaniel)
- **S04E18** "King Worm" — 2 added (flame-princess, peppermint-butler in dream)
- **S08E20** "The Invitation" — 7 added (Islands opener)
- **S08E26** "Helpers" — 1 added (susan-strong)
- **S09E02** "Skyhooks" — 8 added (Elements opener)
- **S09E03** "Bespoken For" — 2 added (gunter, patience-st-pim)
- **S09E07** "Happy Warrior" — 3 added (cinnamon-bun, gunter, lady-rainicorn)
- **S09E08** "Hero Heart" — 5 added (Elements climax)
- **S09E10** "Abstract" — 2 added (finn, joshua)
- **S09E12** "Fionna and Cake and Fionna" — 2 added (gunter, jake)
- **S09E13** "Whispers" — 3 added (bmo, fern, the-lich)
- **S09E14** "Three Buckets" — 4 added (bmo, gumbald, neptr, princess-bubblegum)

**Note:** S09 Elements episodes S09E01, E04-E06, E09 have transcripts but lack speaker labels (raw dialogue format). These cannot be validated via transcript analysis — character data was verified against synopses.

---

## Open Items

Issues identified during validation that require future decisions or work.

### Data Model Questions

1. **`hunson-abadeer` in peppermint-butler-dark storyline** — Listed as a storyline character but doesn't appear in any of the storyline's episodes. Thematic reference (Hunson is connected to Peppermint Butler's dark magic backstory) rather than direct appearance. Decision: keep as thematic, or remove from storyline characters?

2. **"New Death" in DL S01E03** — New Death speaks 45 times in the transcript (main antagonist of "Together Again"). The `death` character is already in the episode data, but the transcript parser doesn't match "New Death" → `death` because they're different characters (Death is the father, New Death is the son). Options: add a `new-death` character entry, add "New Death" as a `death` alias (inaccurate but functional), or leave unmatched.

3. **S09 Elements transformed characters** — Elementally transformed versions of main characters appear frequently as unmatched transcript speakers: Marshmaline (Marceline), Nectr (Lemongrab), Lemonpink (LSP), Fun (Flame Princess), Fire Finn (Finn). These are the same characters in transformed states. Options: add as aliases to base characters (accurate for episode data purposes), create separate character entries (over-engineering), or leave unmatched (loses speaker data).

### Transcript Gaps

4. **31 missing transcript files** — All exist on the Adventure Time Wiki but were never scraped. Fandom blocks all automated requests. See [TRANSCRIPT-GAP-PLAN.md](TRANSCRIPT-GAP-PLAN.md) for full details, filenames, and priority tiers. Requires desktop browser or working scraper.

5. **5 S09 transcripts without speaker labels** — S09E01 Orb, S09E04 Winter Light, S09E05 Cloudy, S09E06 Slime Central, S09E09 Skyhooks II have raw dialogue format (no `Speaker:  line` structure). These need speaker attribution added, likely via SDH subtitles + video verification (desktop pipeline).

6. **Submodule sync** — `docs/TRANSCRIPT-GAP-PLAN.md` should be moved to `transcripts/TRANSCRIPT-GAP-PLAN.md` when the submodule is next updated. The plan document was created locally in the submodule but couldn't be pushed (no credentials for ISmarsh/adventuretime-transcripts from this environment).
