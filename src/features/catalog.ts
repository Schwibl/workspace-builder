// Static Bali catalog. Prices are weekly USD for this designer, not a live inventory feed.

export const desks: t_DeskOption[] = [
  {
    id: "writing",
    name: "Fixed writing desk",
    blurb: "110×60 cm top with one drawer. Stays put. No motor, no crank.",
    weeklyUsd: 12,
    width: "compact",
  },
  {
    id: "mechanical",
    name: "Mechanical adjustable",
    blurb: "Hand crank, 120×70 cm, height 70–120 cm. No outlet needed.",
    weeklyUsd: 18,
    width: "compact",
  },
  {
    id: "bamboo",
    name: "Bamboo desk",
    blurb: "Pale 140×70 cm top. Light enough for a villa, wide enough for a laptop and notes.",
    weeklyUsd: 22,
    width: "wide",
  },
  {
    id: "electric",
    name: "Electric adjustable",
    blurb: "Quiet motor, 140×70 cm, height 70–118 cm. Sit-stand through the day.",
    weeklyUsd: 28,
    width: "wide",
  },
  {
    id: "dual-motor",
    name: "Dual-motor standing",
    blurb: "160×70 cm top, 120 kg load, faster lift. The wide trading desk.",
    weeklyUsd: 36,
    width: "full",
  },
];

export const chairs: t_ChairOption[] = [
  {
    id: "stool",
    name: "Drafting stool",
    blurb: "Round seat, no back. Perch height for a short session at the desk.",
    weeklyUsd: 6,
    back: "none",
  },
  {
    id: "task",
    name: "Compact task",
    blurb: "Lower back and a lighter seat. Better when the room is small.",
    weeklyUsd: 9,
    back: "compact",
  },
  {
    id: "mesh",
    name: "Mesh ergonomic",
    blurb: "Breathable back, headrest, and a five-star base for long writing days.",
    weeklyUsd: 14,
    back: "tall",
  },
  {
    id: "executive",
    name: "Leather executive",
    blurb: "Tall dark back and a heavier seat. The chair that stays in the study.",
    weeklyUsd: 22,
    back: "tall",
  },
];

export const monitors: t_MonitorOption[] = [
  {
    id: "none",
    name: "No monitor",
    blurb: "Laptop only. Add a screen later if you need one.",
    weeklyUsd: 0,
    layout: "none",
  },
  {
    id: "fhd-24",
    name: "24″ display",
    blurb: "A smaller single screen. Enough for one window and a chat.",
    weeklyUsd: 6,
    layout: "small",
  },
  {
    id: "fhd-27",
    name: "27″ display",
    blurb: "One sharp screen for code, calls, and a browser beside it.",
    weeklyUsd: 8,
    layout: "single",
  },
  {
    id: "fhd-32",
    name: "32″ display",
    blurb: "One large panel. Room for an editor and a preview without a second stand.",
    weeklyUsd: 14,
    layout: "large",
  },
  {
    id: "ultrawide",
    name: "34″ ultrawide",
    blurb: "A single curved-width canvas for timelines and side-by-side docs.",
    weeklyUsd: 18,
    layout: "ultrawide",
  },
  {
    id: "dual-27",
    name: "Dual 27″",
    blurb: "Two displays. Reference on the left, work on the right.",
    weeklyUsd: 16,
    layout: "dual",
  },
];

export const lamps: t_LampOption[] = [
  {
    id: "none",
    name: "No lamp",
    blurb: "Daylight from the window is enough.",
    weeklyUsd: 0,
  },
  {
    id: "clamp",
    name: "Clamp lamp",
    blurb: "A short arm clipped at the right edge. A tight pool for the keyboard.",
    weeklyUsd: 3,
  },
  {
    id: "led",
    name: "Smart LED lamp",
    blurb: "Warm pool of light on the right side of the desk for late sessions.",
    weeklyUsd: 4,
  },
  {
    id: "arc",
    name: "Arc lamp",
    blurb: "A taller arm that reaches over the desktop from the right.",
    weeklyUsd: 7,
  },
];

export const plants: t_PlantOption[] = [
  {
    id: "none",
    name: "No plant",
    blurb: "Keep the floor clear.",
    weeklyUsd: 0,
  },
  {
    id: "cactus",
    name: "Column cactus",
    blurb: "One upright stem in a small pot. Almost no watering between stays.",
    weeklyUsd: 2,
  },
  {
    id: "snake",
    name: "Snake plant",
    blurb: "A pot on the floor to the left of the desk. Hard to kill in a villa.",
    weeklyUsd: 3,
  },
  {
    id: "monstera",
    name: "Monstera",
    blurb: "Broad split leaves. The pot sits left of the desk and reads from the door.",
    weeklyUsd: 5,
  },
];

export const areas: t_AreaOption[] = [
  { id: "canggu", name: "Canggu" },
  { id: "ubud", name: "Ubud" },
  { id: "seminyak", name: "Seminyak" },
  { id: "uluwatu", name: "Uluwatu" },
  { id: "sanur", name: "Sanur" },
];

export const categories: { id: t_CategoryId; label: string }[] = [
  { id: "desk", label: "Desk" },
  { id: "chair", label: "Chair" },
  { id: "monitor", label: "Monitor" },
  { id: "lamp", label: "Lamp" },
  { id: "plant", label: "Plant" },
];

// ID guards — catalog rows are the source of truth

export function isDeskId(value: unknown): value is t_DeskId {
  return desks.some((item) => item.id === value);
}

export function isChairId(value: unknown): value is t_ChairId {
  return chairs.some((item) => item.id === value);
}

export function isMonitorId(value: unknown): value is t_MonitorId {
  return monitors.some((item) => item.id === value);
}

export function isLampId(value: unknown): value is t_LampId {
  return lamps.some((item) => item.id === value);
}

export function isPlantId(value: unknown): value is t_PlantId {
  return plants.some((item) => item.id === value);
}

export function isAreaId(value: unknown): value is t_AreaId {
  return areas.some((item) => item.id === value);
}

export function isCategoryId(value: unknown): value is t_CategoryId {
  return categories.some((item) => item.id === value);
}

export function findDesk(id: t_DeskId | null): t_DeskOption | null {
  if (!id) {
    return null;
  }
  return desks.find((item) => item.id === id) ?? null;
}

export function findChair(id: t_ChairId | null): t_ChairOption | null {
  if (!id) {
    return null;
  }
  return chairs.find((item) => item.id === id) ?? null;
}

export function findMonitor(id: t_MonitorId): t_MonitorOption {
  return monitors.find((item) => item.id === id) ?? monitors[0];
}

export function findLamp(id: t_LampId): t_LampOption {
  return lamps.find((item) => item.id === id) ?? lamps[0];
}

export function findPlant(id: t_PlantId): t_PlantOption {
  return plants.find((item) => item.id === id) ?? plants[0];
}

export function findArea(id: t_AreaId): t_AreaOption {
  return areas.find((item) => item.id === id) ?? areas[0];
}
