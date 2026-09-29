# Frontend master prompt (workspace designer)

Use these rules for all frontend work in this project.

Skills and when: [`skill_issues.md`](./skill_issues.md). Visual / palette / UX: [`how_to_visualise.md`](./how_to_visualise.md). Stubs and docs habit: [`how_to_document.md`](./how_to_document.md). Tokens: `src/styles/base/variables.scss`.

Host is **Next.js App Router** at the repo root (`src/app/`). UI library is **React**. The coding test also requires **Tailwind**. Page shells use Tailwind utilities. Block look stays Sass BEM (ADR 0001). Do not add a second component library.

## Open companions when

| File | Open when |
|------|-----------|
| [`how_to_routing.md`](./how_to_routing.md) | Adding or changing a page, route, nav link, or base path |
| [`scss_tokens.md`](./scss_tokens.md) | Adding SCSS, tokens, breakpoints, or vw size variables |
| [`typescript_blocks.md`](./typescript_blocks.md) | Adding a React component, `.d.ts` type, API client, or script under `src/` |

## Pages (summary)

One public website. React renders a persistent header; page content sits in `main`. Routing is Next.js App Router — details in [`how_to_routing.md`](./how_to_routing.md).

UI is **`.tsx` React components** under `src/blocks/` (reusable chrome) and thin `src/app/<segment>/page.tsx` for routes.

Live routes are listed in [`documents/tech/routing_tech.md`](../../documents/tech/routing_tech.md). Do not invent a second router.

## BEM naming

```html
<div class="block-name">
  <div class="block-name__element-name block-name__element-name--modifier-name">...</div>
</div>
```

Treat a nested piece as both block and element when it owns its own elements:

```html
<div class="main-block-name">
  <div class="main-block-name__inner-block-name inner-block-name">
    <div class="inner-block-name__element-name">...</div>
  </div>
</div>
```

### BEM class rules

- Words: single dash (`block-name`)
- Element: double underscore (`block-name__element-name`)
- Modifier: double dash (`block-name__element-name--modifier-name`)
- Modifier class always accompanies the base element/block class
- Only blocks have elements — never `block__element__element`

## SCSS (summary)

Import `src/styles/main.scss` from the root layout. Tailwind enters through `src/app/globals.css` for page shells only. Nesting shape:

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

- Tokens in `:root` (`variables.scss`)
- One block-level declaration per file; name `<block-name>.scss`
- **vw for all new size measurements**; common sizes as variables; media queries may redeclare those variables
- Breakpoints 1024 / 768 / 480; support down to 320px; adapt with styles only (no DOM rebuild by viewport)

Full token / breakpoint rules: [`scss_tokens.md`](./scss_tokens.md).

## TypeScript / React (summary)

Work at the **block** level plus shared helpers (`features/`).

- Keep each `.ts` / `.tsx` file under **~300 lines**; extract when over
- UI chrome and pages: React function components in `.tsx` — see [`typescript_blocks.md`](./typescript_blocks.md)
- Non-UI helpers stay plain `.ts` under `features/`
- Types in separate `.d.ts` files; names prefixed with `t_`
- Comments on logical blocks; `TODO:` where follow-up is expected
- HTTP via the **fetch** API. The rental route is a Route Handler under `src/app/api/`

Do **not** invent a second UI library.

## Incomplete work / stubs

Stub, mock, TODO-only UI, or intentionally incomplete behaviour:

1. Dated bullet in [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md) (what + where)
2. Short `TODO:` in code pointing at the same gap

Same change set as the stub. Habit and trees: [`how_to_document.md`](./how_to_document.md).

## Visual and assets

No Figma/maket baseline. Follow [`how_to_visualise.md`](./how_to_visualise.md). The room is an SVG in `src/blocks/room-scene.tsx`. Do not swap it for product photography unless a leaf says so.

## Build

Paths live in [`documents/tech/folder_structure.md`](../../documents/tech/folder_structure.md) and [`documents/dev/local_server.md`](../../documents/dev/local_server.md). One `package.json` at repo root.
