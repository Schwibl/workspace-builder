# monis.rent workspace designer

A freelancer lands in Bali and needs a desk by next week. This app lets them build that room on one screen — desk, chair, monitor, lamp, plant — see it update, and request the rental.

The Desent challenge asks for Next.js, Tailwind, and a public Vercel URL. This repo is the designer. Deployment and the `desent-bot` collaborator need a GitHub login this environment does not have; see [Known limits](#known-limits).

## Run

```bash
npm install
npm run dev
```

Open http://127.0.0.1:4317

```bash
npm run lint
npm run build
npm start
```

## Approach

The room is the interface. Categories are a single choice each, so the drawing never has to resolve two desks. The window above the desk is daylight in the white theme and a moon in the dark theme. Checkout is the only second screen: term, Bali area, name, email. Rent places a request. It does not charge a card.

Three ways to build the studio were on the table:

1. A wizard, one category per step. Few decisions per page, and the room disappears between steps.
2. A catalog grid with a preview elsewhere. Familiar, and it turns the task back into scrolling products.
3. One studio, the room always visible, one category open. Fewest actions, and the preview is the page.

We took the third. The same kind of choice, with the rejected options, is in `docs/adr/` and `.prompts/screens/*/grill.md`.

## Tech

- Next.js (App Router) and React
- Tailwind CSS for page layout
- Sass, BEM, and `:root` tokens for blocks and the illustrated room
- A browser `localStorage` setup. No database
- `POST /api/rent` validates the request and returns an id

Types sit in `src/types/*.d.ts` and use the `t_` prefix. Screen briefs live in `.prompts/screens/`.

## Docs

- [How the app is built](documentation/architecture.md)
- [Folder structure](documentation/tech/folder_structure.md)
- [Local server](documentation/dev/local_server.md)
- [Agent flow](documentation/tech/agent_flow.md)
- [What we would do next](documentation/tech/next_steps.md)
- [Language](CONTEXT.md)

## What we would improve with more time

- A real order API and a payment step, instead of an in-memory request id
- Stock and delivery dates per area
- More chairs and a second plant, still as single choices
- Deployed preview on Vercel, and `desent-bot` as a read-only collaborator

## Known limits

`Schwibl/workspace-builder`, `Schwibl/blocky`, and `Schwibl/dnbh` all returned GitHub 404 without credentials, so this tree was scaffolded here and the agent flow was rebuilt from the public Schwibl portfolio repos (`ai_chat_demo` and the same documentation shape) plus Matt Pocock's grill-with-docs skills. There is no Vercel token in this environment, so there is no public URL yet.

To add the reviewer when the GitHub repo is reachable: Settings → Collaborators → `desent-bot` → Read.
