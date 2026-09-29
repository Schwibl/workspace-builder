import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import { AppHeader } from "@/blocks/app-header";
import { SetupProvider } from "@/features/setup-context";
import { ThemeProvider } from "@/features/theme-context";
import "./globals.css";
import "../styles/main.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Design your Bali workspace | monis.rent",
  description:
    "Pick a desk, chair, and accessories, watch the room update, and request a weekly rental in Bali.",
};

// Boot the saved theme before paint so the desk window does not flash the wrong sky.
const themeBoot = `
try {
  var stored = localStorage.getItem("monis-theme");
  var theme = stored === "dark" || stored === "light"
    ? stored
    : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        <ThemeProvider>
          <SetupProvider>
            <AppHeader />
            <main className="flex flex-1 flex-col">{children}</main>
          </SetupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
