import { randomBytes } from "crypto";
import { findArea, isAreaId } from "@/features/catalog";
import { canRent, lineItems, sanitizeSetup, weeklyTotal } from "@/features/setup-model";

// Place a rental request. Stock and payment stay outside this preview.
// TODO: persist the request and take payment once an order API exists.
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Send the setup as JSON." } satisfies t_RentalError, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Send the setup as JSON." } satisfies t_RentalError, { status: 400 });
  }

  const body = payload as Partial<t_RentalDraft>;
  const setup = sanitizeSetup(body.setup);
  const fields: Record<string, string> = {};

  if (!canRent(setup)) {
    if (!setup.deskId) {
      fields.desk = "Choose a desk before renting.";
    }
    if (!setup.chairId) {
      fields.chair = "Choose a chair before renting.";
    }
  }

  const weeks = Number(body.weeks);
  if (!Number.isInteger(weeks) || weeks < 1 || weeks > 52) {
    fields.weeks = "Choose between 1 and 52 weeks.";
  }

  if (!isAreaId(body.areaId)) {
    fields.area = "Choose a Bali area.";
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2) {
    fields.name = "Add the name for the delivery.";
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Add an email so we can confirm the rental.";
  }

  if (Object.keys(fields).length > 0) {
    return Response.json(
      { error: "Fix the highlighted fields before renting.", fields } satisfies t_RentalError,
      { status: 400 },
    );
  }

  const weeklyUsd = weeklyTotal(setup);
  const area = findArea(body.areaId as t_AreaId);
  const confirmation: t_RentalConfirmation = {
    requestId: `MR-${randomBytes(3).toString("hex").toUpperCase()}`,
    weeks,
    weeklyUsd,
    totalUsd: weeklyUsd * weeks,
    areaName: area.name,
    items: lineItems(setup),
  };

  return Response.json(confirmation, { status: 201 });
}
