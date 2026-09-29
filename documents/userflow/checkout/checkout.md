# Checkout

1. `/checkout` shows the same room. A plus returns to `/?category=` for that slot.
2. If the desk or the chair is missing, the form stays hidden and the page links back to those slots.
3. The renter sets weeks (1–52, default 4), a Bali area, a name, and an email.
4. Rent this setup posts to `/api/rent`. A bad field shows the error. Success shows the request id and says nothing was charged.
5. Design another setup clears storage and returns home.
