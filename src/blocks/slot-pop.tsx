"use client";

import { SlotChoices } from "@/blocks/picker";

const titles: Record<t_CategoryId, string> = {
  desk: "Desk",
  chair: "Chair",
  monitor: "Monitor",
  lamp: "Lamp",
  plant: "Plant",
};

// Options for one slot, sitting beside that piece while the sidebar is collapsed.
export function SlotPop({ category, onClose }: { category: t_CategoryId; onClose: () => void }) {
  return (
    <div className={`slot-pop slot-pop--${category}`} role="dialog" aria-label={titles[category]}>
      <div className="slot-pop__bar">
        <p className="slot-pop__title">{titles[category]}</p>
        <button type="button" className="slot-pop__close" onClick={onClose}>
          Close
        </button>
      </div>
      <SlotChoices category={category} name={`pop-${category}`} />
    </div>
  );
}
