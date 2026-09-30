# monis.rent workspace designer

A freelancer lands in Bali and needs a desk by next week. This app lets them build that room on one screen — desk, chair, monitor, lamp, plant — see it update, and request the rental.

**Live:** [https://workspace-builder-opal.vercel.app](https://workspace-builder-opal.vercel.app)  
**Source:** [https://github.com/Schwibl/workspace-builder](https://github.com/Schwibl/workspace-builder)

The Desent challenge asks for Next.js, Tailwind, and a public Vercel URL. This repo is the designer; production runs on Vercel under the link above.

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


## Tech

- Next.js (App Router) and React
- Tailwind CSS for page layout
- Sass, BEM, and `:root` tokens for blocks and the illustrated room
- A browser `localStorage` setup. No database
- `POST /api/rent` validates the request and returns an id

Types sit in `src/types/*.d.ts` and use the `t_` prefix. Screen briefs live in `.prompts/screens/`.

## Docs

- [How the room is built](documents/tech/web_tech_ui.md)
- [Folder structure](documents/tech/folder_structure.md)
- [Local server](documents/dev/local_server.md)
- [Agent pointers](AGENTS.md)
- [What we would do next](documents/tech/next_steps.md)
- [Language](CONTEXT.md)

