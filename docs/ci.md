# CI

Workflow: `.github/workflows/pr-checks.yml`. Runs on every pull request, on push to `main`, and by hand (workflow_dispatch). Node comes from `.nvmrc` (24), with the npm cache.

| Job (required check on `main`) | Steps |
| --- | --- |
| `Install, typecheck, build` | `npm ci`, `npm run lint`, `npm run typecheck` (`next typegen && tsc --noEmit`), `npm run build` |
| `Playwright smoke` | `npm ci`, Chromium install, `npm run build`, `npm run e2e` (starts `next start` on :4317, runs `e2e/smoke.spec.ts`) |

- No env vars are needed: the app has no secrets and no database, so the build uses no placeholders.
- No unit tests exist yet; add an `npm test` step when the first one lands.
- The job names are branch-protection keys. Renaming a job means updating protection on `main` too.
- Deploys are not done by CI: Vercel's Git integration builds production from `main` and a preview for every PR.

Run locally: `npm run lint && npm run typecheck && npm run build && npm run e2e` (first time: `npx playwright install chromium`).
