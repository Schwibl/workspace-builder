# Wrapped plan — studio

Accepted grill: `grill.md`. Only the leaves are implemented.

## Chosen approach

One screen, scene always visible, one single-select category at a time, theme on the window. Rejected: a step wizard (more taps, room disappears) and a photo collage (theme cannot recolor it, and we would be hotlinking someone else's catalog).

## Tree

- Shell
  - [leaf] Header with White / Dark, writing `data-theme` and `localStorage` (`app-header`, `theme-context`)
  - [leaf] Two-column studio grid, room first (`studio-page`)
- Scene
  - [leaf] Wall, floor, rug (`room-scene` backdrop)
  - [leaf] Window with day sky and moon sky, CSS crossfade (`room-window`)
  - [leaf] Desk, chair, monitor, lamp, plant from the current setup (`scene-*`)
- Choice
  - [leaf] Category tabs and radio cards (`picker`)
  - [leaf] Setup in memory, sanitized, written to `localStorage` (`setup-context`, `setup-model`)
- Bar
  - [leaf] Weekly total, Start over, Review rental (`setup-bar`)

## Unwrap

Each leaf is a block under `src/blocks/` or a feature under `src/features/`. Styles for a block stay in `src/styles/blocks/<block-name>.scss`. The page only composes them.
