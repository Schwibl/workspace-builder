"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/features/theme-context";

// Shared bar: brand, the two screens, and the white/dark switch that drives the window.
export function AppHeader() {
  const path = usePathname();
  const { theme, mounted, setTheme } = useTheme();
  const onStudio = path === "/";
  const onCheckout = path.startsWith("/checkout");

  return (
    <header className="app-header">
      <Link className="app-header__brand" href="/">
        <span className="app-header__mark">monis.rent</span>
        <span className="app-header__tag">Bali workspace rental</span>
      </Link>
      <nav className="app-header__nav" aria-label="Designer">
        <Link
          className={onStudio ? "app-header__link app-header__link--current" : "app-header__link"}
          href="/"
          aria-current={onStudio ? "page" : undefined}
        >
          Design
        </Link>
        <Link
          className={onCheckout ? "app-header__link app-header__link--current" : "app-header__link"}
          href="/checkout"
          aria-current={onCheckout ? "page" : undefined}
        >
          Review
        </Link>
      </nav>
      <div className="app-header__themes" role="group" aria-label="Color theme">
        <button
          type="button"
          className="app-header__theme"
          data-theme-choice="light"
          aria-pressed={mounted ? theme === "light" : undefined}
          onClick={() => setTheme("light")}
        >
          White
        </button>
        <button
          type="button"
          className="app-header__theme"
          data-theme-choice="dark"
          aria-pressed={mounted ? theme === "dark" : undefined}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>
    </header>
  );
}
