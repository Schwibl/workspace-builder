<!-- Agent: use grill-with-docs (grilling + domain-modeling). Do not implement product code from unwrap_* files; only author/refine child plans. If the user forgot to tag the skill, still follow grill-with-docs before writing or changing plans under this folder. -->

# Road to MVP — unwrap directions

Work pattern: [`../base/how_to_cook.md`](../base/how_to_cook.md).

Product: [`documents/product_desc/first-text.md`](../../documents/product_desc/first-text.md).  
Language: [`CONTEXT.md`](../../CONTEXT.md).  
Foundation: [`.prompts/set_up_plans/00_roadmap.md`](../set_up_plans/00_roadmap.md) (step 0 done).

## Agent skill (mandatory)

Every plan under `.prompts/road_to_mvp/` is written for **grill-with-docs** (grilling + domain-modeling):

1. Settle open decisions against [`CONTEXT.md`](../../CONTEXT.md).
2. Update the glossary when a term crystallises. Offer an ADR only when the choice is hard to reverse, surprising, and a real trade-off.
3. Do not ship product code from an unwrap file. Unwrap files only create or refine child plans.
4. One leaf per chat, unless the user says to implement in the same chat.

## Shipped MVP (do not re-grill)

Grilled and implemented before this file existed. Leaves are the screen plans, not a second copy.

| Surface | Leaves | Status |
|---------|--------|--------|
| Studio | [`.prompts/screens/studio/`](../screens/studio/) | Shipped. Silhouettes, plus, optional pieces before a desk, large window, white/dark. |
| Checkout | [`.prompts/screens/checkout/`](../screens/checkout/) | Shipped. Rental request, not a payment. |

Locked stack: Next.js, Tailwind page shells, Sass BEM blocks (ADR 0001). SVG room (ADR 0002). Request is not a charge (ADR 0003). Silhouette or icon, never both (ADR 0004).

## This rebuild

[`.prompts/road_to_mvp/studio_checkout/00_studio_checkout_unwrap_steps.md`](./studio_checkout/00_studio_checkout_unwrap_steps.md) is the direction the 2026-09-29 brief asked to run end to end. Spec and tickets live in `.scratch/workspace-rebuild/`.

A later direction gets `00_<direction>_unwrap_steps.md`, then leaf plans, then implement. Do not import Blocky or DNBH product directions (canvas, Booqable, CMS, Consultant).
