# Folder structure

```
/
  README.md
  CONTEXT.md                 glossary
  AGENTS.md                  thin pointers
  docs/adr/                  hard decisions
  docs/agents/               issue tracker, triage, domain habit
  documents/                 product, tech, dev, userflow
  .prompts/                  base prompts, screen plans, roadmaps
  .scratch/                  specs and tickets (Matt Pocock)
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

Sass is imported once, from `src/styles/main.scss`. Tailwind enters through `src/app/globals.css` for page shells only.

Skills are not in this tree. They install globally at `~/.agents/skills/`. `.cursor` and `.agents` are gitignored, same as Blocky and DNBH.
