# Copilot Code Review Instructions

Universal guidance for automated code reviews. Prioritize real bugs and security
over style preferences.

## Do Flag

### Bugs

- Logic errors — incorrect calculations, off-by-one, wrong comparisons
- Null/undefined access without guards
- Race conditions or async handling errors
- Unreachable code or dead branches
- Broken error handling (swallowed exceptions, missing catches)

### Security

- XSS — unescaped user input in HTML/JSX
- Injection — string concatenation in SQL, shell commands, or eval
- Secrets — API keys, passwords, tokens in code or logs
- Auth issues — missing or bypassable authorization checks
- Insecure dependencies — known vulnerabilities in packages

### Accessibility

- Missing alt text on images
- Missing form labels or aria-labels
- Broken keyboard navigation (non-focusable interactive elements)
- Insufficient color contrast (when detectable)
- Missing skip links or landmark regions

### Correctness

- Type mismatches (in typed languages)
- Incorrect API usage (wrong method signatures, missing required params)
- Resource leaks (unclosed connections, missing cleanup)

## Do Not Flag

### Premature Optimization

- Missing `useMemo`/`useCallback` without measured performance issue
- "Could be more efficient" when current code is readable and fast enough
- Suggesting caching without evidence of repeated expensive computation

### Over-Engineering

- Extracting helpers/utilities for code used only once or twice
- Suggesting abstractions for "future flexibility"
- Adding configuration for hardcoded values that won't change
- Proposing design patterns that add complexity without clear benefit

### Style Preferences

- Naming suggestions unless current name is actively misleading
- Formatting issues (defer to linter/formatter)
- "Could be cleaner" without concrete improvement
- Preferring one valid approach over another equally valid one

### Intentional Patterns

- Patterns documented in project CLAUDE.md or style guide
- Framework-specific idioms (even if unfamiliar)
- Explicit trade-offs noted in comments

### Non-Issues

- TODOs or FIXMEs (these are intentional markers)
- Console.log in development code (unless in production paths)
- Magic numbers that are obvious in context (HTTP status codes, etc.)

---

# Project-Specific: The Enchiridion

This project is a fan-curated Adventure Time reference catalog.

## Data Files (characters.json, storylines.json, episodes.json)

**Do not flag or suggest changes for:**

- Character descriptions, aliases, or storyline summaries (subjective fan-curated content)
- Family/relationship modeling choices (adoptive relationships are intentionally mixed with biological)
- Creator-creation relationships modeled as parent-child (e.g., Princess Bubblegum creating Lemongrab)
- Empty arrays vs omitting optional fields (consistency is preferred over minimal data size)
- Series field being required (intentional design for future multi-series support)

These are intentional design decisions that have been discussed and finalized.

## General Notes

- This is a side project with curated, subjective content
- Data accuracy for Adventure Time lore is validated by the maintainer
- Prefer pragmatic solutions over theoretical purity
