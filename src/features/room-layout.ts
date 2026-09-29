// Desk footprint in the 960-wide room. Wider tops read as the larger rental desks.
export function deskBox(width: t_DeskWidth): t_DeskBox {
  const w = width === "compact" ? 280 : width === "wide" ? 360 : 440;
  return { x: (960 - w) / 2, w, topY: 312 };
}
