import { Suspense } from "react";
import { StudioPage } from "@/blocks/studio-page";

export default function Page() {
  return (
    <Suspense fallback={<p className="studio-page__status">Opening the room…</p>}>
      <StudioPage />
    </Suspense>
  );
}
