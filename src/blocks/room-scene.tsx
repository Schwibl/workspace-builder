"use client";

import { useId } from "react";
import type { ReactNode } from "react";
import { findChair, findDesk, findMonitor } from "@/features/catalog";
import { describeSetup } from "@/features/setup-model";
import { useSetup } from "@/features/setup-context";
import { useTheme } from "@/features/theme-context";

type t_DeskBox = {
  x: number;
  w: number;
  topY: number;
};

// Desk footprint in the 960-wide room. Wider tops read as the larger rental desks.
function deskBox(width: t_DeskWidth): t_DeskBox {
  const w = width === "compact" ? 280 : width === "wide" ? 360 : 440;
  return { x: (960 - w) / 2, w, topY: 312 };
}

type t_ChooseSlot = (category: t_CategoryId) => void;

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

// Wall, floor, and rug under the furniture
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

// Daylight and moon are both painted. CSS fades the one that does not match data-theme.
// Wide opening above the desk. Day and night are both painted; the theme fades one out.
function RoomWindow({ uid }: { uid: string }) {
  const clipId = `${uid}-clip`;
  const dayId = `${uid}-day`;
  const nightId = `${uid}-night`;
  const moonId = `${uid}-moon`;

  return (
    <g className="room-window">
      <defs>
        <linearGradient id={dayId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--scene-sky-top)" />
          <stop offset="1" stopColor="var(--scene-sky-bottom)" />
        </linearGradient>
        <linearGradient id={nightId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--scene-night-top)" />
          <stop offset="1" stopColor="var(--scene-night-bottom)" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="190" y="28" width="580" height="214" rx="6" />
        </clipPath>
        <mask id={moonId}>
          <circle cx="0" cy="0" r="36" fill="white" />
          <circle cx="18" cy="-10" r="30" fill="black" />
        </mask>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <g className="room-window__sky-day">
          <rect x="190" y="28" width="580" height="214" fill={`url(#${dayId})`} />
          <g transform="translate(680 120)">
            <line className="room-window__ray" x1="-52" y1="0" x2="-38" y2="0" />
            <line className="room-window__ray" x1="38" y1="0" x2="52" y2="0" />
            <line className="room-window__ray" x1="0" y1="-52" x2="0" y2="-38" />
            <line className="room-window__ray" x1="0" y1="38" x2="0" y2="52" />
            <line className="room-window__ray" x1="-36" y1="-36" x2="-26" y2="-26" />
            <line className="room-window__ray" x1="26" y1="26" x2="36" y2="36" />
            <line className="room-window__ray" x1="36" y1="-36" x2="26" y2="-26" />
            <line className="room-window__ray" x1="-26" y1="26" x2="-36" y2="36" />
            <circle className="room-window__sun" r="30" />
          </g>
          <ellipse className="room-window__cloud" cx="300" cy="190" rx="40" ry="16" />
          <ellipse className="room-window__cloud" cx="338" cy="182" rx="32" ry="16" />
          <ellipse className="room-window__cloud" cx="270" cy="184" rx="22" ry="12" />
        </g>
        <g className="room-window__sky-night">
          <rect x="190" y="28" width="580" height="214" fill={`url(#${nightId})`} />
          <circle className="room-window__star" cx="240" cy="70" r="2" />
          <circle className="room-window__star" cx="310" cy="110" r="1.5" />
          <circle className="room-window__star" cx="390" cy="64" r="1.8" />
          <circle className="room-window__star" cx="520" cy="80" r="1.4" />
          <circle className="room-window__star" cx="600" cy="150" r="1.6" />
          <circle className="room-window__star" cx="700" cy="70" r="2" />
          <circle className="room-window__star" cx="250" cy="180" r="1.3" />
          <g transform="translate(470 130)" mask={`url(#${moonId})`}>
            <circle className="room-window__moon" r="36" />
          </g>
        </g>
      </g>
      <rect className="room-window__frame" x="176" y="14" width="608" height="242" rx="10" />
      <line className="room-window__mullion" x1="480" y1="28" x2="480" y2="242" />
      <rect className="room-window__sill" x="160" y="246" width="640" height="16" rx="4" />
    </g>
  );
}

// Dashed slot plus a teal circle and a bold white plus. The group is the button.
function EmptySlot({
  label,
  onChoose,
  children,
}: {
  label: string;
  onChoose: () => void;
  children: ReactNode;
}) {
  return (
    <g
      className="slot-mark"
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onChoose}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onChoose();
        }
      }}
    >
      {children}
    </g>
  );
}

function PlusBadge({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle className="slot-mark__badge" r="22" />
      <path className="slot-mark__plus" d="M -9 0 H 9 M 0 -9 V 9" />
    </g>
  );
}

function DeskSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
  return (
    <EmptySlot label="Add a desk" onChoose={onChoose}>
      <g transform={`translate(${box.x} ${box.topY})`}>
        <rect className="slot-mark__outline" width={box.w} height="16" rx="3" />
        <rect className="slot-mark__outline" x="22" y="16" width="12" height="96" rx="2" />
        <rect className="slot-mark__outline" x={box.w - 34} y="16" width="12" height="96" rx="2" />
        <PlusBadge x={box.w / 2} y={8} />
      </g>
    </EmptySlot>
  );
}

function ChairSilhouette({ onChoose }: { onChoose: () => void }) {
  return (
    <EmptySlot label="Add a chair" onChoose={onChoose}>
      <ellipse className="slot-mark__outline" cx="480" cy="508" rx="56" ry="10" />
      <rect className="slot-mark__outline" x="474" y="456" width="12" height="50" rx="4" />
      <ellipse className="slot-mark__outline" cx="480" cy="452" rx="62" ry="16" />
      <rect className="slot-mark__outline" x="444" y="356" width="72" height="96" rx="18" />
      <PlusBadge x={480} y={400} />
    </EmptySlot>
  );
}

function MonitorSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
  const width = 156;
  const height = 90;
  const x = box.x + (box.w - width) / 2;
  const y = box.topY - height - 18;
  return (
    <EmptySlot label="Add a monitor" onChoose={onChoose}>
      <rect className="slot-mark__outline" x={x + width / 2 - 4} y={y + height} width="8" height="16" />
      <rect className="slot-mark__outline" x={x + width / 2 - 24} y={y + height + 14} width="48" height="6" rx="2" />
      <rect className="slot-mark__outline" x={x} y={y} width={width} height={height} rx="6" />
      <PlusBadge x={x + width / 2} y={y + height / 2} />
    </EmptySlot>
  );
}

function LampSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
  const x = box.x + box.w - 28;
  const y = box.topY;
  return (
    <EmptySlot label="Add a lamp" onChoose={onChoose}>
      <rect className="slot-mark__outline" x={x - 18} y={y - 6} width="30" height="6" rx="2" />
      <path className="slot-mark__outline" d={`M ${x - 4} ${y - 6} V ${y - 72} H ${x - 36}`} />
      <rect className="slot-mark__outline" x={x - 52} y={y - 82} width="40" height="12" rx="4" />
      <PlusBadge x={x - 32} y={y - 76} />
    </EmptySlot>
  );
}

function PlantSilhouette({ x, onChoose }: { x: number; onChoose: () => void }) {
  return (
    <EmptySlot label="Add a plant" onChoose={onChoose}>
      <g transform={`translate(${x} 392)`}>
        <path className="slot-mark__outline" d="M16 52 H58 L50 98 H24 Z" />
        <ellipse className="slot-mark__outline" cx="26" cy="44" rx="14" ry="34" />
        <ellipse className="slot-mark__outline" cx="50" cy="40" rx="13" ry="36" />
        <PlusBadge x={36} y={48} />
      </g>
    </EmptySlot>
  );
}

function SceneDesk({ box, deskId }: { box: t_DeskBox; deskId: t_DeskId }) {
  const legWidth = deskId === "dual-motor" ? 22 : 12;
  return (
    <g className="scene-desk" transform={`translate(${box.x} ${box.topY})`}>
      <rect className="scene-desk__top" width={box.w} height="16" rx="3" />
      <rect className="scene-desk__edge" x="8" y="16" width={box.w - 16} height="8" />
      <rect className="scene-desk__leg" x="22" y="24" width={legWidth} height="98" rx="2" />
      <rect className="scene-desk__leg" x={box.w - 22 - legWidth} y="24" width={legWidth} height="98" rx="2" />
      {deskId === "mechanical" ? (
        <circle className="scene-desk__crank" cx={box.w - 22 - legWidth / 2} cy="78" r="8" />
      ) : null}
      {deskId === "electric" ? (
        <rect className="scene-desk__panel" x={box.w / 2 - 18} y="16" width="36" height="8" rx="2" />
      ) : null}
    </g>
  );
}

function SceneChair({ back }: { back: t_ChairBack }) {
  const tall = back === "tall";
  return (
    <g className="scene-chair">
      <ellipse className="scene-chair__base" cx="480" cy="508" rx="56" ry="10" />
      <circle className="scene-chair__wheel" cx="434" cy="512" r="6" />
      <circle className="scene-chair__wheel" cx="526" cy="512" r="6" />
      <rect className="scene-chair__pole" x="474" y="456" width="12" height="50" rx="4" />
      <ellipse className="scene-chair__seat" cx="480" cy="452" rx="62" ry="16" />
      <rect
        className="scene-chair__back"
        x="444"
        y={tall ? 356 : 392}
        width="72"
        height={tall ? 96 : 58}
        rx="18"
      />
      <path
        className="scene-chair__mesh"
        d={
          tall
            ? "M456 376 H504 M456 396 H504 M456 416 H504 M456 436 H504"
            : "M456 408 H504 M456 428 H504"
        }
      />
      {tall ? <ellipse className="scene-chair__head" cx="480" cy="346" rx="24" ry="12" /> : null}
    </g>
  );
}

function SceneMonitor({ box, layout }: { box: t_DeskBox; layout: t_MonitorLayout }) {
  if (layout === "dual") {
    const y = box.topY - 108;
    return (
      <g className="scene-monitor">
        <MonitorScreen x={box.x + box.w / 2 - 132} y={y} w={112} h={78} />
        <MonitorScreen x={box.x + box.w / 2 + 20} y={y} w={112} h={78} />
      </g>
    );
  }

  const width = layout === "ultrawide" ? 236 : 156;
  const height = layout === "ultrawide" ? 74 : 90;
  return (
    <g className="scene-monitor">
      <MonitorScreen x={box.x + (box.w - width) / 2} y={box.topY - height - 18} w={width} h={height} />
    </g>
  );
}

function MonitorScreen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const center = x + w / 2;
  return (
    <g>
      <rect className="scene-monitor__neck" x={center - 4} y={y + h} width="8" height="16" />
      <rect className="scene-monitor__stand" x={center - 24} y={y + h + 14} width="48" height="6" rx="2" />
      <rect className="scene-monitor__bezel" x={x} y={y} width={w} height={h} rx="6" />
      <rect className="scene-monitor__screen" x={x + 6} y={y + 6} width={w - 12} height={h - 16} rx="2" />
    </g>
  );
}

function SceneLamp({ box }: { box: t_DeskBox }) {
  const x = box.x + box.w - 28;
  const y = box.topY;
  return (
    <g className="scene-lamp">
      <ellipse className="scene-lamp__glow" cx={x - 16} cy={y - 4} rx="42" ry="14" />
      <rect className="scene-lamp__base" x={x - 18} y={y - 6} width="30" height="6" rx="2" />
      <path className="scene-lamp__arm" d={`M ${x - 4} ${y - 6} V ${y - 72} H ${x - 36}`} />
      <rect className="scene-lamp__head" x={x - 52} y={y - 82} width="40" height="12" rx="4" />
    </g>
  );
}

function ScenePlant({ x }: { x: number }) {
  return (
    <g className="scene-plant" transform={`translate(${x} 392)`}>
      <path className="scene-plant__pot" d="M16 52 H58 L50 98 H24 Z" />
      <ellipse className="scene-plant__leaf scene-plant__leaf--dark" cx="26" cy="44" rx="14" ry="34" transform="rotate(-24 26 44)" />
      <ellipse className="scene-plant__leaf" cx="50" cy="40" rx="13" ry="36" transform="rotate(22 50 40)" />
      <ellipse className="scene-plant__leaf" cx="38" cy="30" rx="12" ry="40" />
    </g>
  );
}
