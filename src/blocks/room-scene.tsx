"use client";

import { useId } from "react";
import { findChair, findDesk, findMonitor } from "@/features/catalog";
import { deskBox } from "@/features/room-layout";
import { describeSetup } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";
import { useTheme } from "@/features/theme-context";
import { SceneChair, SceneDesk, SceneLamp, SceneMonitor, ScenePlant } from "@/blocks/room-icons";
import { ChairSilhouette, DeskSilhouette, LampSilhouette, MonitorSilhouette, PlantSilhouette } from "@/blocks/room-slots";
import { RoomWindow } from "@/blocks/room-window";

// Wall, floor, and rug under the furniture.
function RoomBackdrop() {
  return (
    <g>
      <rect className="room-scene__wall" width="960" height="450" />
      <rect className="room-scene__baseboard" y="418" width="960" height="18" />
      <rect className="room-scene__floor" y="434" width="960" height="126" />
      <ellipse className="room-scene__rug" cx="480" cy="520" rx="250" ry="26" />
    </g>
  );
}

// The room the renter is designing. Empty slots are silhouettes; chosen pieces are icons.
export function RoomScene({
  compact = false,
  onChoose,
}: {
  compact?: boolean;
  onChoose?: t_ChooseSlot;
}) {
  const { setup } = useSetup();
  const { theme, mounted } = useTheme();
  const uid = useId().replace(/:/g, "");
  const desk = findDesk(setup.deskId);
  const chair = findChair(setup.chairId);
  const monitor = findMonitor(setup.monitorId);
  // Anchors stay put when the desk is still empty, so optional icons have a place to land.
  const box = desk ? deskBox(desk.width) : deskBox("wide");
  const label = mounted ? describeSetup(setup, theme) : "Workspace preview";
  const figureClass = compact ? "room-scene room-scene--compact" : "room-scene";
  const choose = (category: t_CategoryId) => onChoose?.(category);

  return (
    <figure className={figureClass} aria-label={label}>
      <svg className="room-scene__svg" viewBox="0 0 960 560">
        <RoomBackdrop />
        <RoomWindow uid={uid} />
        {setup.plantId === "snake" ? (
          <ScenePlant x={box.x - 96} />
        ) : (
          <PlantSilhouette x={box.x - 96} onChoose={() => choose("plant")} />
        )}
        {desk ? <SceneDesk box={box} deskId={desk.id} /> : <DeskSilhouette box={box} onChoose={() => choose("desk")} />}
        {monitor.layout !== "none" ? (
          <SceneMonitor box={box} layout={monitor.layout} />
        ) : (
          <MonitorSilhouette box={box} onChoose={() => choose("monitor")} />
        )}
        {setup.lampId === "led" ? <SceneLamp box={box} /> : <LampSilhouette box={box} onChoose={() => choose("lamp")} />}
        {chair ? <SceneChair back={chair.back} /> : <ChairSilhouette onChoose={() => choose("chair")} />}
      </svg>
      <figcaption className="room-scene__caption">{label}</figcaption>
    </figure>
  );
}
