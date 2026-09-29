# How to document (workspace designer)

Mandatory before claiming a feature done, when adding a subsystem, or when leaving incomplete work. This file is the *habit*: where to write, when, and what counts as done.

Product preview lives in [`documents/product_desc/first-text.md`](../../documents/product_desc/first-text.md).

## When to open

- Before you claim a feature, page, block, or API seam done
- When you add a subsystem that did not exist in the tree
- When you ship incomplete behaviour, a stub, or a `TODO:`

Skip only when the change has no new user-facing behaviour and no new tech surface. Then record `N/A — no new user/tech surface` in the change summary.

## Userflows

**Userflows** → [`documents/userflow/`](../../documents/userflow/)

Step-by-step behaviour for the studio and the rental request. Start or update a doc in the matching subfolder when you change how a renter moves through the app:

| Subfolder | When to update |
|-----------|----------------|
| `studio/` | Room, silhouettes, plus, picker, theme |
| `checkout/` | Term, area, name, email, `POST /api/rent` |

Non-blocking for a one-line fix, but add or refresh the relevant userflow in the same change set when the behaviour is user-visible.

## Three trees

**Product** → [`documents/product_desc/`](../../documents/product_desc/)

User-facing behaviour, flows, and copy intent.

**Tech** → [`documents/tech/`](../../documents/tech/)

Folder layout, routing, room, rental API. Facts an agent needs to place the next file without guessing.

**Dev** → [`documents/dev/`](../../documents/dev/)

Local tooling: how to run the stack, env, ports. Not product behaviour and not module placement.

## Naming

- Files: `snake_case` or `kebab-case`, suffix `.md`, one concern per file
- Prefer updating an existing stub over creating a parallel file for the same concern
- New file only when no stub covers that concern

Tech docs:

| File | Concern |
|------|---------|
| [`folder_structure.md`](../../documents/tech/folder_structure.md) | Where modules and files live |
| [`routing_tech.md`](../../documents/tech/routing_tech.md) | In-app routing, route table, how to add a page |
| [`web_tech_ui.md`](../../documents/tech/web_tech_ui.md) | Shell, room, theme |
| [`http_routes.md`](../../documents/tech/http_routes.md) | Authoritative `/api` list |
| [`next_steps.md`](../../documents/tech/next_steps.md) | Dated gaps for incomplete work |
| [`../userflow/README.md`](../../documents/userflow/README.md) | Userflow docs layout |

Dev docs:

| File | Concern |
|------|---------|
| [`local_server.md`](../../documents/dev/local_server.md) | How to run the local stack |

## Same change set

Docs land with the code that creates the subsystem. Do not leave a new block, route, or API client with no matching product or tech note.

If you add a file under `src/` and you are unsure which folder owns it, open [`folder_structure.md`](../../documents/tech/folder_structure.md) first. Put the new path in it in this change set.

## Incomplete work

If behaviour ships unfinished, add a dated bullet to [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md). One bullet per gap. Include the date, what is missing, and the stub or `TODO:` location.

Do not invent backend-ask files. If an external API is missing, stub the client, mark `TODO:`, and add the next-steps bullet.

## Done gate

Do not claim done until one of these is true:

1. The matching product, tech, and/or dev section exists in this change set.
2. The change summary includes the line `N/A — no new user/tech surface`.

Incomplete behaviour also needs the dated next-steps bullet.

## Skills

- Human-facing docs, RFCs, PR text: `/technical-writing`
- `AGENTS.md`, skills, agent prompts: `writing-for-agents`

## Do / don’t (claim the feature done only if all pass)

**Do**

- [ ] Opened this file before claiming done
- [ ] Product change updated `documents/product_desc/` or was marked N/A
- [ ] Tech change updated a `documents/tech/` stub or was marked N/A
- [ ] Dev change updated `documents/dev/` or was marked N/A
- [ ] Docs shipped in the same change set as the code
- [ ] Incomplete work has a dated bullet in `next_steps.md`

**Don’t**

- [ ] No second file for a concern that already has a stub
- [ ] No claiming done on a stub with no next-steps bullet
- [ ] No docs copied from another product (Blocky canvas, DNBH bikes)

**Done when:** the checklist passes, and an agent can find the new behaviour in product, tech, or dev docs without asking where it lives.
