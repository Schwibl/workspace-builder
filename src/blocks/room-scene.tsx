"use client";

import { useId } from "react";
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

// The room the renter is designing. The window belongs to this desk and follows the theme.
export function RoomScene({ compact = false }: { compact?: boolean }) {
  const { setup } = useSetup();
  const { theme, mounted } = useTheme();
  const uid = useId().replace(/:/g, "");
  const desk = findDesk(setup.deskId);
  const chair = findChair(setup.chairId);
  const monitor = findMonitor(setup.monitorId);
  const box = desk ? deskBox(desk.width) : null;
  const label = mounted ? describeSetup(setup, theme) : "Workspace preview";
  const figureClass = compact ? "room-scene room-scene--compact" : "room-scene";

  return (
    <figure className={figureClass}>
      <svg className="room-scene__svg" viewBox="0 0 960 540" role="img" aria-label={label}>
        <title>{label}</title>
        <RoomBackdrop />
        <RoomWindow uid={uid} />
        {setup.plantId === "snake" ? <ScenePlant x={box ? box.x - 86 : 150} /> : null}
        {box && desk ? <SceneDesk box={box} deskId={desk.id} /> : null}
        {box && monitor.layout !== "none" ? <SceneMonitor box={box} layout={monitor.layout} /> : null}
        {box && setup.lampId === "led" ? <SceneLamp box={box} /> : null}
        {chair ? <SceneChair back={chair.back} /> : null}
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
      <rect className="room-scene__floor" y="434" width="960" height="106" />
      <ellipse className="room-scene__rug" cx="480" cy="502" rx="240" ry="24" />
    </g>
  );
}

// Daylight and moon are both painted. CSS fades the one that does not match data-theme.
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
          <rect x="352" y="62" width="256" height="158" rx="4" />
        </clipPath>
        <mask id={moonId}>
          <circle cx="0" cy="0" r="26" fill="white" />
          <circle cx="14" cy="-8" r="22" fill="black" />
        </mask>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <g className="room-window__sky-day">
          <rect x="352" y="62" width="256" height="158" fill={`url(#${dayId})`} />
          <g transform="translate(530 118)">
            <line className="room-window__ray" x1="-42" y1="0" x2="-30" y2="0" />
            <line className="room-window__ray" x1="30" y1="0" x2="42" y2="0" />
            <line className="room-window__ray" x1="0" y1="-42" x2="0" y2="-30" />
            <line className="room-window__ray" x1="0" y1="30" x2="0" y2="42" />
            <line className="room-window__ray" x1="-28" y1="-28" x2="-20" y2="-20" />
            <line className="room-window__ray" x1="20" y1="20" x2="28" y2="28" />
            <line className="room-window__ray" x1="28" y1="-28" x2="20" y2="-20" />
            <line className="room-window__ray" x1="-20" y1="20" x2="-28" y2="28" />
            <circle className="room-window__sun" r="22" />
          </g>
          <ellipse className="room-window__cloud" cx="410" cy="168" rx="26" ry="11" />
          <ellipse className="room-window__cloud" cx="434" cy="162" rx="20" ry="11" />
          <ellipse className="room-window__cloud" cx="392" cy="164" rx="14" ry="9" />
        </g>
        <g className="room-window__sky-night">
          <rect x="352" y="62" width="256" height="158" fill={`url(#${nightId})`} />
          <circle className="room-window__star" cx="390" cy="92" r="1.7" />
          <circle className="room-window__star" cx="430" cy="118" r="1.3" />
          <circle className="room-window__star" cx="560" cy="96" r="1.8" />
          <circle className="room-window__star" cx="500" cy="84" r="1.2" />
          <circle className="room-window__star" cx="470" cy="140" r="1.4" />
          <circle className="room-window__star" cx="545" cy="156" r="1.1" />
          <circle className="room-window__star" cx="410" cy="150" r="1.2" />
          <g transform="translate(492 132)" mask={`url(#${moonId})`}>
            <circle className="room-window__moon" r="26" />
          </g>
        </g>
      </g>
      <rect className="room-window__frame" x="345" y="55" width="270" height="172" rx="8" />
      <line className="room-window__mullion" x1="480" y1="62" x2="480" y2="220" />
      <rect className="room-window__sill" x="328" y="220" width="304" height="12" rx="3" />
    </g>
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
