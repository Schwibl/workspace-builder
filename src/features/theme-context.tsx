"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const themeStorageKey = "monis-theme";

type t_ThemeContext = {
  theme: t_Theme;
  mounted: boolean;
  setTheme: (theme: t_Theme) => void;
};

const ThemeContext = createContext<t_ThemeContext | null>(null);

// The boot script owns the attribute before paint. This store only mirrors it for text.
let themeSnapshot: t_Theme = "light";
let themeHydrated = false;
const themeListeners = new Set<() => void>();

function emitTheme(): void {
  themeListeners.forEach((listener) => listener());
}

function hydrateTheme(): void {
  if (themeHydrated) {
    return;
  }
  themeSnapshot = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  themeHydrated = true;
}

function subscribeTheme(listener: () => void): () => void {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
}

function getThemeSnapshot(): t_Theme {
  hydrateTheme();
  return themeSnapshot;
}

function getThemeServer(): t_Theme {
  return "light";
}

function getMountedSnapshot(): boolean {
  hydrateTheme();
  return true;
}

function getMountedServer(): boolean {
  return false;
}

function setTheme(next: t_Theme): void {
  const previous = document.documentElement.dataset.theme;
  themeSnapshot = next;
  themeHydrated = true;
  document.documentElement.dataset.theme = next;
  window.localStorage.setItem(themeStorageKey, next);
  emitTheme();
  if (next === "dark" && previous !== "dark") {
    playScare();
  }
  if (next !== "dark") {
    document.documentElement.classList.remove("theme-scare");
  }
}

// A short vignette. Only the dark theme plays it.
export function playScare(): void {
  if (document.documentElement.dataset.theme !== "dark") {
    return;
  }
  const root = document.documentElement;
  root.classList.remove("theme-scare");
  void root.offsetWidth;
  root.classList.add("theme-scare");
  window.setTimeout(() => root.classList.remove("theme-scare"), 900);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServer);
  const mounted = useSyncExternalStore(subscribeTheme, getMountedSnapshot, getMountedServer);
  const value = useMemo(() => ({ theme, mounted, setTheme }), [theme, mounted]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): t_ThemeContext {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return value;
}
