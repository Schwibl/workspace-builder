# Studio — UI

One desktop arrangement: room on the left, sidebar on the right, price bar under both. A laptop-height window shows the room, the open sidebar, and the price without the page scrolling. The wall window stays the wide opening, daylight or moon filling it. There is no caption under the SVG.

On a phone the same blocks stack: room, sidebar, price. Do not add a second desktop layout. The price bar stays readable: amount, helper line, and actions do not overlap.

## Pieces

Every slot is a hit target, empty or filled. Motion uses the piece's own center. A frame is not the hover or the selected state.

- Hover: the piece scales up slightly and pulses between that size and a little larger, only while the pointer is on that piece. Leaving it returns the piece to rest and stops that pulse. The pointer is a hand. No teal outline, no tinted hit plate. Focus alone does not play the hover pulse.
- Selected: a filled slot pulses in size, a smaller loop than the hover. "None" and an empty slot do not pulse. Hover on a selected piece uses the larger hover pulse.
- Click, sidebar open: that category becomes the open tab.
- Click, sidebar collapsed: a pop-up of that slot's radios sits beside the piece. Clicking the same piece again closes it. Clicking another piece moves the pop-up.

Empty silhouette, dashed, muted stroke:

- Desk: tabletop and two legs, centered under the window.
- Chair: seat, back, and base, in front of the desk.
- Monitor: one screen and stand, on the desktop.
- Lamp: arm and head, on the right of the desktop.
- Plant: pot and two leaves, on the floor to the left.

Centered on each empty outline: a teal circle and a bold white plus. Accessible name: "Add a desk", "Add a chair", "Add a monitor", "Add a lamp", "Add a plant".

Explicit icon, outline and plus gone. Each catalog row has a look of its own:

- Desk: wood top and legs. Crank, electric panel, thick dual-motor legs, a drawer on the writing desk, or a lighter bamboo top. Width follows the row.
- Chair: tall mesh, shorter task, a backless stool, or a dark leather executive.
- Monitor: none, a small 24″, a 27″, a large 32″, an ultrawide, or two 27″s.
- Lamp: none, a short clamp, the LED arm, or a taller arc.
- Plant: none, a cactus, a snake plant, or a broader monstera.

Optional icons use the same places when the desk is still a silhouette.

## Sidebar

A collapse control sits at the top of the right column. Expanded: the control reads as collapse, and the category pills plus the radio cards are below it. Collapsed: the column shrinks to the control, which reads as expand, and the cards are gone.

The list scrolls when the rows do not fit. The scrollbar is not visible, so it cannot change the column width. Nothing covers the last line of a row. Wheel, trackpad, and keyboard scrolling still move the rows. The pop-up uses the same rule. On a laptop-height window every option's sentence fits in the open sidebar.

Radio rows: name, weekly price, and the full sentence. The checked row may use a soft fill. It does not change its border to show selection. The pulse on the piece is the selected state.

The pop-up uses those same rows. It is anchored beside the slot, not a new page and not a second sidebar.

## Window

Both skies stay in the drawing. White theme shows daylight. Dark theme shows the moon. No sentence under the picture says so.
