# Next steps

Known limits of this preview, not a promise:

- 2026-09-29 — Rental requests return an id and are not stored. `TODO:` in `src/app/api/rent/route.ts`.
- 2026-09-29 — No card payment and no stock check.
- 2026-09-29 — Catalog prices are weekly USD written in `catalog.ts`, not the live monis.rent feed.
- 2026-09-29 — The room is an illustration, not product photography.
- 2026-09-29 — No Vercel deployment from this environment. There was no Vercel token.
- 2026-09-29 — `scss_tokens.md` says new measurements use vw. The shipped studio still uses rem and px. Not converted, because a unit swap would change the preview.

Optional later:

- Point `POST /api/rent` at a real order service and store the request id.
- Add delivery timing per area once those dates exist.
