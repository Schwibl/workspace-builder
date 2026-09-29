# Agent skill routing

Read this before non-trivial work. It tells you which installed skills to invoke and when. Coding standards stay in [`masterprompt.md`](./masterprompt.md). Visual and UX standards stay in [`how_to_visualise.md`](./how_to_visualise.md). Where to write docs stays in [`how_to_document.md`](./how_to_document.md). Roadmap wrap → unwrap → grill → leaf → implement stays in [`how_to_cook.md`](./how_to_cook.md).

## When to open this file

- Any new page, BEM block, API seam, bug hunt, or multi-file refactor
- Skip for trivial one-line fixes the user already specified exactly

## Hard bans

- **Never** use `/no-comments`. This project requires comments on logical blocks. See masterprompt.
- **Never** use `/tdd` unless the user explicitly asks. The human runs app tests. Agents only check linter issues.
- Prefer `/grill-me` / `/grill-with-docs` over poteto’s “never block on the human” when product or API behaviour is ambiguous.
- **Do not invent API fields.** Stub, add `TODO:`, and a dated bullet under [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md).
- **Do not invent Figma or maket workflows.** Match [`how_to_visualise.md`](./how_to_visualise.md) and tokens.

## Default entry

1. Requirements fuzzy → `/grill-me` (or `/grill-with-docs` if domain terms or ADRs need sharpening)
2. Requirements clear, work non-trivial → `/to-spec` and/or `/to-tickets`, then `/implement` (Matt Pocock). Reach for `/poteto-mode` only when `skill_issues` matrix names a pstack skill, or Matt Pocock does not cover the need.
3. Unsure which skill fits → `/ask-matt`
4. Tracker/docs not configured → `/setup-matt-pocock-skills` once (see `docs/agents/`)

## Task → skill matrix

| Situation | Skills to use (in order) |
|-----------|--------------------------|
| Fuzzy product / UX decision | `/grill-me` or `/grill-with-docs` → then implement. |
| Styles / layout / visual polish | [`how_to_visualise.md`](./how_to_visualise.md) first → implement. No Figma visual-parity. |
| New page / BEM block / API seam | `/grill-with-docs` if fuzzy → `/to-spec` / `/to-tickets` → `/implement`. Optional `/architect` when crossing a module boundary. |
| New screen in this app | [`.prompts/screens/<screen>/`](../screens/) — `ux.md`, then `ui.md`, then grill, then `plan.md` leaves. See [`how_to_cook.md`](./how_to_cook.md). |
| Any `.ts` / `.tsx` edit | `typescript-best-practices` |
| Stub / missing external API | Stub + `TODO:` + [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md) |
| Bug / weird page behavior | `/diagnosing-bugs` or `/poteto-mode` bug fix. `/how` if the subsystem is unfamiliar. |
| «How does X work?» / «Why is it this way?» | `/how`, `/why`, or `/teach` |
| Shared UI change (header, tokens, theme) | `/blast-radius` before treating the change as done |
| Pre-merge review | `/code-review` and/or `/interrogate` |
| `road_to_mvp` unwrap / leaf / grill cascade | [`how_to_cook.md`](./how_to_cook.md) first → `/grill-with-docs` with human answers (or “keep recommendations”) → leaf plans → `/implement` one leaf. Do not invent deferred product choices. |
| Setup roadmap steps | Execute [`.prompts/set_up_plans/00_roadmap.md`](../set_up_plans/00_roadmap.md) in order. One step per chat. |
| Long session / context full | `/handoff` |
| Agent prose unclear | `/wait-what` or `/bro` |
| After a painful repeated workflow | `/reflect`. Encode into a project skill or a prompt under `.prompts/base/`. |
| Human-facing docs / next-steps | `/technical-writing` |
| `AGENTS.md`, skills, agent prompts | `writing-for-agents` |

## Companion prompts

Always apply these together with skills:

| Prompt | When |
|--------|------|
| [`masterprompt.md`](./masterprompt.md) | Every frontend change (Next.js, Tailwind shells, BEM, SCSS, TS, stubs). Opens `how_to_routing.md` / `scss_tokens.md` / `typescript_blocks.md` from its companion table when those branches apply |
| [`how_to_visualise.md`](./how_to_visualise.md) | Every styles, layout, BEM chrome, or visual polish change |
| [`how_to_document.md`](./how_to_document.md) | Feature done / new subsystem / incomplete work |
| [`how_to_cook.md`](./how_to_cook.md) | `road_to_mvp` unwrap, leaf authorship, or grill-before-implement |
| [`how_to_git.md`](./how_to_git.md) | Branching, commit messages, PRs into `main` |

## Installed skill inventory

**mattpocock** (global): `~/.agents/skills/` via `npx skills add mattpocock/skills -g -a cursor`.  
**pstack**: Cursor marketplace plugin (user-level).

### Tier A — use regularly

**mattpocock:** `ask-matt`, `grill-me`, `grill-with-docs`, `grilling`, `domain-modeling`, `to-spec`, `to-tickets`, `implement`, `code-review`, `diagnosing-bugs`, `research`, `handoff`, `setup-matt-pocock-skills`, `triage`

**pstack (complementary):** `how`, `why`, `architect`, `typescript-best-practices`, `blast-radius`, `interrogate`, `technical-writing`, `teach` — use when Matt Pocock does not cover the need. `poteto-mode` / `setup-pstack` only when explicitly useful.

### Tier B — situational

**mattpocock:** `prototype`, `codebase-design`, `improve-codebase-architecture`, `resolving-merge-conflicts`, `wait-what`, `writing-for-agents`, `to-questionnaire`, `wayfinder`, `wizard`

**pstack:** `arena`, `swarm`, `bro`, `unslop`, `recall`, `automate-me`

### Do not use here

- `no-comments` — conflicts with masterprompt comment rules
- `tdd` — unless the user explicitly asks. Human owns app testing.
- poteto **visual-parity** playbook — no Figma/maket baseline. Use `how_to_visualise.md` instead.

Also skip overnight / Graphite-only pstack shipping playbooks for routine frontend work.

## Optional follow-ups (when the user asks)

- `/create-verification-skill` once — project-local drive skill when routes exist
- `/maintain-verification-skill` when that feature map drifts
- `/setup-pstack` again to pin real model slugs instead of `inherit-parent`

## Maintenance

When you discover a recurring workflow that needs a skill path, update **this file in the same change set**.
