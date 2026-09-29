<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Workspace designer — agent pointers

Thin always-loaded routing. Open the named file when its trigger fires. Coding standards live in the prompts, not here.

## Mandatory

- **visualise** — styles, layout, BEM block, or visual polish: read `.prompts/base/how_to_visualise.md` before claiming UI done
- **masterprompt** — any frontend code change (Next.js, Tailwind shells, BEM, SCSS, TS, stubs): read `.prompts/base/masterprompt.md`
- **document** — before claiming a feature done, adding a subsystem, or leaving incomplete work: read `.prompts/base/how_to_document.md`
- **git** — before branching, committing, or opening a PR: read `.prompts/base/how_to_git.md`
- **cook** — unwrap / grill / leaf plans / road_to_mvp cascade: read `.prompts/base/how_to_cook.md`
- **skill** — non-trivial work (new page, block, API seam, bug hunt, multi-file refactor): read `.prompts/base/skill_issues.md`
- **folder** — placing new files or unsure where a module lives: read `documents/tech/folder_structure.md`

## Agent skills

### Issue tracker

Local markdown under `.scratch/<feature>/` (specs + tickets). Roadmaps stay in `.prompts/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: lazy `CONTEXT.md` + `docs/adr/`, plus standing `documents/`. See `docs/agents/domain.md`.

## Skill preference

Prefer Matt Pocock skills (`grill-with-docs` → `to-spec` / `to-tickets` → `implement`). Use pstack only when `skill_issues.md` names it. Write comments on logical blocks. Do not run `/tdd` unless the user asks. Skills live in `~/.agents/skills/` (`npx skills add mattpocock/skills -g -a cursor`). `.cursor` and `.agents` stay gitignored.
