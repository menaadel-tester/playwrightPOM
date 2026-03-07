import { defineConfig, devices } from '@playwright/test';

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

const RPConfig = {

endpoint: "https://demo.reportportal.io/api/v1",

apiKey: "mykey_wo7ziRLSQsCxmppYd53GxN25SzFkOSUkJCBDqqQ4owOYVFqkJ4NZkPSf-vZzaJmi",

project: "menaadel-tester_personal",

launch: "Launch name",

description: "My awesome launch",

attributes: [

{

key: "attributeKey",

value: "attrbiuteValue",

},

{

value: "anotherAttrbiuteValue",

},

],

mode: 'DEFAULT',

}
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // mean if the test failed in CI it will be retried 2 times but in local it will not be retried
  /* Opt out of parallel tests on CI. */
 // workers: process.env.CI ? 1 : undefined,
 workers: 2, // it means all test cases will be executed in one worker (one thread ) so it will be executed sequentially not parallel
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['allure-playwright'], ['@reportportal/agent-js-playwright', RPConfig]],

  // expect time out should be under the reporter 


  expect:{

    timeout: 7000 , //default time out for the asserations 

  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
   baseURL: 'https://opensource-demo.orangehrmlive.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'only-on-failure',
    video:'retain-on-failure',
    actionTimeout: 6000, // it means any action should be completed in 6 seconds like click , fill .... etc

  },

  /* Configure projects for major browsers */
  projects: [
   {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 1920, height: 1080 },
      headless: false,
    },
  }

   // {
    // name: 'firefox',
     // use: { ...devices['Desktop Firefox'] },
    //},

    //{
    //name: 'webkit',
    //use: { ...devices['Desktop Safari'] },
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
