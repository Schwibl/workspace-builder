# Tailwind for the page, Sass BEM for the blocks

The test locks the app to Next.js and Tailwind. The Schwibl portfolio repos style every block in Sass with BEM and `:root` tokens. Using only Tailwind would throw out that convention. Using only Sass would fail the test.

The page shells use Tailwind for the responsive grid, spacing, and max width. Each visual block still has one Sass file, `src/styles/blocks/<block-name>.scss`, and the room colors live only in `variables.scss`. The two layers do not set the same properties on the same element.
