"use client";

import {
  categories,
  chairs,
  desks,
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
  desk: "One desk. It replaces the table silhouette under the window.",
  chair: "One chair, in front of the desk.",
  monitor: "Optional. You can add it before a desk. It still shows.",
  lamp: "Optional. You can add it before a desk. The other extras stay open.",
  plant: "Optional. A pot on the floor, with or without a desk.",
};

// Radios for one slot. The sidebar and the piece pop-up both use this list.
export function SlotChoices({ category, name }: { category: t_CategoryId; name: string }) {
  const { setup, setDesk, setChair, setMonitor, setLamp, setPlant } = useSetup();
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
    <fieldset className="picker__list">
      <legend className="sr-only">{labelFor(category)}</legend>
      {options.map((item) => (
        <label key={item.id} className="option-card">
          <input
            className="option-card__input"
            type="radio"
            name={name}
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
  );
}

// One category at a time. The open category follows the piece that was clicked.
export function Picker({
  category,
  onCategory,
}: {
  category: t_CategoryId;
  onCategory: (category: t_CategoryId) => void;
}) {
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
              onClick={() => onCategory(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id="picker-panel" aria-labelledby={`tab-${category}`}>
        <h2 className="picker__legend">{labelFor(category)}</h2>
        <p className="picker__hint">{hints[category]}</p>
        <SlotChoices category={category} name={`slot-${category}`} />
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
