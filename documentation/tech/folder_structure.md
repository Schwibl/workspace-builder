# Folder structure

```
workspace-builder/
  README.md
  CONTEXT.md                 glossary, no implementation
  docs/adr/                  hard decisions
  documentation/             how to run and how it is shaped
  .prompts/                  screen UX, UI, grill, wrapped plans
  .cursor/
    rules/                   conventions for the next agent
    skills/                  grill-with-docs, grilling, domain-modeling
  src/
    app/                     routes, layout, POST /api/rent
    blocks/                  one visual block per file
    features/                catalog, setup, theme
    styles/
      base/                  variables, normalise
      blocks/                one BEM block per file
      main.scss
    types/                   *.d.ts, names start with t_
```

Sass is imported once, from `src/styles/main.scss`. Tailwind enters through `src/app/globals.css`.
