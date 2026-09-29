"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RoomScene } from "@/blocks/room-scene";
import { areas } from "@/features/catalog";
import { canRent, formatUsd, lineItems, weeklyTotal } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";

// Checkout shows the same room, the priced lines, and one request form.
export function CheckoutPage() {
  const { setup, ready, reset } = useSetup();
  const router = useRouter();
  const [weeks, setWeeks] = useState(4);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [banner, setBanner] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<t_RentalConfirmation | null>(null);

  if (!ready) {
    return <p className="checkout-page__status">Loading your setup…</p>;
  }

  const items = lineItems(setup);
  const weekly = weeklyTotal(setup);
  const total = weekly * weeks;
  const missingDesk = setup.deskId === null;
  const missingChair = setup.chairId === null;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("submitting");
    setBanner("");
    setFields({});

    const payload: t_RentalDraft = {
      setup,
      weeks,
      areaId: String(form.get("area") ?? "") as t_AreaId,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
    };

    try {
      const response = await fetch("/api/rent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as t_RentalConfirmation | t_RentalError;
      if (!response.ok) {
        const error = data as t_RentalError;
        setStatus("error");
        setBanner(error.error || "We couldn't place this rental.");
        setFields(error.fields ?? {});
        return;
      }
      setConfirmation(data as t_RentalConfirmation);
      setStatus("success");
    } catch {
      setStatus("error");
      setBanner("We couldn't reach the rental desk. Check your connection and try again.");
    }
  };

  const designAnother = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="checkout-page mx-auto grid w-full min-w-0 max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-6">
      <div>
        <RoomScene
          compact
          onChoose={(category) => {
            router.push(`/?category=${category}`);
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <header>
          <h1 className="checkout-page__title">Review the rental</h1>
          <p className="checkout-page__lead">
            Same room you just built. Choose how many weeks and where in Bali it should land.
          </p>
        </header>

        {missingDesk || missingChair ? (
          <div className="notice notice--empty">
            <h2 className="notice__title">The setup is not ready to rent</h2>
            <p className="notice__text">
              {missingDesk && missingChair
                ? "Choose a desk and a chair first. Accessories can wait."
                : missingDesk
                  ? "Choose a desk. The chair is already in the room."
                  : "Choose a chair to pull up to the desk."}
            </p>
            <div className="notice__actions">
              {missingDesk ? (
                <Link className="button" href="/?category=desk">
                  Choose a desk
                </Link>
              ) : null}
              {missingChair ? (
                <Link className={missingDesk ? "button button--ghost" : "button"} href="/?category=chair">
                  Choose a chair
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}

        <ul className="checkout-page__items">
          {items.length === 0 ? (
            <li className="checkout-page__item">
              <span>Nothing selected yet</span>
              <span>{formatUsd(0)}</span>
            </li>
          ) : (
            items.map((item) => (
              <li key={item.slot} className="checkout-page__item">
                <span>
                  <span className="checkout-page__slot">{item.slot}</span>
                  {item.name}
                </span>
                <span>{formatUsd(item.weeklyUsd)}/wk</span>
              </li>
            ))
          )}
        </ul>
        <div className="checkout-page__sum">
          <span>
            {weeks} {weeks === 1 ? "week" : "weeks"}
          </span>
          <span>{formatUsd(canRent(setup) ? total : 0)}</span>
        </div>

        {status === "success" && confirmation ? (
          <div className="notice">
            <h2 className="notice__title">Rental requested · {confirmation.requestId}</h2>
            <p className="notice__text">
              {formatUsd(confirmation.totalUsd)} for {confirmation.weeks} weeks in {confirmation.areaName}. We
              confirm stock by email. Nothing is charged on this screen.
            </p>
            <div className="notice__actions">
              <button type="button" className="button" onClick={designAnother}>
                Design another setup
              </button>
            </div>
          </div>
        ) : null}

        {canRent(setup) && status !== "success" ? (
          <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
            {status === "error" && banner ? (
              <div className="notice notice--error" role="alert">
                <h2 className="notice__title">Could not place the rental</h2>
                <p className="notice__text">{banner}</p>
              </div>
            ) : null}

            <div className="field">
              <span className="field__label" id="weeks-label">
                Weeks
              </span>
              <div className="field__stepper">
                <button
                  type="button"
                  className="field__step"
                  onClick={() => setWeeks((value) => Math.max(1, value - 1))}
                  aria-label="Fewer weeks"
                >
                  −
                </button>
                <output className="field__weeks" aria-labelledby="weeks-label">
                  {weeks}
                </output>
                <button
                  type="button"
                  className="field__step"
                  onClick={() => setWeeks((value) => Math.min(52, value + 1))}
                  aria-label="More weeks"
                >
                  +
                </button>
              </div>
              {fields.weeks ? <p className="field__error">{fields.weeks}</p> : null}
            </div>

            <label className="field">
              <span className="field__label">Area in Bali</span>
              <select className="field__control" name="area" defaultValue="canggu">
                {areas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
              {fields.area ? <p className="field__error">{fields.area}</p> : null}
            </label>

            <label className="field">
              <span className="field__label">Name</span>
              <input className="field__control" name="name" autoComplete="name" placeholder="Alex Rivera" />
              {fields.name ? <p className="field__error">{fields.name}</p> : null}
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                className="field__control"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@example.com"
              />
              {fields.email ? <p className="field__error">{fields.email}</p> : null}
            </label>

            <button className="button" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Placing rental…" : "Rent this setup"}
            </button>
            <p className="checkout-page__lead">No payment is taken here. monis.rent confirms delivery by email.</p>
          </form>
        ) : null}
      </div>
    </div>
  );
}
