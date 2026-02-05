# Character Art Methodology

Screenshot-based character portraits extracted from episode video archives.

## Rationale

Fair use basis: small cropped stills from episodes, used for character identification
in a non-commercial fan catalog. Consistent with how Wikipedia, fan wikis, and TV
databases use screenshots for reference purposes.

Four-factor assessment:

| Factor                   | Analysis                                                          | Favors     |
| ------------------------ | ----------------------------------------------------------------- | ---------- |
| Purpose & character      | Non-commercial, informational — identifying characters            | Fair use   |
| Nature of the work       | Creative/fictional source material                                | Rightsholder |
| Amount used              | Single still frame per episode, cropped to character              | Fair use   |
| Market effect            | Reference catalog doesn't substitute for watching the show        | Fair use   |

## Data Model

### Primary Image

Each character gets one canonical portrait — their most recognizable look.

```ts
interface BaseCharacter {
  // ... existing fields
  imageUrl?: string;           // path to primary portrait
  imageSource?: ImageSource;   // provenance for primary portrait
}
```

### Secondary Images

Additional versions (age variants, alternate forms, etc.) stored as an array.

```ts
interface CharacterImage {
  url: string;                 // relative path: images/characters/finn-s01.webp
  label: string;               // human-readable: "Kid Finn (Season 1–2)"
  episodeId: string;           // source episode ID from episodes.json
  timestamp?: number;          // seconds into episode (for reproducibility)
}
```

```ts
interface BaseCharacter {
  // ... existing fields
  imageUrl?: string;
  imageSource?: ImageSource;
  images?: CharacterImage[];   // secondary images / version variants
}
```

### ImageSource

Provenance for the primary image, same shape used in the `images` array.

```ts
interface ImageSource {
  episodeId: string;           // links to episodes.json
  timestamp?: number;          // seconds into episode
}
```

### Why Track Episode Source

- **Spoiler gating** — if displaying to a user who hasn't reached that episode,
  blur/hide or fall back to an earlier-season image
- **Attribution** — display "From S01E16 'Ocean of Fear'" alongside the image
- **Reproducibility** — re-extract the exact frame if source video or crop
  specs change

## Character Versions

Themed characters with visually distinct eras or forms. Each row is a potential
image (primary + secondaries).

### Finn

| Version          | Seasons    | Visual Markers                                        | Primary? |
| ---------------- | ---------- | ----------------------------------------------------- | -------- |
| Kid Finn (12–13) | S1–S2      | Shorter, rounder face, original backpack              | **Yes**  |
| Teen Finn (14–15)| S3–S5      | Taller, longer hair, sometimes hatless                |          |
| Older Finn (16+) | S6–S10     | Flower shirt, prosthetic/mechanical arm, angular face |          |
| Adult Finn       | Distant Lands | Notably taller, mature features                    |          |

### Jake

| Version            | Seasons       | Visual Markers                          | Primary? |
| ------------------ | ------------- | --------------------------------------- | -------- |
| Standard Jake      | S1–S10        | Consistent design throughout            | **Yes**  |
| Shapeshifted forms | Various       | Stretchy/exaggerated — fun secondaries  |          |

### BMO

| Version       | Seasons       | Visual Markers                              | Primary? |
| ------------- | ------------- | ------------------------------------------- | -------- |
| Standard BMO  | S1–S10        | Treehouse era, consistent design            | **Yes**  |
| Space BMO     | Distant Lands | Same design, different context/scale        |          |

### Princess Bubblegum

| Version        | Seasons  | Visual Markers                                     | Primary? |
| -------------- | -------- | -------------------------------------------------- | -------- |
| Standard PB    | S1–S6    | Crown, pink dress, lab coat variants               | **Yes**  |
| Exiled PB      | S6–S7    | Casual clothes, no crown                           |          |
| Young Bonnie   | Flashbacks | Child form, simpler design                        |          |

### Marceline

| Version            | Seasons       | Visual Markers                          | Primary? |
| ------------------ | ------------- | --------------------------------------- | -------- |
| Standard Marceline | S1–S10        | Bass guitar, bite marks, floating       | **Yes**  |
| Child Marceline    | Flashbacks    | Mushroom War era, with Simon            |          |
| Stakes arc forms   | S7 (Stakes)   | Various transformations                 |          |

### Ice King

| Version          | Seasons  | Visual Markers                               | Primary? |
| ---------------- | -------- | -------------------------------------------- | -------- |
| Standard Ice King| S1–S10   | Blue skin, white beard, crown, robe          | **Yes**  |
| Pre-madness Simon| Flashbacks | Glasses, sweater, crown starting to affect  |          |

### Simon (Post-Crown)

| Version       | Series          | Visual Markers                              | Primary? |
| ------------- | --------------- | ------------------------------------------- | -------- |
| Restored Simon| Fionna and Cake | Human, glasses, sweater, no crown powers    | **Yes**  |
| Late AT Simon | S10 finale      | Brief restoration, emotional scenes         |          |

### Flame Princess

| Version        | Seasons  | Visual Markers                                    | Primary? |
| -------------- | -------- | ------------------------------------------------- | -------- |
| Standard FP    | S4–S10   | Flame hair, orange/red, ruler of Fire Kingdom     | **Yes**  |
| Contained FP   | S3 intro | Inside lantern, more subdued                      |          |

### Lumpy Space Princess

| Version       | Seasons  | Visual Markers                                     | Primary? |
| ------------- | -------- | -------------------------------------------------- | -------- |
| Standard LSP  | S1–S10   | Purple cloud shape, star on forehead               | **Yes**  |
| Homeless LSP  | S5–S6    | Living in the woods, same look different context   |          |

### Lemongrab

| Version           | Seasons | Visual Markers                                  | Primary? |
| ----------------- | ------- | ----------------------------------------------- | -------- |
| Standard Lemongrab| S3–S5   | Yellow, tall, angular, single earl              | **Yes**  |
| Fat Lemongrab     | S5      | After consuming his clone, much larger          |          |

### Prismo

| Version         | Seasons         | Visual Markers                            | Primary? |
| --------------- | --------------- | ----------------------------------------- | -------- |
| Standard Prismo | S5+, F&C        | 2D shadow on wall, pink, in the Time Room | **Yes**  |

> **Note:** Prismo is a 2D entity (a shadow projected on a wall). Crop treatment
> will differ from 3D characters — may need wider framing to include wall context.

## Extraction Pipeline

### Prerequisites

- Episode video archive (local)
- `ffmpeg` for frame extraction
- `imagemagick` for crop and conversion
- Claude (multimodal) for frame analysis and selection

### Step 1: Candidate Episode Selection

Run analysis on `episodes.json` to find optimal episodes per character:

- **Small cast** — fewer `characterIds` = more screen time per character
- **Character in title/synopsis** — suggests character-focused story
- **Era-appropriate** — match the target version/age
- **Multiple characters per scan** — when scanning an episode for one character,
  flag good frames for any other target characters visible

> **TODO:** Generate shot list after episode data corrections are finalized.
> See [Shot List](#shot-list) section below.

### Step 2: Coarse Frame Sampling

Extract one frame every 10 seconds across the episode:

```bash
mkdir -p /tmp/frames/coarse
ffmpeg -i "episode.mkv" \
  -vf "fps=1/10,scale=640:-1" \
  -q:v 5 \
  /tmp/frames/coarse/frame_%03d.jpg
```

For an 11-minute episode this produces ~66 thumbnails.

Claude analyzes all frames and identifies candidates where the target character is:

- Clearly visible (not obscured, not deep in background)
- Facing camera or in a recognizable pose
- Minimal motion blur
- Uncluttered background preferred

### Step 3: Fine Frame Sampling

Extract every frame in a short window around the best coarse timestamp:

```bash
mkdir -p /tmp/frames/fine
ffmpeg -i "episode.mkv" \
  -ss 03:20 -t 10 \
  -vf "scale=640:-1" \
  -q:v 2 \
  /tmp/frames/fine/frame_%04d.jpg
```

Claude picks the single best frame from the fine pass.

### Step 4: Crop and Optimize

Crop to the character region, resize to consistent dimensions, convert to WebP:

```bash
convert input.jpg \
  -crop WxH+X+Y +repage \
  -resize 400x400^ \
  -gravity center \
  -extent 400x400 \
  -quality 80 \
  output.webp
```

Claude identifies crop coordinates by analyzing the selected frame, then
generates the ImageMagick command.

### Output Specs

| Property    | Value                                      |
| ----------- | ------------------------------------------ |
| Format      | WebP                                       |
| Dimensions  | 400×400 (square) — revisit if cards need a different ratio |
| Quality     | 80                                         |
| Naming      | `{character-id}.webp` (primary), `{character-id}-{label}.webp` (variants) |
| Location    | `public/images/characters/`                |

### Batching Strategy

When scanning an episode, check for ALL target characters — not just the one
you opened the episode for. One pass through "Finn the Human" (S05E01) could
yield frames for Finn, Jake, and Prismo simultaneously.

## Episode Data Status

Character art extraction depends on accurate `characterIds` in `episodes.json`.
Validation progress tracked on branch `claude/validate-episode-data-PKJEc`.

### Validated and Safe to Target

| Range | Episodes | Transcript Coverage | Notes |
| ----- | -------- | ------------------- | ----- |
| S01–S04 | 104 | 100% | Fully validated, all fixes applied |
| S05 | 52 | 98% (1 gap) | Fully validated |
| S06 | 43 | 91% (4 gaps) | Fully validated |
| S07 | 26 | 69% (8 gaps) | Validated; transcript gaps don't affect character data |
| S10 | 13 | 69% (4 gaps) | Validated, 2 fixes applied |
| F&C S1–S2 | 20 | 100% | Major overhaul complete — 29 character additions, all transcripts linked |

### Still Has Queued Character Fixes

These seasons have known character data gaps queued for the next validation pass.
Avoid targeting these episodes for art extraction until fixes land.

| Range | Issue |
| ----- | ----- |
| S08 (Islands) | S08E20 missing 7 characters; other gaps in miniseries |
| S09 (Elements) | 8 of 14 episodes have character gaps |
| DL S01E03 "Together Again" | 11 missing characters |
| DL S01E04 "Wizard City" | 1 missing character |
| S04E18 "King Worm" | 2 missing (flame-princess, peppermint-butler) |

### Validation Stats

- **Total episodes:** 303
- **Fixes applied so far:** 96 character additions, 3 transcript corrections, 1 storyline addition
- **Transcript coverage:** 272/303 (90%) — 31 episodes have wiki transcripts not yet scraped

## Shot List

> **Status:** Pending — generate once episode data validation is complete.
>
> For each themed character, find candidates across eras:
>
> | Slot               | Purpose                                    |
> | ------------------ | ------------------------------------------ |
> | Primary candidate  | Most recognizable version, clean shot       |
> | Early-series       | Classic/original design                     |
> | Mid-series         | Character development era                   |
> | Late/spinoff       | Mature or alternate version                 |
>
> Episode selection weighted by: cast size (smaller = better), character presence
> in title/synopsis, era match for target version.
>
> **Safe ranges for initial shot list:** S01–S07, S10, F&C. Avoid S08 (Islands),
> S09 (Elements), and DL S01E03–04 until queued fixes land.

## Notes

- **Prismo framing** — As a 2D wall projection, Prismo may need wider crop or
  non-square aspect ratio to look right on a card.
- **Simon vs. Ice King** — Same `ice-king` character ID in episode data. For Simon
  screenshots, target Fionna and Cake episodes where the character is in human form.
- **Fern** — Already exists as a variant of Finn (`variantOf: "finn"`). Treat as a
  separate character for screenshot purposes.
- **Group characters** (Princesses of Ooo, Banana Guards) — skip for now, no
  individual portrait needed.
