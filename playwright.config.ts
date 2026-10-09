import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 2,
  timeout: 120000,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3001",
    trace: "retain-on-failure",
    reducedMotion: "reduce",
  },
  webServer: {
    command: "node scripts/serve.mjs --port 3001",
    url: "http://127.0.0.1:3001",
    reuseExistingServer: false,
    timeout: 15000,
  },
});
