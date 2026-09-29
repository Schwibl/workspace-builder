"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Picker } from "@/blocks/picker";
import { RoomScene } from "@/blocks/room-scene";
import { SetupBar } from "@/blocks/setup-bar";
import { isCategoryId } from "@/features/catalog";
import { useSetup } from "@/features/setup-context";

// Studio: the large room stays up. A plus opens one category beside it.
export function StudioPage() {
  const { ready } = useSetup();
  const params = useSearchParams();
  const query = params.get("category");
  const requested = isCategoryId(query) ? query : null;
  const [category, setCategory] = useState<t_CategoryId>(requested ?? "desk");
  const [trackedRequest, setTrackedRequest] = useState<t_CategoryId | null>(requested);

  // A checkout link such as /?category=chair opens that slot without an effect.
  if (requested !== trackedRequest) {
    setTrackedRequest(requested);
    if (requested) {
      setCategory(requested);
    }
  }

  if (!ready) {
    return <p className="studio-page__status">Opening the room…</p>;
  }

  return (
    <div className="studio-page mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col px-4 py-4 lg:px-6">
      <div className="grid min-w-0 items-start gap-4 lg:grid-cols-[minmax(0,1.9fr)_22rem]">
        <div className="min-w-0">
          <RoomScene onChoose={setCategory} />
        </div>
        <div className="min-w-0">
          <Picker category={category} onCategory={setCategory} />
        </div>
      </div>
      <SetupBar />
    </div>
  );
}
