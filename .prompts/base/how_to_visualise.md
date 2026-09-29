# How to visualise (workspace designer)

Mandatory for every styles, layout, BEM block, or visual polish change. Hex values live in `src/styles/base/variables.scss`; this file explains **how** to use them.

Coding structure (BEM, SCSS nesting, vw sizing) stays in [`masterprompt.md`](./masterprompt.md).

## When to open

- Touching SCSS, the page shell, spacing, color, type, focus/hover, empty states, or the room SVG
- Before claiming any UI work done — run the checklist at the bottom

Skip only for pure logic/TS with no visual surface.

## No designer mode

There is no Figma and no maket. Do **not**:

- Invent maket/parity workflows or call `/poteto-mode` visual-parity against a missing baseline
- Invent a second palette or “temporary brand colors”
- Copy Blocky’s dark/amber monospace tool aesthetic, or DNBH’s Hub teal/orange marketing site, onto this studio

Tokens + this file win. If something is missing, extend `variables.scss` and document the new token here in the same change set.

## Palette

White theme is warm paper, not a blank `#fff` sheet. Dark theme overrides the same names under `:root[data-theme="dark"]`. One accent, a Bali teal. Danger is only for a failed rental request.

| Role | CSS variable | Light | Dark |
|------|--------------|-------|------|
| Page paper | `--color-bg` | `#f4efe6` | `#10141c` |
| Raised surface | `--color-surface` | `#fffdf8` | `#1a2130` |
| Text | `--color-text` | `#1c1915` | `#f4efe6` |
| Muted | `--color-muted` | `#5e574e` | `#b7c0ce` |
| Accent | `--color-accent` | `#0e6b62` | `#7ec8c0` |
| Text on accent | `--color-accent-ink` | `#f4fffc` | `#10211f` |
| Border | `--color-border` | `#e3d7c6` | `#2c3648` |
| Danger | `--color-danger` | `#9c341f` | `#ffb4a4` |
| Unchecked option hover | `--color-card-hover` | `#ddd2c0` | `#2c2430` |
| Unchecked option edge | `--color-card-hover-border` | `#6f6254` | `#e7d0d4` |

Scene paints (`--scene-wood`, `--scene-sky-top`, `--scene-moon`, and the rest) are the only colors inside the room SVG. Do not introduce a second palette in a component. The option hover tokens are only for an unchecked radio row. The checked row stays `--color-accent-soft`.

## Typography

Fraunces (`--font-fraunces`) for the wordmark and prices. Outfit (`--font-outfit`) for everything else. Do not add a third family.

## Window, silhouettes, icons

The window is part of the room, not a rented piece and not a separate theme control.

- White theme: daylight (sun, clouds). Dark theme: moon and stars.
- Both skies are in the SVG. The switch is a CSS opacity change on `.room-window__sky-day` and `.room-window__sky-night`.
- An empty slot is a dashed silhouette of that piece, with a teal circle and a bold white plus.
- A chosen piece replaces the silhouette with an explicit icon. Never show both for the same slot.
- Monitor, lamp, and plant may be icons before a desk is chosen. The other optional slots stay open.
- The preview pane and the wall window stay the large sizes already shipped.

## Checklist

**Do**

- [ ] Opened this file before claiming UI done
- [ ] Used tokens from `variables.scss` only
- [ ] White theme still shows daylight; dark theme still shows the moon
- [ ] Empty slots are silhouettes with a plus; chosen slots are icons
- [ ] Category labels Desk, Chair, Monitor, Lamp, and Plant stay fully readable

**Don’t**

- [ ] No second sky control
- [ ] No product photography in place of the SVG
- [ ] No Hub or Blocky palette pasted over this room

**Done when:** the checklist passes on desktop and on a narrow viewport.
