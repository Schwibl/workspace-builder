# Prompts

Agent workflow copied from Blocky and retargeted the way DNBH retargeted Blocky. Coding standards live in [`.prompts/base/`](./base/). `AGENTS.md` is the short trigger list.

## For each new screen, in order

1. `.prompts/screens/<screen>/ux.md` — shortest path, fewest actions.
2. `.prompts/screens/<screen>/ui.md` — graphically explicit, interface-wise short.
3. Grill those two files with grill-with-docs. Record the rounds in `grill.md`. Take the recommended answer when the user said not to wait.
4. Unwrap the leaves in `plan.md` and implement only those.

Screens already cooked: `studio`, then `checkout`.

New multi-step work uses [`.prompts/road_to_mvp/00_unwrap_directions.md`](./road_to_mvp/00_unwrap_directions.md) and [`base/how_to_cook.md`](./base/how_to_cook.md).
