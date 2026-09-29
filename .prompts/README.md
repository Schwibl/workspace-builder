# Screen prompts

This is the design trail for the workspace designer. Portfolio repos such as `ai_chat_demo` keep `.prompts/` local (gitignored) and point Sass tokens at `.prompts/base/how_to_visualise.md`. This submission commits the folder so a reviewer can see why the screens look the way they do.

`blocky` and `dnbh` were not readable from this environment (GitHub returned 404 without credentials). The flow below follows those public portfolio conventions plus the grill-with-docs skills vendored in `.cursor/skills/`.

## For each screen, in order

1. `.prompts/screens/<screen>/ux.md` — shortest path, fewest actions.
2. `.prompts/screens/<screen>/ui.md` — graphically explicit, interface-wise short.
3. Grill those two files. Record the rounds in `grill.md`. Recommended answers are accepted (this run does not wait).
4. Unwrap the leaves in `plan.md` and implement only those.

Screens, in order: `studio`, then `checkout`.
