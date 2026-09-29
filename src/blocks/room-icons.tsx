// Explicit furniture icons. Each catalog id has its own silhouette so the room reads the choice.

export function SceneDesk({ box, deskId }: { box: t_DeskBox; deskId: t_DeskId }) {
  const legWidth = deskId === "dual-motor" ? 22 : 12;
  const bamboo = deskId === "bamboo";
  const deskClass = bamboo ? "scene-desk scene-desk--bamboo" : "scene-desk";

  return (
    <g className={deskClass} transform={`translate(${box.x} ${box.topY})`}>
      <rect className="scene-desk__top" width={box.w} height="16" rx="3" />
      <rect className="scene-desk__edge" x="8" y="16" width={box.w - 16} height="8" />
      <rect className="scene-desk__leg" x="22" y="24" width={legWidth} height="98" rx="2" />
      <rect className="scene-desk__leg" x={box.w - 22 - legWidth} y="24" width={legWidth} height="98" rx="2" />
      {deskId === "writing" ? (
        <g>
          <rect className="scene-desk__drawer" x="40" y="26" width="64" height="26" rx="2" />
          <rect className="scene-desk__handle" x="66" y="36" width="12" height="4" rx="1" />
        </g>
      ) : null}
      {deskId === "mechanical" ? (
        <circle className="scene-desk__crank" cx={box.w - 22 - legWidth / 2} cy="78" r="8" />
      ) : null}
      {deskId === "electric" ? (
        <rect className="scene-desk__panel" x={box.w / 2 - 18} y="16" width="36" height="8" rx="2" />
      ) : null}
    </g>
  );
}

export function SceneChair({ back, chairId }: { back: t_ChairBack; chairId: t_ChairId }) {
  const tall = back === "tall";
  const stool = back === "none";
  const leather = chairId === "executive";
  const chairClass = leather ? "scene-chair scene-chair--leather" : "scene-chair";

  return (
    <g className={chairClass}>
      <ellipse className="scene-chair__base" cx="480" cy="508" rx={stool ? 40 : 56} ry="10" />
      <circle className="scene-chair__wheel" cx={stool ? 448 : 434} cy="512" r="6" />
      <circle className="scene-chair__wheel" cx={stool ? 512 : 526} cy="512" r="6" />
      <rect className="scene-chair__pole" x="474" y="456" width="12" height="50" rx="4" />
      {stool ? (
        <circle className="scene-chair__seat" cx="480" cy="448" r="34" />
      ) : (
        <ellipse className="scene-chair__seat" cx="480" cy="452" rx="62" ry="16" />
      )}
      {stool ? null : (
        <rect
          className="scene-chair__back"
          x="444"
          y={tall ? 356 : 392}
          width="72"
          height={tall ? 96 : 58}
          rx="18"
        />
      )}
      {stool || leather ? null : (
        <path
          className="scene-chair__mesh"
          d={
            tall
              ? "M456 376 H504 M456 396 H504 M456 416 H504 M456 436 H504"
              : "M456 408 H504 M456 428 H504"
          }
        />
      )}
      {tall && !stool ? <ellipse className="scene-chair__head" cx="480" cy="346" rx="24" ry="12" /> : null}
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

export function SceneMonitor({ box, layout }: { box: t_DeskBox; layout: t_MonitorLayout }) {
  if (layout === "dual") {
    const y = box.topY - 108;
    return (
      <g className="scene-monitor">
        <MonitorScreen x={box.x + box.w / 2 - 132} y={y} w={112} h={78} />
        <MonitorScreen x={box.x + box.w / 2 + 20} y={y} w={112} h={78} />
      </g>
    );
  }

  // One panel. Size follows the catalog row: 24″, 27″, 32″, or ultrawide.
  const width = layout === "ultrawide" ? 236 : layout === "large" ? 190 : layout === "small" ? 120 : 156;
  const height = layout === "ultrawide" ? 74 : layout === "large" ? 100 : layout === "small" ? 70 : 90;
  return (
    <g className="scene-monitor">
      <MonitorScreen x={box.x + (box.w - width) / 2} y={box.topY - height - 18} w={width} h={height} />
    </g>
  );
}

export function SceneLamp({ box, lampId }: { box: t_DeskBox; lampId: t_LampId }) {
  const x = box.x + box.w - 28;
  const y = box.topY;
  const reach = lampId === "clamp" ? 36 : lampId === "arc" ? 108 : 72;
  const headWidth = lampId === "clamp" ? 26 : lampId === "arc" ? 52 : 40;
  const lampClass =
    lampId === "clamp" ? "scene-lamp scene-lamp--clamp" : lampId === "arc" ? "scene-lamp scene-lamp--arc" : "scene-lamp";

  return (
    <g className={lampClass}>
      <ellipse className="scene-lamp__glow" cx={x - headWidth / 2} cy={y - 4} rx={lampId === "arc" ? 56 : 42} ry="14" />
      <rect className="scene-lamp__base" x={x - 18} y={y - 6} width="30" height="6" rx="2" />
      <path className="scene-lamp__arm" d={`M ${x - 4} ${y - 6} V ${y - reach} H ${x - headWidth + 8}`} />
      <rect className="scene-lamp__head" x={x - headWidth - 4} y={y - reach - 10} width={headWidth} height="12" rx="4" />
    </g>
  );
}

export function ScenePlant({ x, plantId }: { x: number; plantId: t_PlantId }) {
  if (plantId === "cactus") {
    return (
      <g className="scene-plant scene-plant--cactus" transform={`translate(${x} 428)`}>
        <path className="scene-plant__pot" d="M24 34 H50 L44 70 H30 Z" />
        <rect className="scene-plant__stem" x="31" y="2" width="12" height="36" rx="6" />
      </g>
    );
  }

  if (plantId === "monstera") {
    return (
      <g className="scene-plant scene-plant--monstera" transform={`translate(${x} 348)`}>
        <path className="scene-plant__pot" d="M16 72 H72 L62 120 H26 Z" />
        <ellipse
          className="scene-plant__leaf scene-plant__leaf--dark"
          cx="24"
          cy="58"
          rx="30"
          ry="20"
          transform="rotate(-32 24 58)"
        />
        <ellipse className="scene-plant__leaf" cx="64" cy="52" rx="32" ry="20" transform="rotate(30 64 52)" />
        <ellipse className="scene-plant__leaf" cx="44" cy="34" rx="26" ry="22" />
      </g>
    );
  }

  return (
    <g className="scene-plant" transform={`translate(${x} 392)`}>
      <path className="scene-plant__pot" d="M16 52 H58 L50 98 H24 Z" />
      <ellipse className="scene-plant__leaf scene-plant__leaf--dark" cx="26" cy="44" rx="14" ry="34" transform="rotate(-24 26 44)" />
      <ellipse className="scene-plant__leaf" cx="50" cy="40" rx="13" ry="36" transform="rotate(22 50 40)" />
      <ellipse className="scene-plant__leaf" cx="38" cy="30" rx="12" ry="40" />
    </g>
  );
}
