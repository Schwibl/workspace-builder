"use client";

import Link from "next/link";
import { canRent, formatUsd, isSetupEmpty, weeklyTotal } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";

// Sticky summary of the weekly price. Review stays available so an empty checkout is reachable.
export function SetupBar() {
  const { setup, reset } = useSetup();
  const weekly = weeklyTotal(setup);
  const ready = canRent(setup);

  return (
    <div className="setup-bar">
      <div className="setup-bar__total">
        <div className="setup-bar__amount">{formatUsd(weekly)}</div>
        <div className="setup-bar__meta">
          {ready ? "per week, before you choose a term" : "Add a desk and a chair to rent"}
        </div>
      </div>
      <div className="setup-bar__actions">
        {isSetupEmpty(setup) ? null : (
          <button type="button" className="button button--quiet" onClick={reset}>
            Start over
          </button>
        )}
        <Link className="button" href="/checkout">
          Review rental
        </Link>
      </div>
    </div>
  );
}
