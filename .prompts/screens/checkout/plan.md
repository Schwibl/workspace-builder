# Wrapped plan — checkout

Accepted grill: `grill.md`.

## Chosen approach

One review screen that reuses the room drawing. The form is absent until a desk and a chair exist. The server validates and returns field messages. Rejected: a redirect when the setup is incomplete (hides the empty state) and a fake card form (implies a charge we cannot make).

## Tree

- Layout
  - [leaf] Two-column review with the compact room (`checkout-page`, `room-scene`)
- Incomplete
  - [leaf] Notice plus links back to the missing category
- Price
  - [leaf] Line items and weeks × weekly total (`setup-model`)
- Request
  - [leaf] Weeks stepper, area, name, email
  - [leaf] `POST /api/rent` validation and confirmation id (`api/rent/route.ts`)
  - [leaf] Banner for field errors and for a failed fetch
  - [leaf] Success notice and Design another setup, which resets storage
