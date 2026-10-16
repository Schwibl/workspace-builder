import { defineConfig, devices } from "@playwright/test";

// Runs against `next start` on the built app (run `npm run build` first).
export default defineConfig({
  testDir: "e2e",
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: { baseURL: "http://127.0.0.1:4317", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm start",
    url: "http://127.0.0.1:4317",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
