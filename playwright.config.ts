import { PlaywrightTestConfig } from '@playwright/test'


//config test case
// run with configuration : npx playwright test --config=playwright.config.ts --project=chromium  
const config: PlaywrightTestConfig = {
  timeout: 6000, // thời gian chạy toàn bộ test case
  retries: 0, //số lần kiểm lại nếu test case fail
  use: {
    headless: true, //chay test mà không bật browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000, //thời gian để thực test case từ click button to select selector
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  //nền tảng trinh duyet chạy test
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config
