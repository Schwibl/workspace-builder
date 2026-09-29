# SCSS tokens and sizing (workspace designer)

Companion to [`masterprompt.md`](./masterprompt.md). Open when adding SCSS, design tokens, breakpoints, or vw size variables.

Palette roles and UX constraints live in [`how_to_visualise.md`](./how_to_visualise.md). Hex values live in `src/styles/base/variables.scss`. This file is the **measurement and file** rules.

Page shells may use Tailwind utilities for grid, max width, and page padding (ADR 0001). Do not set the same property on the same element in both Tailwind and Sass.

## File layout

| Role | Path |
|------|------|
| Token `:root` | `src/styles/base/variables.scss` |
| Reset / base | `src/styles/base/normalise.scss` |
| Style entry (imports) | `src/styles/main.scss` |
| One block per file | `src/styles/blocks/<block-name>.scss` |
| Tailwind entry | `src/app/globals.css` |

Import `main.scss` from the root layout. Do not switch BEM blocks to CSS Modules.

Rules:

- One block-level style declaration per file; filename matches the block: `<block-name>.scss`
- Import new block files from `main.scss` in the same change set
- Prefer one purpose per section / block

## Nesting shape

```scss
.block-name {
  // block styles

  &__element-name {
    // element styles

    &--modifier-name {
      // element modifier styles
    }
  }

  &--modifier-name {
    // block modifier styles

    .block-name__element-name {
      // element under modified block
    }
  }
}
```

## Tokens (`:root`)

- Put shared design tokens on `:root` in `variables.scss`
- Colors stay as hex (or token references); do not invent a second palette — extend `how_to_visualise.md` when adding a color role
- Dark theme overrides the same names under `:root[data-theme="dark"]`
- Re-use common **sizes** by saving them as CSS variables

## Measurements — vw first

Copied from Blocky / DNBH. Use it for **new** measurements.

- Use **vw** for all size measurements (font sizes, spacing, radii used as layout size, control padding bases)
- Common sizes live as variables in `variables.scss`
- Inside `@media` queries you may **redeclare** those same variables with recalculated vw values
- Rare exceptions (document when introduced):
  - `1px` hairline borders
  - `max(<rem>, <vw>)` floors so narrow phones stay readable / tappable

The studio that already shipped still uses rem and px. That gap is a dated bullet in [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md). Do not convert it in a drive-by edit; a leaf has to say so, because a unit swap changes the preview.

## Adaptive breakpoints

Write adaptive styles for:

| Max width | Intent |
|-----------|--------|
| `1024px` | Large tablet / small desktop |
| `768px` | Tablet |
| `480px` | Phone |

Also support down to **320px** wide screens.

Rules:

- Put `@media` for a block in that block’s `.scss` file
- Adapt with styles only — do not rebuild DOM based on screen size
- Recalculate shared size variables in `:root` media queries when many blocks need the same scale change

## Visual companion

Before claiming UI done, run the checklist in [`how_to_visualise.md`](./how_to_visualise.md). Coding structure alone is not visual done.
