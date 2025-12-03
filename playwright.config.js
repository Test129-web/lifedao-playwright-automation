const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  workers: 1,
  fullyParallel: false,
  webServer: null,
  use: {
    headless: true,
    viewport: { width: 1400, height: 900 },
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  }
});
