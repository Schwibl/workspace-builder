# Workspace rental

A renter designs one workspace for a stay in Bali and asks monis.rent to deliver it. The drawing on screen is that workspace.

## Language

**Setup**:
The desk, chair, and accessories a renter currently has in the room.
_Avoid_: Cart, configuration, bundle

**Desk**:
The one table in a setup. A setup has at most one.
_Avoid_: Table

**Chair**:
The one seat in a setup. A setup has at most one.
_Avoid_: Seat

**Slot**:
One place in the room for a single kind of piece: desk, chair, monitor, lamp, or plant.
_Avoid_: Zone, placeholder

**Silhouette**:
The empty drawing of a slot that is not in the setup. It carries a plus.
_Avoid_: Ghost, outline image

**Icon**:
The explicit drawing of the piece once that slot is chosen.
_Avoid_: Thumbnail, photo

**Optional piece**:
A monitor, lamp, or plant. It may be chosen before a desk is.
_Avoid_: Add-on, extra

**Accessory**:
An optional piece in the setup. Each kind has at most one choice, and "none" returns that slot to a silhouette.
_Avoid_: Add-on, extra

**Window**:
The opening on the wall above the desk. It is part of the room, not a rented piece. It shows daylight in the white theme and the moon in the dark theme.
_Avoid_: Viewport, theme preview

**Rental request**:
The renter's ask to deliver a setup for a number of weeks to an area in Bali. It is not a payment.
_Avoid_: Order, checkout charge, booking

**Term**:
The number of weeks the rental request covers.
_Avoid_: Duration, subscription

**Area**:
The Bali place the setup is delivered to.
_Avoid_: Zone, city
