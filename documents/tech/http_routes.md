# HTTP routes

| Method | Path | Result |
|--------|------|--------|
| `POST` | `/api/rent` | `201` confirmation, or `400` `{ error, fields }` |

The route rejects a missing desk or chair, a term outside 1–52, an unknown area, a short name, or a broken email. Success returns `requestId` (`MR-` plus hex), the weekly price, the term total, the area name, and the lines. Nothing is charged and nothing is stored.

There is no other `/api` route.
