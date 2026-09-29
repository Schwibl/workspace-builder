// Daylight and moon are both painted. CSS fades the one that does not match data-theme.
export function RoomWindow({ uid }: { uid: string }) {
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
          <ellipse className="room-window__fog" cx="340" cy="198" rx="160" ry="26" />
          <ellipse className="room-window__fog" cx="640" cy="168" rx="130" ry="20" />
          <circle className="room-window__halo" cx="470" cy="130" r="62" />
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
