# Studio — UX

The room is the control. An empty slot shows where a piece goes. A chosen piece is the piece. The window draws the time of day. A sentence under the picture does not.

## Path

1. Land on the room. Five slots are already drawn: desk, chair, monitor, lamp, plant. Each empty slot is a silhouette with one circle and a plus. The weekly price sits where it can be seen with the room.
2. Hover a piece. It grows a little and stays at that size. It does not pulse, and it does not grow a frame. When the pointer leaves, it returns to rest.
3. Click a piece while the sidebar is open. That category opens in the sidebar, and that piece pulses while its list is the open one. One radio fills the slot. The silhouette becomes the explicit icon immediately. The list does not draw a border to mark the choice. A filled piece that is not the open slot stays still.
4. Collapse the sidebar. The list leaves and the pulse stops. Click a piece and the options for that slot open in a pop-up beside that piece. That piece pulses while the pop-up is open. The same radios. One choice, and the drawing updates.
5. Expand the sidebar and the pop-up closes. Clicks go back to the sidebar tabs.
6. Each slot has a real set of choices. Desk and chair are required to rent, so they have no "none". Monitor, lamp, and plant include "none", and the other rows are distinct from each other.
7. Monitor, lamp, and plant can be chosen and they appear even when the desk is still empty. Choosing one does not lock the others.
8. The option list can be longer than the column. It scrolls. The scrollbar does not appear in a way that changes the width of the list or the page.
9. The bar under the room shows the weekly total and **Review rental**. On a laptop-height screen that bar is in view with the open sidebar. No page scroll. The amount, the helper line, and the actions stay readable.
10. **Start over** clears every slot back to a silhouette. Only the open slot, if any, keeps pulsing.
11. White / Dark changes the app and the window together: daylight, or the moon. Nothing under the picture repeats that.

## What we refuse to add

- Drag and drop. The piece is one hit, then one radio.
- Hiding optional pieces until a desk exists.
- A caption that narrates the sky.
- A second desktop layout. The phone may stack. It does not get its own arrangement of columns.
- A selection border on the radio card.
- A teal hover frame. Hover is a modest size increase, not a pulse.
- A pulse on a piece that is not the open sidebar slot or the open pop-up.

## Empty

Nothing chosen: five silhouettes, five pluses, total $0. Review still opens. A piece pulses only while its list or pop-up is open.

## Loading

Until the saved setup is read, the page says "Opening the room…" and does not flash empty silhouettes over a saved room.
