# Agent flow

Public Schwibl demos (`ai_chat_demo`, `custom_routing_demo`, `yandex_map_demo`) document the app under `documentation/`, style blocks with BEM Sass, and keep types in `*.d.ts` with a `t_` prefix. Their `.gitignore` drops `.cursor/`, `.prompts/`, and `AGENTS.md`. A comment in `ai_chat_demo` still points tokens at `.prompts/base/how_to_visualise.md`, so that file is part of the workflow even when it is not published.

`Schwibl/blocky` and `Schwibl/dnbh` were not clonable here (GitHub 404). The skills those repos are expected to carry match Matt Pocock's grill-with-docs, which is one line that delegates to grilling and domain-modeling. Those three skills are vendored under `.cursor/skills/` with their upstream text.

## What an agent does here

1. Read `CONTEXT.md` before inventing a new word for the setup, the window, or a rental request.
2. Read `docs/adr/` before swapping Tailwind for Sass or adding a card form.
3. For a new screen, follow `.prompts/README.md`: `ux.md`, then `ui.md`, then a grill (recommended answer, do not wait), then a wrapped plan whose leaves are the only edits.
4. Keep one block in one Sass file. Do not nest an element inside an element (`block__element__child` is wrong; a new block is right).
5. Put new domain types in `src/types/*.d.ts`.

This repo commits `.prompts/` and `.cursor/` so the trail is in the pull request. That is a deliberate difference from the gitignored portfolio demos.
