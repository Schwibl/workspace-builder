"use client";

import { useState } from "react";
import {
  categories,
  chairs,
  desks,
  isCategoryId,
  isChairId,
  isDeskId,
  isLampId,
  isMonitorId,
  isPlantId,
  lamps,
  monitors,
  plants,
} from "@/features/catalog";
import { formatUsd } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";

const hints: Record<t_CategoryId, string> = {
  desk: "One desk. It lands under the window.",
  chair: "One chair, pulled up to the desk.",
  monitor: "Optional. It appears on the desktop after you pick a desk.",
  lamp: "Optional. A warm light on the right side of the desk.",
  plant: "Optional. A pot on the floor to the left.",
};

// One category at a time. Every slot is a single choice, so the room never stacks duplicates.
export function Picker({ initialCategory }: { initialCategory: string | null }) {
  const { setup, setDesk, setChair, setMonitor, setLamp, setPlant } = useSetup();
  const requested = isCategoryId(initialCategory) ? initialCategory : null;
  const [category, setCategory] = useState<t_CategoryId>(requested ?? "desk");
  const [trackedRequest, setTrackedRequest] = useState<t_CategoryId | null>(requested);

  // Follow a category deep link without an effect. Local tab clicks stay put until the URL changes.
  if (requested !== trackedRequest) {
    setTrackedRequest(requested);
    if (requested) {
      setCategory(requested);
    }
  }

  const options = optionsFor(category);
  const selected = selectedId(setup, category);

  const onPick = (id: string) => {
    if (category === "desk" && isDeskId(id)) {
      setDesk(id);
      return;
    }
    if (category === "chair" && isChairId(id)) {
      setChair(id);
      return;
    }
    if (category === "monitor" && isMonitorId(id)) {
      setMonitor(id);
      return;
    }
    if (category === "lamp" && isLampId(id)) {
      setLamp(id);
      return;
    }
    if (category === "plant" && isPlantId(id)) {
      setPlant(id);
    }
  };

  return (
    <section className="picker" aria-label="Choose furniture">
      <div className="picker__tabs" role="tablist" aria-label="Categories">
        {categories.map((item) => {
          const active = item.id === category;
          return (
            <button
              key={item.id}
              type="button"
              className={active ? "picker__tab picker__tab--active" : "picker__tab"}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={active}
              aria-controls="picker-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id="picker-panel" aria-labelledby={`tab-${category}`}>
        <h2 className="picker__legend">{labelFor(category)}</h2>
        <p className="picker__hint">{hints[category]}</p>
        <fieldset className="picker__list">
          <legend className="sr-only">{labelFor(category)}</legend>
          {options.map((item) => (
            <label key={item.id} className="option-card">
              <input
                className="option-card__input"
                type="radio"
                name={`slot-${category}`}
                value={item.id}
                checked={selected === item.id}
                onChange={() => onPick(item.id)}
              />
              <span className="option-card__name">{item.name}</span>
              <span className="option-card__price">
                {item.weeklyUsd === 0 ? "—" : `${formatUsd(item.weeklyUsd)}/wk`}
              </span>
              <span className="option-card__blurb">{item.blurb}</span>
            </label>
          ))}
        </fieldset>
      </div>
    </section>
  );
}

function labelFor(category: t_CategoryId): string {
  if (category === "desk") {
    return "Pick a desk";
  }
  if (category === "chair") {
    return "Pick a chair";
  }
  if (category === "monitor") {
    return "Add a monitor";
  }
  if (category === "lamp") {
    return "Add a lamp";
  }
  return "Add a plant";
}

function optionsFor(category: t_CategoryId): t_PricedItem[] {
  if (category === "desk") {
    return desks;
  }
  if (category === "chair") {
    return chairs;
  }
  if (category === "monitor") {
    return monitors;
  }
  if (category === "lamp") {
    return lamps;
  }
  return plants;
}

function selectedId(setup: t_Setup, category: t_CategoryId): string {
  if (category === "desk") {
    return setup.deskId ?? "";
  }
  if (category === "chair") {
    return setup.chairId ?? "";
  }
  if (category === "monitor") {
    return setup.monitorId;
  }
  if (category === "lamp") {
    return setup.lampId;
  }
  return setup.plantId;
}
