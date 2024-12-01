import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  timeout: 30 * 1000,
  reporter: [["list"], ["html", { outputFolder: "test-results" }]],
  use: {
    headless: false,
    viewport: { width: 1366, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://demo.opencart.com",
  },
});
