#!/usr/bin/env python3
"""
Parse Adventure Time transcripts to extract speaker names and map to character IDs.

Usage:
    python scripts/parse_transcript_speakers.py [--transcripts-dir PATH] [--output FILE]
"""

import argparse
import json
import re
from collections import Counter
from pathlib import Path


def load_characters(characters_file: Path) -> dict:
    """Load characters.json and build name-to-id mapping."""
    with open(characters_file, encoding="utf-8") as f:
        characters = json.load(f)

    # Build mapping from name/alias (lowercased) to character ID
    name_to_id = {}
    for char in characters:
        if char.get("type") == "group":
            continue

        char_id = char["id"]
        # Map primary name
        name_to_id[char["name"].lower()] = char_id
        # Map aliases
        for alias in char.get("aliases", []):
            name_to_id[alias.lower()] = char_id

    return name_to_id


def extract_speakers(transcript_text: str) -> list[str]:
    """Extract speaker names from transcript text."""
    # Match patterns like "Character:" or "Character and Character2:"
    # at the start of a line or after stage directions
    speaker_pattern = re.compile(
        r"^(?:\[.*?\]\s*)?([A-Z][^:\[\]]+?):\s",
        re.MULTILINE
    )

    speakers = []
    for match in speaker_pattern.finditer(transcript_text):
        speaker = match.group(1).strip()
        # Handle "Finn and Jake:" or "Finn & Jake:" -> ["Finn", "Jake"]
        if " and " in speaker:
            parts = [s.strip() for s in speaker.split(" and ")]
            speakers.extend(parts)
        elif " & " in speaker:
            parts = [s.strip() for s in speaker.split(" & ")]
            speakers.extend(parts)
        else:
            speakers.append(speaker)

    return speakers


def normalize_speaker(speaker: str) -> str:
    """Normalize speaker name for matching."""
    # Remove common suffixes/prefixes
    name = speaker.strip()
    # Remove "(singing)", "[laughing]", etc. if they crept in
    name = re.sub(r"\s*\([^)]*\)\s*$", "", name)
    name = re.sub(r"\s*\[[^\]]*\]\s*$", "", name)
    return name.lower()


def map_speaker_to_character(speaker: str, name_to_id: dict) -> str | None:
    """Try to match a speaker name to a character ID."""
    normalized = normalize_speaker(speaker)

    # Direct match
    if normalized in name_to_id:
        return name_to_id[normalized]

    # Try without "the" prefix (e.g., "The Lich" -> "Lich")
    if normalized.startswith("the "):
        without_the = normalized[4:]
        if without_the in name_to_id:
            return name_to_id[without_the]

    # Try common variations
    variations = [
        normalized.replace("-", " "),
        normalized.replace(" ", "-"),
    ]
    for var in variations:
        if var in name_to_id:
            return name_to_id[var]

    return None


def parse_transcript_file(
    transcript_path: Path, name_to_id: dict
) -> tuple[set[str], Counter]:
    """Parse a single transcript file.

    Returns:
        (matched_character_ids, unmatched_speaker_counts)
    """
    with open(transcript_path, encoding="utf-8") as f:
        text = f.read()

    speakers = extract_speakers(text)
    matched_ids = set()
    unmatched = Counter()

    for speaker in speakers:
        char_id = map_speaker_to_character(speaker, name_to_id)
        if char_id:
            matched_ids.add(char_id)
        else:
            unmatched[speaker] += 1

    return matched_ids, unmatched


def find_transcripts(transcripts_dir: Path) -> list[Path]:
    """Find all transcript files."""
    return sorted(transcripts_dir.rglob("*.txt"))


def main():
    parser = argparse.ArgumentParser(description="Parse transcripts for speakers")
    parser.add_argument(
        "--transcripts-dir",
        type=Path,
        default=Path("transcripts"),
        help="Path to transcripts directory (submodule)",
    )
    parser.add_argument(
        "--characters-file",
        type=Path,
        default=Path("src/data/characters.json"),
        help="Path to characters.json",
    )
    parser.add_argument(
        "--output",
        type=Path,
        help="Output JSON file for results",
    )
    args = parser.parse_args()

    # Load character mappings
    print(f"Loading characters from {args.characters_file}...")
    name_to_id = load_characters(args.characters_file)
    print(f"  Loaded {len(name_to_id)} name/alias mappings")

    # Find transcripts
    transcripts = find_transcripts(args.transcripts_dir)
    print(f"\nFound {len(transcripts)} transcript files")

    # Parse all transcripts
    all_unmatched = Counter()
    results = {}

    for transcript in transcripts:
        matched_ids, unmatched = parse_transcript_file(transcript, name_to_id)
        all_unmatched.update(unmatched)

        # Key by filename (without extension)
        filename = transcript.name
        results[filename] = {
            "path": str(transcript),
            "characterIds": sorted(matched_ids),
            "unmatchedSpeakers": dict(unmatched),
        }

    # Summary
    print("\n=== SUMMARY ===")
    print(f"Parsed {len(results)} transcripts")

    # Most common unmatched speakers
    print("\n=== TOP 50 UNMATCHED SPEAKERS ===")
    for speaker, count in all_unmatched.most_common(50):
        print(f"  {count:4d}x  {speaker}")

    # Output results
    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            json.dump(
                {
                    "transcripts": results,
                    "unmatchedSpeakers": dict(all_unmatched.most_common(100)),
                },
                f,
                indent=2,
            )
        print(f"\nResults written to {args.output}")


if __name__ == "__main__":
    main()
