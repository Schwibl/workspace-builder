# Checkout — UI

Same header as the studio. Two columns from the large breakpoint: the room figure on the left (compact caption), the words on the right. One column on a phone, room first.

Right column:

- Fraunces title "Review the rental".
- One muted sentence: same room, pick weeks and a Bali area.
- Empty state, when desk or chair is missing: soft accent notice, a short title, one sentence, and teal links "Choose a desk" and/or "Choose a chair". Those links go to `/?category=desk` or `/?category=chair`.
- A list with no bullets. Each row: a tiny uppercase slot label, the piece name, and the weekly price. If nothing is selected, one row "Nothing selected yet" and $0.
- A sum row: "4 weeks" and the term total. The total is $0 until a desk and a chair exist.
- Error banner: danger border, danger-soft fill, title "Could not place the rental", the server sentence, `role="alert"`.
- Form, only when desk and chair exist and the request has not succeeded:
  - Weeks: minus and plus circles, the number between them. No free typing.
  - Area: native select, Canggu, Ubud, Seminyak, Uluwatu, Sanur. Default Canggu.
  - Name and email: full-width fields on the surface color.
  - Field errors in danger type directly under the control.
  - Teal pill "Rent this setup". While the request is in flight, the label is "Placing rental…" and the button is disabled.
  - One muted line under the button: nothing is charged here.
- Success notice: "Rental requested · MR-XXXXXX", the total, the weeks, the area, and a button "Design another setup".
