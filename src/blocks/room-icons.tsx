export function SceneDesk({ box, deskId }: { box: t_DeskBox; deskId: t_DeskId }) {
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

export function SceneChair({ back }: { back: t_ChairBack }) {
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

  const width = layout === "ultrawide" ? 236 : 156;
  const height = layout === "ultrawide" ? 74 : 90;
  return (
    <g className="scene-monitor">
      <MonitorScreen x={box.x + (box.w - width) / 2} y={box.topY - height - 18} w={width} h={height} />
    </g>
  );
}

export function SceneLamp({ box }: { box: t_DeskBox }) {
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

export function ScenePlant({ x }: { x: number }) {
  return (
    <g className="scene-plant" transform={`translate(${x} 392)`}>
      <path className="scene-plant__pot" d="M16 52 H58 L50 98 H24 Z" />
      <ellipse className="scene-plant__leaf scene-plant__leaf--dark" cx="26" cy="44" rx="14" ry="34" transform="rotate(-24 26 44)" />
      <ellipse className="scene-plant__leaf" cx="50" cy="40" rx="13" ry="36" transform="rotate(22 50 40)" />
      <ellipse className="scene-plant__leaf" cx="38" cy="30" rx="12" ry="40" />
    </g>
  );
}
