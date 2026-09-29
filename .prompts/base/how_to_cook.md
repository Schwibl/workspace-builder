# How to cook (workspace designer)

Compress the **wrap → unwrap → grill → leaf → implement** loop we use under `.prompts/road_to_mvp/` and `.prompts/screens/`. Coding standards stay in [`masterprompt.md`](./masterprompt.md). Skill routing stays in [`skill_issues.md`](./skill_issues.md). Docs habit stays in [`how_to_document.md`](./how_to_document.md). Direction inventories live in the roadmap files — this file is the **agent work pattern**, not a second MVP table.

## When to open

- Starting or continuing a `road_to_mvp` direction (`00_*_unwrap_steps.md` or a leaf `NN_*.md`)
- Starting a screen under `.prompts/screens/<screen>/`
- User says “unwrap”, “grill”, “cook”, or “same cascade as Blocky”
- Before inventing product/API/UX choices in a plan chat

Skip for one-line fixes the user already specified exactly.

## The cascade (one mental model)

```
wrapped direction plan          →  00_<direction>_unwrap_steps.md
  grill → author leaf plans     →  NN_<step>.md  (no product code)
    grill → implement one leaf  →  code + docs from that leaf
```

A screen that is already a single surface uses this shorter leaf shape (studio and checkout already did):

```
ux.md   shortest path
ui.md   graphical brief
grill.md
plan.md leaves → implement
```

Parent cascade map: [`.prompts/road_to_mvp/00_unwrap_directions.md`](../road_to_mvp/00_unwrap_directions.md).

| Level | File | Agent may write | Agent must not |
|-------|------|-----------------|----------------|
| Wrap / unwrap | `00_*_unwrap_steps.md` | Refine inventory; then **leaf markdown only** | Product code |
| Leaf plan | `NN_*.md` or `screens/<screen>/plan.md` | Settled decisions + implementation steps + docs | Shipping code in the unwrap chat |
| Implement | repo sources | Code + docs listed in the leaf | Re-opening locked MVP / Settled unless user reopens |

Default: **one unwrap or one leaf per chat**. Same chat may continue into implement when the user explicitly says so (e.g. “proceed / implement / test”).

## Grill (always with the human)

Use **grill-with-docs** (grilling + domain-modeling). If the user forgot the tag, still behave as grill-with-docs for roadmap plan work.

### Rules we keep

1. **Human answers** product / API / UX decisions (or says “keep your recommendations”).
2. Agent **does not invent** fields, vendors, or silent defaults that the unwrap deferred to a leaf grill.
3. Ask the **frontier** in rounds: numbered questions + a recommended answer each time; wait before the next round. When the user already said to take the recommended answer and not wait, accept it and continue.
4. Facts (filesystem, contracts, existing routes) are the agent’s job — look them up; don’t ask the human for what is already in the repo.
5. When a term crystallises → update [`CONTEXT.md`](../../CONTEXT.md). Offer an ADR only when hard-to-reverse + surprising + real trade-off ([`docs/agents/domain.md`](../../docs/agents/domain.md)).
6. Do **not** treat “recommendations look good — proceed” as permission to skip writing **Settled** into the leaf plans before implement.

### Good grill hygiene

- Lock upstream MVP table rows; only grill what the unwrap left open.
- Put accepted answers into each leaf’s **Settled (do not re-grill)** section with a date.
- Prefer a short Round 1 that unblocks the leaf inventory.

## Leaf plan shape

1. HTML comment: grill-with-docs; do not re-grill Settled; scope of this leaf
2. Title, parent unwrap link, Goal, Prerequisites, Context sources
3. **Settled** — locked choices (grill + MVP)
4. **Implementation steps** — numbered, each with **Done when**
5. **Docs to write** / **Out of scope** / **Handoff** (next leaf)

UI leaves cite BEM / masterprompt / visualise.

## Implement

1. Read the leaf + its Settled block; do not re-grill unless the user reopens.
2. Apply companions: masterprompt / visualise / document / folder as their triggers fire ([`AGENTS.md`](../../AGENTS.md)).
3. Ship docs in the **same change set** as the code (`how_to_document.md`).
4. Human owns app testing unless they ask the agent to test; agents still typecheck / fix lint. When the user asks to test, prove it in the browser.
5. Mark the unwrap **Done when** only after all listed leaf **plan** files exist; mark a leaf done only when its Done-when + Docs sections are satisfied.

## Anti-patterns

- Implementing from an unwrap file before leaves exist
- Auto-resolving ambiguous product choices to keep moving
- Silent drift from `CONTEXT.md`
- Using `/tdd` unless the user asks (see `skill_issues.md`)
- Dropping comments on logical blocks
- Redesigning the studio (silhouettes, plus, themes, window) inside an unrelated leaf

## Pointers (do not duplicate)

| Need | Where |
|------|--------|
| Locked MVP + direction order | [`00_unwrap_directions.md`](../road_to_mvp/00_unwrap_directions.md) |
| Which Matt/pstack skill | [`skill_issues.md`](./skill_issues.md) |
| FE code rules | [`masterprompt.md`](./masterprompt.md) |
| Visual / BEM | [`how_to_visualise.md`](./how_to_visualise.md) |
| Docs / userflows / next_steps | [`how_to_document.md`](./how_to_document.md) |
| Branch / commit / PR habit | [`how_to_git.md`](./how_to_git.md) |
| Glossary / ADR habit | [`docs/agents/domain.md`](../../docs/agents/domain.md) |
| Local `.scratch/` tickets | [`docs/agents/issue-tracker.md`](../../docs/agents/issue-tracker.md) |
