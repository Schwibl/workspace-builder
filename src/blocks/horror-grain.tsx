// Night-only film grain. Hidden in the daylight theme by CSS.
export function HorrorGrain() {
  return (
    <div className="horror-grain" aria-hidden="true">
      <svg className="horror-grain__svg">
        <filter id="horror-grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect className="horror-grain__plate" filter="url(#horror-grain-filter)" width="100%" height="100%" />
      </svg>
    </div>
  );
}
