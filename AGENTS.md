<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Workspace designer

Also read `.cursor/rules/conventions.mdc`, `CONTEXT.md`, and `documentation/tech/agent_flow.md`.

For a new screen, use the grill-with-docs skill (`.cursor/skills/grill-with-docs/SKILL.md`), which delegates to grilling and domain-modeling. Take the recommended answer when the user is not waiting. Write `.prompts/screens/<name>/ux.md` and `ui.md` before layout, grill them, then implement the leaves in the wrapped plan.
