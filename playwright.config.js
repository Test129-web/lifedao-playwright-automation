module.exports = {
  timeout: 60000,
  use: {
    headless: true,
    viewport: { width: 1400, height: 900 },
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  }
};
