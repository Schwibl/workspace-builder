"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { emptySetup, readStoredSetup, writeStoredSetup } from "@/features/setup-model";

type t_SetupContext = {
  setup: t_Setup;
  ready: boolean;
  setDesk: (id: t_DeskId) => void;
  setChair: (id: t_ChairId) => void;
  setMonitor: (id: t_MonitorId) => void;
  setLamp: (id: t_LampId) => void;
  setPlant: (id: t_PlantId) => void;
  reset: () => void;
};

const SetupContext = createContext<t_SetupContext | null>(null);

// External store so a saved setup can replace the server render without an effect.
let snapshot: t_Setup = emptySetup;
let hydrated = false;
const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

function hydrate(): void {
  if (hydrated) {
    return;
  }
  snapshot = readStoredSetup();
  hydrated = true;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getClientSnapshot(): t_Setup {
  hydrate();
  return snapshot;
}

function getServerSnapshot(): t_Setup {
  return emptySetup;
}

function getClientReady(): boolean {
  hydrate();
  return true;
}

function getServerReady(): boolean {
  return false;
}

function commit(next: t_Setup): void {
  snapshot = next;
  hydrated = true;
  writeStoredSetup(next);
  emit();
}

function setDesk(id: t_DeskId): void {
  commit({ ...getClientSnapshot(), deskId: id });
}

function setChair(id: t_ChairId): void {
  commit({ ...getClientSnapshot(), chairId: id });
}

function setMonitor(id: t_MonitorId): void {
  commit({ ...getClientSnapshot(), monitorId: id });
}

function setLamp(id: t_LampId): void {
  commit({ ...getClientSnapshot(), lampId: id });
}

function setPlant(id: t_PlantId): void {
  commit({ ...getClientSnapshot(), plantId: id });
}

function reset(): void {
  commit(emptySetup);
}

// One setup for the studio and the checkout. Persisted so a refresh keeps the room.
export function SetupProvider({ children }: { children: ReactNode }) {
  const setup = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(subscribe, getClientReady, getServerReady);

  const value = useMemo<t_SetupContext>(
    () => ({
      setup,
      ready,
      setDesk,
      setChair,
      setMonitor,
      setLamp,
      setPlant,
      reset,
    }),
    [setup, ready],
  );

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>;
}

export function useSetup(): t_SetupContext {
  const value = useContext(SetupContext);
  if (!value) {
    throw new Error("useSetup must be used inside SetupProvider");
  }
  return value;
}
