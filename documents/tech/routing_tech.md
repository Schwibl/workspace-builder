# Routing

Next.js App Router. No second router.

| Path | File | Role |
|------|------|------|
| `/` | `src/app/page.tsx` | Studio |
| `/checkout` | `src/app/checkout/page.tsx` | Rental request |
| `POST /api/rent` | `src/app/api/rent/route.ts` | Validate and return an id |

`/?category=desk|chair|monitor|lamp|plant` opens that picker tab. Unknown paths use `src/app/not-found.tsx`.

How to add a page: [`.prompts/base/how_to_routing.md`](../../.prompts/base/how_to_routing.md).
