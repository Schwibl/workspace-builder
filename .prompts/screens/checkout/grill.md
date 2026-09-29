# Checkout — grill

Self-grill of `ux.md` and `ui.md`. Recommended answers accepted. Frontier empty.

❓ **Q1** - **Where does a missing desk go?**: Inline on this screen, or bounce back to the studio automatically.

➡️ Stay here and explain it. An automatic redirect hides the empty state and feels like a bug. The link back names the missing piece.

---

❓ **Q2** - **Payment on this screen?**: Card fields would look finished and would be fake. A request with no charge is honest.

➡️ No card. Copy says monis.rent confirms by email and nothing is charged here.

---

❓ **Q3** - **Who validates?**: The browser `required` attribute is easy to miss and the messages are generic. The server can say the same sentences the UI shows.

➡️ `noValidate` on the form. `POST /api/rent` returns `{ error, fields }`. The client prints those strings. The server is the check that matters.

---

❓ **Q4** - **Default term and area?**: Asking with empty controls adds two actions before a valid submit.

➡️ 4 weeks, Canggu. Both visible, both changeable. The area list is the five Bali places the product actually serves in this preview.
