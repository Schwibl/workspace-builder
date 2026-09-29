<!-- Agent: use grill-with-docs. Do not implement product code from this unwrap. Leaves are the screen plans and the tickets under .scratch/workspace-rebuild/. -->

# Direction — studio and checkout (unwrap)

Parent: [`../00_unwrap_directions.md`](../00_unwrap_directions.md).

## Goal

The renter designs one Bali workspace in the room, then places a rental request. This direction is the Desent studio, not a new product.

## Settled (do not re-grill) — 2026-09-29

The rebuild brief locked these. Earlier studio grill Q1–Q5 stay accepted.

- Next.js, Tailwind on page shells, Sass BEM for blocks
- White and dark themes. The window is daylight in white and the moon in dark. No second sky control
- Preview pane and wall window stay large
- Chosen pieces are explicit icons. Empty slots are silhouettes with a teal circle and a bold white plus
- Monitor, lamp, and plant can be chosen and shown before a desk. Desk and chair are required only to rent
- Screen order for a surface: `ux.md`, then `ui.md`, then the wrapped plan, then implement
- A rental request is not a payment

## Leaf inventory

| # | Plan | What it unlocks |
|---|------|-----------------|
| 1 | [`.prompts/screens/studio/plan.md`](../../screens/studio/plan.md) | The room, the plus, the icons |
| 2 | [`.prompts/screens/checkout/plan.md`](../../screens/checkout/plan.md) | The rental request |

Specs and tracer tickets: [`.scratch/workspace-rebuild/spec.md`](../../../.scratch/workspace-rebuild/spec.md).

## Out of scope

- Inviting `desent-bot`
- Converting shipped rem/px measurements to vw
- A public Vercel URL (no token in this environment)

## Done when

Both screen plans exist, the spec and tickets exist, and the running app matches them.
