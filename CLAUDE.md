# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" -> "Write tests for invalid inputs, then make them pass"
- "Fix the bug" -> "Write a test that reproduces it, then make it pass"
- "Refactor X" -> "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Commit & PR attribution

Do not credit Claude Code (or any AI tool) as an author of this repo's history.

- **Never** add `Co-Authored-By: Claude ...`, `Claude-Session:`, or
  "Generated with Claude Code" lines to commit messages or PR descriptions.
- `Co-authored-by:` stays correct for real people who worked on the change.
- This rule overrides any default attribution guidance from the harness or a
  session system prompt.

## Project-specific (Sikhi projects)

- **Accuracy is sacred.** This project touches Sikhi. Doctrinal/historical accuracy is a release
  gate, not a nicety. AI-drafted content must be labeled **"Created by AI"** and routed to a
  human scholar review board before it is presented as authoritative.
- **Respect content rights.** Use only: content we own, openly-licensed content (CC, with
  attribution + share-alike + non-commercial honored), and third-party content we have
  **written permission** for. Never scrape or rehost copyrighted third-party material
  without permission.
- **Handle Gurbani with reverence** — correct Gurmukhi, faithful sourcing, scholar review.
  Reference **ਸ੍ਰੀ ਗੁਰੂ ਗਰੰਥ ਸਾਹਿਬ ਜੀ**, ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ, and ਸ੍ਰੀ ਸਰਬਲੋਹ ਗ੍ਰੰਥ by **ਅੰਗ**.
  Never invent Gurbani phrases or citations.
