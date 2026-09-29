# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root (created lazily by `/domain-modeling` / `/grill-with-docs`), or
- **`CONTEXT-MAP.md`** at the repo root if it exists
- **`docs/adr/`**: ADRs that touch the area you're about to work in (`0001` Tailwind shells with Sass blocks, `0002` SVG room, `0003` rental request is not a payment, `0004` silhouettes before icons)
- Standing docs (always relevant for product/tech facts):
  - `documents/product_desc/` — user-facing behaviour
  - `documents/tech/` — folder layout, routing, room, rental API
  - `documents/dev/` — how to run the app locally
  - `.prompts/base/how_to_document.md` — where to write when docs change

If `CONTEXT.md` / ADRs don't exist yet, **proceed silently** — don't flag absence. Prefer existing `documents/` content over inventing parallel glossaries. `/domain-modeling` creates `CONTEXT.md` and ADRs when terms or decisions actually get resolved.

## File structure

Single-context repo. The Next.js app lives at the repo root (the coding test is one app, not the DNBH `frontend/` + `backend/` split).

```
/
├── CONTEXT.md                 ← glossary
├── docs/adr/                  ← ADRs
├── documents/
│   ├── product_desc/
│   ├── tech/
│   ├── dev/
│   └── userflow/
├── .prompts/                  ← roadmaps / screen plans (not domain glossary)
└── src/                       ← App Router, blocks, features, styles
```

## Use the glossary's vocabulary

When your output names a domain concept, use the term as defined in `CONTEXT.md` when it exists; otherwise use language already present in `documents/` and `.prompts/base/masterprompt.md`. Don't drift to synonyms the glossary explicitly avoids.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding.
