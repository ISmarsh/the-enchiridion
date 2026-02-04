#!/usr/bin/env python3
"""
Populate characterIds in episodes.json based on transcript speaker analysis.

Usage:
    python scripts/populate_character_ids.py [--dry-run]
"""

import argparse
import json
from pathlib import Path


def load_json(path: Path) -> dict | list:
    """Load a JSON file."""
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        raise FileNotFoundError(f"File not found: {path}")
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON in {path}: {e}")


def save_json(path: Path, data: dict | list) -> None:
    """Save data to a JSON file."""
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")


def main():
    parser = argparse.ArgumentParser(description="Populate characterIds in episodes.json")
    parser.add_argument(
        "--analysis-file",
        type=Path,
        default=Path("scripts/speaker-analysis.json"),
        help="Path to speaker analysis JSON",
    )
    parser.add_argument(
        "--episodes-file",
        type=Path,
        default=Path("src/data/episodes.json"),
        help="Path to episodes.json",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print changes without writing",
    )
    args = parser.parse_args()

    # Load data
    print(f"Loading analysis from {args.analysis_file}...")
    analysis = load_json(args.analysis_file)
    transcripts = analysis["transcripts"]

    print(f"Loading episodes from {args.episodes_file}...")
    episodes = load_json(args.episodes_file)

    # Build lookup from transcript filename to characterIds
    transcript_to_chars = {}
    for filename, data in transcripts.items():
        transcript_to_chars[filename] = data["characterIds"]

    # Update episodes
    updated_count = 0
    missing_transcripts = []
    empty_matches = []

    for episode in episodes:
        transcript_file = episode.get("transcriptFile")
        if not transcript_file:
            continue

        if transcript_file in transcript_to_chars:
            char_ids = transcript_to_chars[transcript_file]
            if char_ids:
                episode["characterIds"] = char_ids
                updated_count += 1
            else:
                empty_matches.append(transcript_file)
        else:
            missing_transcripts.append(transcript_file)

    # Report
    print("\n=== RESULTS ===")
    print(f"Updated {updated_count} episodes with characterIds")

    if missing_transcripts:
        print(f"\nWARNING: {len(missing_transcripts)} transcripts not found in analysis:")
        for t in missing_transcripts[:10]:
            print(f"  - {t}")
        if len(missing_transcripts) > 10:
            print(f"  ... and {len(missing_transcripts) - 10} more")

    if empty_matches:
        print(f"\nINFO: {len(empty_matches)} transcripts had no matched characters:")
        for t in empty_matches[:5]:
            print(f"  - {t}")

    # Sample output
    print("\n=== SAMPLE UPDATES ===")
    for episode in episodes[:3]:
        print(f"  {episode['id']}: {episode.get('characterIds', [])}")

    # Save or dry-run
    if args.dry_run:
        print("\n[DRY RUN] No changes written")
    else:
        save_json(args.episodes_file, episodes)
        print(f"\nWrote updated episodes to {args.episodes_file}")


if __name__ == "__main__":
    main()
