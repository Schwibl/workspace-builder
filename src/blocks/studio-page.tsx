"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Picker } from "@/blocks/picker";
import { RoomScene } from "@/blocks/room-scene";
import { SetupBar } from "@/blocks/setup-bar";
import { SlotPop } from "@/blocks/slot-pop";
import { isCategoryId } from "@/features/catalog";
import { useSetup } from "@/features/setup-context";

// Studio: the room stays up. An open sidebar lists one category. A collapsed sidebar uses pop-ups.
export function StudioPage() {
  const { ready } = useSetup();
  const params = useSearchParams();
  const query = params.get("category");
  const requested = isCategoryId(query) ? query : null;
  const [category, setCategory] = useState<t_CategoryId>(requested ?? "desk");
  const [trackedRequest, setTrackedRequest] = useState<t_CategoryId | null>(requested);
  const [collapsed, setCollapsed] = useState(false);
  const [popup, setPopup] = useState<t_CategoryId | null>(null);

  // A checkout link such as /?category=chair opens that slot without an effect.
  if (requested !== trackedRequest) {
    setTrackedRequest(requested);
    if (requested) {
      setCategory(requested);
      setCollapsed(false);
      setPopup(null);
    }
  }

  const onChoose = (next: t_CategoryId) => {
    if (collapsed) {
      setPopup((current) => (current === next ? null : next));
      return;
    }
    setCategory(next);
  };

  const toggleSidebar = () => {
    setCollapsed((current) => !current);
    setPopup(null);
  };

  if (!ready) {
    return <p className="studio-page__status">Opening the room…</p>;
  }

  const columns = collapsed
    ? "lg:grid-cols-[minmax(0,1fr)_auto]"
    : "lg:grid-cols-[minmax(0,1.9fr)_22rem]";

  return (
    <div className="studio-page mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col px-4 py-3 lg:px-6">
      <div className={`studio-page__stage grid min-h-0 min-w-0 gap-3 ${columns}`}>
        <div className="studio-page__room min-w-0">
          <div className="studio-page__frame">
            <RoomScene onChoose={onChoose} onDismiss={() => setPopup(null)} />
            {collapsed && popup ? <SlotPop category={popup} onClose={() => setPopup(null)} /> : null}
          </div>
        </div>
        <div className={collapsed ? "studio-page__side studio-page__side--collapsed" : "studio-page__side"}>
          <button
            type="button"
            className="studio-page__collapse"
            aria-expanded={!collapsed}
            onClick={toggleSidebar}
          >
            {collapsed ? "Expand" : "Collapse"}
          </button>
          {collapsed ? null : <Picker category={category} onCategory={setCategory} />}
        </div>
      </div>
      <SetupBar />
    </div>
  );
}
