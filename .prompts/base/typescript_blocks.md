# TypeScript / React blocks (workspace designer)

Companion to [`masterprompt.md`](./masterprompt.md). Open when adding a React component, `.d.ts` type, API client, or any script under `src/`.

Also apply the `typescript-best-practices` skill for `.ts` / `.tsx` edits.

Exact folder names follow [`documents/tech/folder_structure.md`](../../documents/tech/folder_structure.md).

## Where scripts live

| Area | Path |
|------|------|
| Entrypoint / layout | `src/app/layout.tsx` |
| Route-only pages | `src/app/<segment>/page.tsx` |
| Route handlers | `src/app/api/<name>/route.ts` |
| UI chrome / reusable blocks | `src/blocks/*.tsx` |
| Shared features | `src/features/` — plain `.ts` (providers may be `.tsx`) |
| Ambient / shared types | `src/types/*.d.ts` |

Put a new module where its ownership matches: page/UI → `app/` or `blocks/`; cross-page behaviour → `features/`; the rental HTTP contract → `src/app/api/rent/`.

## `.ts` vs `.tsx`

| Use | When |
|-----|------|
| `.tsx` | File contains JSX (React components, markup helpers) |
| `.ts` | No JSX — catalog, pricing, pure helpers |

## File size

Keep each `.ts` / `.tsx` file under **~300 lines**. If it exceeds that, extract related logic into a sibling file (same folder) rather than growing one god-module.

## React component pattern

UI is React function components. This repo uses **named exports**. Props types are `t_`-prefixed and live in `src/types/*.d.ts`.

```tsx
// Owns the .app-header chrome
export function AppHeader() {
  return (
    <header className="app-header">
      <a className="app-header__brand" href="/">
        monis.rent
      </a>
    </header>
  );
}
```

Rules:

- BEM class names on the root match `src/styles/blocks/<block-name>.scss`
- Persistent shell components mount once from the layout
- Page components unmount with the route change — clean up listeners, timers, observers in `useEffect` return
- Do not call `setState` inside `useEffect` to copy a store. Setup and theme use `useSyncExternalStore`

## Types

- Put type definitions in separate `.d.ts` files
- Prefix type names with `t_` (example: `t_Setup`, `t_CategoryId`)
- Prefer one concern per `.d.ts` file
- `.d.ts` files here are ambient (no import/export). `tsconfig` includes them

## Comments

- Short comments on logical blocks (components, methods, notable sections)
- `TODO:` where follow-up work is expected
- Do not delete comments unless the related code is removed

## HTTP / utilities

- Use the **fetch** API for network calls
- Prefer small local helpers or native APIs
- Do not invent backend fields — stub the client, mark `TODO:`, and add a dated bullet in [`documents/tech/next_steps.md`](../../documents/tech/next_steps.md)

No secrets belong in `NEXT_PUBLIC_*`. The catalog is compiled in. The rental route does not call an outside service.

## Incomplete work

Same gate as masterprompt: stub + `TODO:` + `next_steps.md` bullet in one change set.

## Do / don’t

**Do**

- [ ] Opened this file before new component / API / types work
- [ ] New UI is a React `.tsx` component with BEM classes
- [ ] New types are `t_`-prefixed in a `.d.ts` file
- [ ] Files stay near or under ~300 lines

**Don’t**

- [ ] No second UI library
- [ ] No inventing API fields or response shapes from another product
- [ ] No silent stubs without `TODO:` + next-steps bullet

**Done when:** the checklist passes, and the new module’s home matches the table above (or an updated `folder_structure.md`).
