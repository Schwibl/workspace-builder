# Workspace designer

**Status:** ready-for-agent

## Problem Statement

A freelancer who just landed in Bali needs a desk, a chair, and a few extras by next week. A product catalog makes them scroll. They want to see the room change as they choose, then ask monis.rent to deliver it.

## Solution

One studio. The room is the control. Empty places are silhouettes with a plus. A choice becomes an explicit icon, including a monitor, lamp, or plant chosen before a desk. White theme shows daylight in the window. Dark theme shows the moon. Review leads to a rental request: weeks, a Bali area, name, and email. Nothing is charged.

## User Stories

1. As a renter, I want to see the room as soon as I open the app, so that I know I am designing a workspace and not browsing a list.
2. As a renter, I want every unfilled place drawn as a silhouette, so that I can see what is still missing.
3. As a renter, I want a circle with a bold white plus on each empty silhouette, so that the empty place is obviously something I can add.
4. As a renter, I want the plus to open that category, so that I do not hunt for the matching tab.
5. As a renter, I want one desk choice, so that the room never has to show two tables.
6. As a renter, I want at least two desks, so that a compact room and a wider room are both possible.
7. As a renter, I want the chosen desk drawn as an explicit icon at that desk's width, so that the preview matches the rental.
8. As a renter, I want one chair choice, so that the room has one seat.
9. As a renter, I want at least two chairs, so that I can pick a tall mesh chair or a shorter task chair.
10. As a renter, I want the chosen chair drawn in front of the desk, so that the setup reads as a place to sit.
11. As a renter, I want to add a monitor, so that the workspace can include a screen.
12. As a renter, I want more than one monitor layout, so that a single display, an ultrawide, or two displays are distinct.
13. As a renter, I want to add a lamp, so that the desk has a light for late work.
14. As a renter, I want to add a plant, so that the room is not only furniture.
15. As a renter, I want to choose a monitor, lamp, or plant before I choose a desk, so that I am not blocked by a mandatory piece.
16. As a renter, I want the other optional pieces to stay choosable after I pick one of them, so that one extra does not lock the rest.
17. As a renter, I want an optional "none" to return that slot to a silhouette, so that I can take an extra back out.
18. As a renter, I want the desk and the chair to have no "none" row, so that empty means the silhouette and Start over is how I clear them.
19. As a renter, I want the preview to update as soon as I pick a radio, so that I trust the drawing.
20. As a renter, I want the preview to be the large pane, so that the room is what I look at first.
21. As a renter, I want a wide window on the wall, so that the room feels like a room and not a furniture sticker.
22. As a renter, I want daylight in the window on the white theme, so that the light theme is a daytime room.
23. As a renter, I want the moon in the window on the dark theme, so that the dark theme is a night room.
24. As a renter, I want one control for the theme, so that I do not set the sky separately from the page.
25. As a renter, I want the weekly total under the room, so that I see the price while I design.
26. As a renter, I want to review the rental even before the room is complete, so that I can see what is still required.
27. As a renter, I want Start over to clear every slot back to a silhouette, so that I can begin again.
28. As a renter, I want the same room on the review screen, so that I am confirming the setup I just drew.
29. As a renter, I want the form hidden until I have a desk and a chair, so that I cannot send an incomplete rental.
30. As a renter, I want a direct link back to the missing desk or chair, so that fixing the room is one tap.
31. As a renter, I want to set the number of weeks, so that the term matches my stay.
32. As a renter, I want a Bali area, so that delivery has a place.
33. As a renter, I want to give my name and email, so that monis.rent can reach me.
34. As a renter, I want Rent to return a request id, so that I have a reference.
35. As a renter, I want the confirmation to say nothing was charged, so that I do not think I paid.
36. As a renter, I want a field error to stay on the form, so that I can correct it and try again.
37. As a renter, I want Design another setup to clear the room and return to the studio, so that a second design does not inherit the first.
38. As a renter, I want the category names Desk, Chair, Monitor, Lamp, and Plant fully readable, so that Plant is not cut off.
39. As a renter on a phone, I want the same slots and the same themes, so that the narrow layout is the same product.
40. As a renter, I want a saved setup to come back when I reload, so that a refresh does not wipe the room.

## Implementation Decisions

- One studio route and one checkout route. The room component is shared.
- Each slot is single-select. Optional slots include none. Desk and chair do not.
- The preview is an SVG. Both skies are drawn. The theme swaps them with opacity.
- Empty and chosen never render together for the same slot. Optional icons use the wide-desk anchors when no desk is chosen.
- The plus is a button on the silhouette and opens that category.
- Page shells use Tailwind. Block look is Sass BEM. Domain types use the `t_` prefix in ambient `.d.ts` files.
- The room drawing is split so no block file carries the whole scene. The public room component stays the one seam the pages use.
- `POST /api/rent` validates desk, chair, weeks 1–52, area, name, and email. Success returns an id. It does not persist and does not charge.
- Setup and theme live in the browser. The server does not own them.
- The test seam is the running app in the browser: empty silhouettes, an optional piece before a desk, icons after a choice, both themes, and a narrow viewport. Internal drawing functions are not a second seam.

## Testing Decisions

- A good check watches what the renter sees and can press: silhouette names, icons appearing, the window, the theme, the request id.
- Do not assert private SVG coordinates except the window frame size the UI brief locked.
- There is no prior automated suite. The human owns app testing. This rebuild proves the seam in the browser because the brief asked for that. Do not add a test runner for its own sake.

## Out of Scope

- Card payment, stock, and storing the request
- A public Vercel URL
- Inviting desent-bot
- Drag and drop
- Converting the shipped rem and px sizes to vw
- Product photography

## Further Notes

Catalog prices are weekly USD written into the app. Areas are Canggu, Ubud, Seminyak, Uluwatu, and Sanur. The default term is 4 weeks.
