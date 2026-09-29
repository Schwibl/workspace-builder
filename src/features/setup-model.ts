import {
  findChair,
  findDesk,
  findLamp,
  findMonitor,
  findPlant,
  isChairId,
  isDeskId,
  isLampId,
  isMonitorId,
  isPlantId,
} from "@/features/catalog";

export const emptySetup: t_Setup = {
  deskId: null,
  chairId: null,
  monitorId: "none",
  lampId: "none",
  plantId: "none",
};

const storageKey = "monis-setup";

// Drop unknown ids from localStorage instead of crashing the room
export function sanitizeSetup(value: unknown): t_Setup {
  if (!value || typeof value !== "object") {
    return emptySetup;
  }
  const raw = value as Partial<t_Setup>;
  return {
    deskId: isDeskId(raw.deskId) ? raw.deskId : null,
    chairId: isChairId(raw.chairId) ? raw.chairId : null,
    monitorId: isMonitorId(raw.monitorId) ? raw.monitorId : "none",
    lampId: isLampId(raw.lampId) ? raw.lampId : "none",
    plantId: isPlantId(raw.plantId) ? raw.plantId : "none",
  };
}

export function readStoredSetup(): t_Setup {
  if (typeof window === "undefined") {
    return emptySetup;
  }
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return emptySetup;
    }
    return sanitizeSetup(JSON.parse(raw) as unknown);
  } catch {
    return emptySetup;
  }
}

export function writeStoredSetup(setup: t_Setup): void {
  window.localStorage.setItem(storageKey, JSON.stringify(setup));
}

export function canRent(setup: t_Setup): boolean {
  return setup.deskId !== null && setup.chairId !== null;
}

export function isSetupEmpty(setup: t_Setup): boolean {
  return (
    setup.deskId === null &&
    setup.chairId === null &&
    setup.monitorId === "none" &&
    setup.lampId === "none" &&
    setup.plantId === "none"
  );
}

// Priced rows only. "None" accessories stay off the summary.
export function lineItems(setup: t_Setup): t_LineItem[] {
  const items: t_LineItem[] = [];
  const desk = findDesk(setup.deskId);
  const chair = findChair(setup.chairId);
  const monitor = findMonitor(setup.monitorId);
  const lamp = findLamp(setup.lampId);
  const plant = findPlant(setup.plantId);

  if (desk) {
    items.push({ slot: "Desk", name: desk.name, weeklyUsd: desk.weeklyUsd });
  }
  if (chair) {
    items.push({ slot: "Chair", name: chair.name, weeklyUsd: chair.weeklyUsd });
  }
  if (monitor.weeklyUsd > 0) {
    items.push({ slot: "Monitor", name: monitor.name, weeklyUsd: monitor.weeklyUsd });
  }
  if (lamp.weeklyUsd > 0) {
    items.push({ slot: "Lamp", name: lamp.name, weeklyUsd: lamp.weeklyUsd });
  }
  if (plant.weeklyUsd > 0) {
    items.push({ slot: "Plant", name: plant.name, weeklyUsd: plant.weeklyUsd });
  }
  return items;
}

export function weeklyTotal(setup: t_Setup): number {
  return lineItems(setup).reduce((sum, item) => sum + item.weeklyUsd, 0);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Spoken name for the room. The window draws the sky; this line does not.
export function describeSetup(setup: t_Setup): string {
  const names = lineItems(setup).map((item) => item.name);
  if (names.length === 0) {
    return "Workspace preview. Open slots are marked with a plus.";
  }
  return `Workspace preview. ${names.join(", ")}.`;
}
