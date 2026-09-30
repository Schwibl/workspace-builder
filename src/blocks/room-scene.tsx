"use client";

import { useId, useState, type ReactNode } from "react";
import { findChair, findDesk, findMonitor } from "@/features/catalog";
import { deskBox } from "@/features/room-layout";
import { describeSetup } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";
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

// One hit target for a slot, empty or filled. The click does not dismiss a pop-up on the way up.
function PieceHit({
  label,
  onChoose,
  hit,
  active = false,
  children,
}: {
  label: string;
  onChoose: () => void;
  hit: { x: number; y: number; w: number; h: number };
  active?: boolean;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  // Active owns the motion. Hover scale stays off while this slot's list or pop-up is open.
  const pieceClass = [
    "room-piece",
    active ? "room-piece--active" : "",
    hovered && !active ? "room-piece--hover" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <g
      className={pieceClass}
      role="button"
      tabIndex={0}
      aria-label={label}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
      onClick={(event) => {
        event.stopPropagation();
        onChoose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onChoose();
        }
      }}
    >
      <rect className="room-piece__hit" x={hit.x} y={hit.y} width={hit.w} height={hit.h} />
      {children}
    </g>
  );
}

// The room the renter is designing. Empty slots are silhouettes; chosen pieces are icons.
export function RoomScene({
  compact = false,
  onChoose,
  onDismiss,
  active = null,
}: {
  compact?: boolean;
  onChoose?: t_ChooseSlot;
  onDismiss?: () => void;
  active?: t_CategoryId | null;
}) {
  const { setup } = useSetup();
  const uid = useId().replace(/:/g, "");
  const desk = findDesk(setup.deskId);
  const chair = findChair(setup.chairId);
  const monitor = findMonitor(setup.monitorId);
  // Anchors stay put when the desk is still empty, so optional icons have a place to land.
  const box = desk ? deskBox(desk.width) : deskBox("wide");
  const label = describeSetup(setup);
  const figureClass = compact ? "room-scene room-scene--compact" : "room-scene";
  const choose = (category: t_CategoryId) => onChoose?.(category);

  return (
    <figure className={figureClass} aria-label={label}>
      <svg className="room-scene__svg" viewBox="0 0 960 560" onClick={() => onDismiss?.()}>
        <RoomBackdrop />
        <RoomWindow uid={uid} />
        <PieceHit
          label={setup.plantId !== "none" ? "Change plant" : "Add a plant"}
          onChoose={() => choose("plant")}
          active={active === "plant"}
          hit={{ x: box.x - 112, y: 340, w: 120, h: 170 }}
        >
          {setup.plantId !== "none" ? (
            <ScenePlant x={box.x - 96} plantId={setup.plantId} />
          ) : (
            <PlantSilhouette x={box.x - 96} />
          )}
        </PieceHit>
        <PieceHit
          label={desk ? `Change desk, ${desk.name}` : "Add a desk"}
          onChoose={() => choose("desk")}
          active={active === "desk"}
          hit={{ x: box.x, y: box.topY - 6, w: box.w, h: 132 }}
        >
          {desk ? <SceneDesk box={box} deskId={desk.id} /> : <DeskSilhouette box={box} />}
        </PieceHit>
        <PieceHit
          label={monitor.layout !== "none" ? `Change monitor, ${monitor.name}` : "Add a monitor"}
          onChoose={() => choose("monitor")}
          active={active === "monitor"}
          hit={{ x: box.x + (box.w - 240) / 2, y: box.topY - 140, w: 240, h: 136 }}
        >
          {monitor.layout !== "none" ? <SceneMonitor box={box} layout={monitor.layout} /> : <MonitorSilhouette box={box} />}
        </PieceHit>
        <PieceHit
          label={setup.lampId !== "none" ? "Change lamp" : "Add a lamp"}
          onChoose={() => choose("lamp")}
          active={active === "lamp"}
          hit={{ x: box.x + box.w - 100, y: box.topY - 130, w: 110, h: 144 }}
        >
          {setup.lampId !== "none" ? <SceneLamp box={box} lampId={setup.lampId} /> : <LampSilhouette box={box} />}
        </PieceHit>
        <PieceHit
          label={chair ? `Change chair, ${chair.name}` : "Add a chair"}
          onChoose={() => choose("chair")}
          active={active === "chair"}
          hit={{ x: 408, y: 344, w: 144, h: 180 }}
        >
          {chair ? <SceneChair back={chair.back} chairId={chair.id} /> : <ChairSilhouette />}
        </PieceHit>
      </svg>
    </figure>
  );
}
