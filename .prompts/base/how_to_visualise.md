# How to visualise

Tokens live in `src/styles/base/variables.scss` on `:root`. The white theme is warm paper (`--color-bg: #f4efe6`), not a blank sheet. Dark overrides the same names under `:root[data-theme="dark"]`.

Do not introduce a second palette in a component. Scene paints (`--scene-wood`, `--scene-sky-top`, `--scene-moon`, and the rest) are the only colors inside the room SVG.

The desk window is not a separate theme. White theme shows the day sky and sun. Dark theme fades that group out and shows the moon and stars. Both skies are in the SVG so the switch is a CSS opacity change.

Type: Fraunces for the wordmark and prices, Outfit for everything else. One accent, a Bali teal. Danger red is only for a failed rental.
