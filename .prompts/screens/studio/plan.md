<!-- grill-with-docs. Do not re-grill Settled. This leaf is the studio surface. -->

# Wrapped plan — studio

Parent: [`.prompts/road_to_mvp/studio_checkout/00_studio_checkout_unwrap_steps.md`](../../road_to_mvp/studio_checkout/00_studio_checkout_unwrap_steps.md).

Accepted grill: `grill.md`.

## Settled (do not re-grill) — 2026-09-29

- Silhouette and icon never show together for the same slot
- Monitor, lamp, and plant show before a desk. The plus opens that category
- The preview column and the wall window are both large
- Desk and chair have no none radio
- The room drawing is composed from smaller blocks so `room-scene` stays under the line budget. The picture does not change

## Goal

The renter designs the room from the silhouettes.

## Chosen approach

Five slots are always in the room. Empty means a dashed silhouette and a white plus. Chosen means the explicit icon, including optional pieces chosen before a desk. The plus opens that category. The preview and the wall window are both larger.

Rejected: hiding accessories until a desk exists (extra wait), and a plus that does not open the picker (extra hunting).

## Tree

- Language
  - [leaf] Slot, silhouette, icon, optional piece in `CONTEXT.md`
- Preview
  - [leaf] Wider studio column and a taller SVG (`studio-page`, `room-scene.scss`)
  - [leaf] Larger wall window, still day or moon (`room-window`)
- Slots
  - [leaf] Dashed silhouettes and plus buttons for desk, chair, monitor, lamp, plant (`slot-mark`, `room-scene`)
  - [leaf] Explicit icons in those same places, optional icons allowed with no desk
  - [leaf] Plus opens the matching picker category (`studio-page`, `picker`)
- Copy
  - [leaf] Caption and picker hints no longer say an accessory is waiting for a desk
- Structure
  - [leaf] Split the drawing into the window, the silhouettes, and the icons. `room-scene` only composes them

## Done when

Ticket 01 and ticket 02 acceptance criteria pass in the browser.

## Out of scope

Checkout form. vw conversion. Vercel.

## Handoff

Checkout leaf: [`.prompts/screens/checkout/plan.md`](../checkout/plan.md).
