# Copilot Review Instructions

This project is a fan-curated Adventure Time reference catalog. Some guidelines for reviewing:

## Data Files (characters.json, storylines.json, episodes.json)

**Do not flag or suggest changes for:**

- Character descriptions, aliases, or storyline summaries (subjective fan-curated content)
- Family/relationship modeling choices (adoptive relationships are intentionally mixed with biological)
- Creator-creation relationships modeled as parent-child (e.g., Princess Bubblegum creating Lemongrab)
- Empty arrays vs omitting optional fields (consistency is preferred over minimal data size)
- Series field being required (intentional design for future multi-series support)

These are intentional design decisions that have been discussed and finalized.

## Code Review Focus

Focus reviews on:

- TypeScript type safety and correctness
- React component patterns and hooks usage
- Test coverage and quality
- Security issues (XSS, injection, etc.)
- Accessibility (WCAG 2.1 AA compliance)
- Build/lint errors

## General Notes

- This is a side project with curated, subjective content
- Data accuracy for Adventure Time lore is validated by the maintainer
- Prefer pragmatic solutions over theoretical purity
