# Routing (workspace designer)

Companion to [`masterprompt.md`](./masterprompt.md). Open when adding or changing a page, route, nav link, or base path.

Host is **Next.js App Router** in `src/app/`. Fill [`documents/tech/routing_tech.md`](../../documents/tech/routing_tech.md) in the same change set when the live table changes. Do not add a third-party router.

## Model

- Persistent header (`.app-header`) in the root layout
- Page content in `main`
- Same-origin paths; shareable URLs; Next must not 404 on deep links
- Unknown paths → `not-found` with a link home

## Locked public routes

| Path | Role |
|------|------|
| `/` | Studio. The room, the category picker, and the setup bar |
| `/checkout` | Rental request. Same room, term, area, name, email |
| `POST /api/rent` | Validates the request and returns an id. Not a payment |
| (no match) | Not found |

`/?category=` opens that picker tab. Checkout links back with the same query.

## How to add a page

1. Thin `src/app/<segment>/page.tsx` that composes BEM blocks
2. Matching `src/styles/blocks/<block-name>.scss` when the page owns chrome
3. Nav link only if the page is in the locked table
4. Update [`documents/tech/routing_tech.md`](../../documents/tech/routing_tech.md)

Prefer **standalone BEM blocks** for reusable chrome rather than nesting everything as page elements.

## Do / don’t

**Do**

- [ ] Opened this file before adding a route or page
- [ ] Used App Router file routes only
- [ ] Updated `routing_tech.md` when the live route table changes

**Don’t**

- [ ] No separate HTML file per page
- [ ] No hash-only routing
- [ ] No second router library

**Done when:** the checklist passes, and an agent can add the next page from this file plus `routing_tech.md` without inventing a second router.
