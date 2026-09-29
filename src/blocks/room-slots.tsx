import type { ReactNode } from "react";

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

export function DeskSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
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

export function ChairSilhouette({ onChoose }: { onChoose: () => void }) {
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

export function MonitorSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
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

export function LampSilhouette({ box, onChoose }: { box: t_DeskBox; onChoose: () => void }) {
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

export function PlantSilhouette({ x, onChoose }: { x: number; onChoose: () => void }) {
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
