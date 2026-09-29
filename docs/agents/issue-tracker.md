# Issue tracker: Local Markdown

Issues and specs for this repo live as markdown files in `.scratch/`.

This matches the file-based workflow copied from Blocky and DNBH: long-lived roadmaps stay under `.prompts/`; Matt Pocock skills publish tickets and specs under `.scratch/`.

## Relationship to `.prompts/`

| Tree | Role |
|------|------|
| `.prompts/<initiative>/` | Human/agent **implementation plans** (roadmaps + `step_N_*.md` / leaf `NN_*.md`, and screen `ux.md` / `ui.md` / `grill.md` / `plan.md`). One step per chat. |
| `.scratch/<feature-slug>/` | **Specs and tickets** created by `/to-spec`, `/to-tickets`, `/triage`, `/wayfinder`. |
| `documents/` | Product / tech / dev docs (see `.prompts/base/how_to_document.md`). Not the issue tracker. |

Do not move roadmap steps into `.scratch/`. When `/implement` needs a ticket, use a `.scratch/` path (or create one via `/to-tickets` from the current conversation).

## Conventions

- One feature per directory: `.scratch/<feature-slug>/`
- The spec is `.scratch/<feature-slug>/spec.md`
- Implementation issues are one file per ticket at `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`, never a single combined tickets file
- Triage state is recorded as a `Status:` line near the top of each issue file (see `triage-labels.md` for the role strings)
- Comments and conversation history append to the bottom of the file under a `## Comments` heading

## When a skill says "publish to the issue tracker"

Create a new file under `.scratch/<feature-slug>/` (creating the directory if needed).

## When a skill says "fetch the relevant ticket"

Read the file at the referenced path. The user will normally pass the path or the issue number directly.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a file with one **child** file per ticket.

- **Map**: `.scratch/<effort>/map.md` (the Notes / Decisions-so-far / Fog body).
- **Child ticket**: `.scratch/<effort>/issues/NN-<slug>.md`, numbered from `01`, with the question in the body. A `Type:` line records the ticket type (`research`/`prototype`/`grilling`/`task`); a `Status:` line records `claimed`/`resolved`.
- **Blocking**: a `Blocked by: NN, NN` line near the top. A ticket is unblocked when every file it lists is `resolved`.
- **Frontier**: scan `.scratch/<effort>/issues/` for files that are open, unblocked, and unclaimed; first by number wins.
- **Claim**: set `Status: claimed` and save before any work.
- **Resolve**: append the answer under an `## Answer` heading, set `Status: resolved`, then append a context pointer (gist + link) to the map's Decisions-so-far in `map.md`.
