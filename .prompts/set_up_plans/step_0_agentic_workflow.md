# Step 0 — Agentic workflow

## Goal

Wire agents into this repo the way Blocky and DNBH do: short always-loaded pointers in `AGENTS.md`, documentation under `documents/`, skill routing, and the cook cascade. Adapted to the Next.js / Tailwind / Sass BEM studio that already ships. No Hub palette, no Blocky canvas.

## Prerequisites

- Blocky and DNBH were readable over SSH as Schwibl.
- The studio (silhouettes, plus, themes, window) already exists. This step does not redesign it.

## What landed

- [`AGENTS.md`](../../AGENTS.md) — pointer-only triggers: visualise, masterprompt, document, git, cook, skill, folder. Next.js agent-rules block kept, because `next dev` rewrites it.
- [`.prompts/base/`](../base/) — `masterprompt.md`, `skill_issues.md`, `how_to_cook.md`, `how_to_document.md`, `how_to_git.md`, `how_to_visualise.md`, `how_to_routing.md`, `scss_tokens.md`, `typescript_blocks.md`.
- [`docs/agents/`](../../docs/agents/) — issue tracker, triage labels, domain docs.
- [`documents/`](../../documents/) — product, tech, dev, userflow. Replaces the earlier `documentation/` tree.
- [`.scratch/.gitkeep`](../../.scratch/.gitkeep) — ticket home for `/to-spec` and `/to-tickets`.
- `.gitignore` ignores `.cursor`, `.agents`, and `.prompts/unfinished`, matching Blocky and DNBH. Skills stay global at `~/.agents/skills/`.

## Done when

- [x] AGENTS.md names every mandatory path with a trigger
- [x] Companion prompts resolve inside this repo
- [x] No Blocky canvas rules and no DNBH bike/Hub rules were copied as product behaviour
- [x] Studio UI was not redesigned in this step
