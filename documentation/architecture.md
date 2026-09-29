# Architecture

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

`room-scene.tsx` draws back to front: wall, window, plant, desk, monitors, lamp, chair. Monitors and the lamp render only when a desk exists. The window always renders. Day and night skies are stacked; `room-window.scss` sets night to opacity 0, and `:root[data-theme="dark"]` swaps the opacities.

## Rental request

The route rejects a missing desk or chair, a term outside 1–52, an unknown area, a short name, or a broken email. Success returns `requestId`, the weekly price, the term total, the area name, and the lines. The client does not invent the total it shows after success.

## Theme boot

`layout.tsx` runs a small script before paint. A saved theme wins. Otherwise the system preference is used. The header buttons write the attribute and `localStorage`.
