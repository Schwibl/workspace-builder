# Wrapped plan — studio

Accepted grill: `grill.md`.

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
