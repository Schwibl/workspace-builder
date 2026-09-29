# A rental request is not a charge

The test asks for a summary and a Rent action. Taking a card would need a processor, and a fake card form would tell the renter money moved.

`POST /api/rent` checks the setup, term, area, and contact, then returns a request id. The screen says nothing is charged. The request is not stored: this preview has no database. Replacing the route later does not change the setup model.
