# Next steps

Known limits of this preview, not a promise:

- 2026-09-29 — Rental requests return an id and are not stored.
- 2026-09-29 — No card payment and no stock check.
- 2026-09-29 — Catalog prices are weekly USD written in `catalog.ts`, not the live monis.rent feed.
- 2026-09-29 — The room is an illustration, not product photography.
- 2026-09-29 — GitHub repo `Schwibl/workspace-builder` was not reachable, so `desent-bot` is not a collaborator yet.
- 2026-09-29 — No Vercel deployment from this environment. There was no Vercel token.

Optional later:

- Point `POST /api/rent` at a real order service and store the request id.
- Add delivery timing per area once those dates exist.
