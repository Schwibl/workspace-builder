# Studio — UI

Warm paper page. A sticky header: Fraunces wordmark "monis.rent", the line "Bali workspace rental", text links Design and Review, and a pill toggle labeled White and Dark. The active half of the pill uses the teal accent.

Below, a two-column grid from the large breakpoint: the room on the left (about 60%), the picker on the right. One column on a phone, room first.

## The room

A framed figure with a soft shadow. Inside, one SVG elevation, full width of the column:

- Wall in `--scene-wall`, a darker baseboard, a wood floor, a terracotta rug ellipse.
- A window centered on the wall, directly above where the desk will stand. Thick light frame, one mullion, a wood sill. The opening is clipped.
- Day: sky gradient, a sun with eight rays on the right pane, a small cloud on the left.
- Night: deep blue gradient, a handful of stars, a crescent moon. Night is drawn on top of day at opacity 0 until `[data-theme="dark"]`.
- Snake plant on the floor, left of the desk, when chosen. It can stand with no desk.
- Desk top in `--scene-wood`, darker edge and legs. Mechanical: a crank disk on the right leg. Electric: a small metal panel on the apron. Dual-motor: thicker legs and a wider top.
- Monitor bezels on the desktop, only if a desk exists. One 27″, one ultrawide, or two 27″s. Screens use `--scene-screen`.
- Lamp on the right corner of the desk: metal arm, warm head, a glow ellipse on the top. Only with a desk.
- Chair in front, centered: five-star base, seat, mesh back. Mesh chair is tall with a headrest. Task chair is shorter and has no headrest.

Caption under the SVG, muted, one or two sentences. It names the sky first ("Daylight in the window" or "Moon in the window"), then the chosen pieces. If a monitor or lamp is chosen before a desk, say they are waiting for a desk.

## The picker

A horizontal scroller of pills. The open category is a filled teal pill. Under it, a Fraunces heading ("Pick a desk", "Add a monitor", …) and one muted hint line.

Options are stacked cards. Each card is a label: a real radio, the name, the weekly price (an em dash when it is free), and a one-line blurb in muted type. The checked card gets an accent border and the soft accent fill.

## The bar

Surface card. Fraunces price on the left, a muted line under it ("per week…" or "Add a desk and a chair to rent"). On the right, a quiet Start over text button when the room is not empty, and a teal pill **Review rental**.
