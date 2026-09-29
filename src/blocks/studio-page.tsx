"use client";

import { useSearchParams } from "next/navigation";
import { Picker } from "@/blocks/picker";
import { RoomScene } from "@/blocks/room-scene";
import { SetupBar } from "@/blocks/setup-bar";
import { useSetup } from "@/features/setup-context";

// Studio: the room stays on screen while one category is chosen at a time.
export function StudioPage() {
  const { ready } = useSetup();
  const params = useSearchParams();

  if (!ready) {
    return <p className="studio-page__status">Opening the room…</p>;
  }

  return (
    <div className="studio-page mx-auto flex w-full min-w-0 max-w-6xl flex-1 flex-col px-4 py-4 lg:px-6">
      <div className="grid min-w-0 items-start gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)]">
        <div className="min-w-0">
          <RoomScene />
        </div>
        <div className="min-w-0">
          <Picker initialCategory={params.get("category")} />
        </div>
      </div>
      <SetupBar />
    </div>
  );
}
