# Shell and room

```
layout (theme + setup providers, header)
  ├── /                 studio-page
  │     ├── room-scene  SVG room, window follows data-theme
  │     ├── picker      one category, radio cards
  │     └── setup-bar   weekly total, review
  └── /checkout         checkout-page
        ├── room-scene
        └── POST /api/rent
```

## State

| Concern | Where |
|---------|--------|
| Setup | `SetupProvider`, key `monis-setup` |
| Theme | `<html data-theme>`, key `monis-theme` |
| Catalog | `src/features/catalog.ts` |
| Prices | `lineItems` / `weeklyTotal` in `setup-model.ts` |
| Rental request | `POST /api/rent`, not stored |

The studio and the checkout read the same provider, so the room on the review screen is the room they just edited.

## Room

`room-scene.tsx` composes the drawing back to front: wall, a large window, plant, desk, monitors, lamp, chair. The window, silhouettes, and icons live in their own blocks. Each of those five slots is either a dashed silhouette with a plus or the explicit icon. A monitor, lamp, or plant can be an icon while the desk is still empty. Day and night skies are stacked; `room-window.scss` sets night to opacity 0, and `:root[data-theme="dark"]` swaps the opacities.

## Theme boot

`layout.tsx` runs a small script before paint. A saved theme wins. Otherwise the system preference is used. The header buttons write the attribute and `localStorage`.

## Picker

Five labels share the picker width: Desk, Chair, Monitor, Lamp, Plant. On a narrow column they wrap onto a second line. They do not scroll off the edge.
