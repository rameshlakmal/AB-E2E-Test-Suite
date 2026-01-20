import { defineConfig } from "@playwright/test";
import { OrtoniReportConfig } from "ortoni-report";

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "always",
  folderPath: "report-db",
  filename: "index.html",
  title: "Ortoni Test Report",
  projectName: "Ortoni-Report",
};
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? "blob" : "html",

  // reporter: [
  //   ["list"],
  //   ["dot"],
  //   ["ortoni-report", reportConfig],
  //   // ["aiotests-playwright-reporter", { aioConfig: aioConfigDetails }],
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://staging.analystbuilder.com/",

    trace:
      "on-first-retry" /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */,
    video:
      "retain-on-failure" /* Record video for failed test. See https://playwright.dev/docs/test-reporters */,
    screenshot:
      "only-on-failure" /* Take screenshot on failure. See https://playwright.dev/docs/test-reporters */,

    headless: false,

    httpCredentials: {
      username: "te3ter",
      password: "22JJ33kk",
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      use: {
        viewport: null,
        channel: "chrome",
        launchOptions: { args: ["--start-maximized"] },
      },
    },
    {
      name: "guest",
      testMatch: /.*\.Guest\.spec\.ts/,

      use: {
        viewport: null,
        channel: "chrome",
        launchOptions: { args: ["--start-maximized"] },
      },
      dependencies: ["setup"],
    },

    {
      name: "user",
      testMatch: /.*\.Member\.spec\.ts/,
      use: {
        viewport: null,
        channel: "chrome",
        storageState: "./.auth/user.json",
        launchOptions: { args: ["--start-maximized"] },
      },
      dependencies: ["setup"],
    },

    {
      name: "purchased",
      testMatch: /.*\.Purchased\.spec\.ts/,
      use: {
        viewport: null,
        channel: "chrome",
        storageState: "./.auth/purchased.json",
        launchOptions: { args: ["--start-maximized"] },
      },
      dependencies: ["setup"],
    },
  ],

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
