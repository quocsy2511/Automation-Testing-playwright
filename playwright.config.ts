import { PlaywrightTestConfig } from '@playwright/test'


//config test case
// run with configuration : npx playwright test --config=playwright.config.ts --project=chromium  
const config: PlaywrightTestConfig = {
  timeout: 6000, // thời gian chạy  test case vượt quá thì bị cho là fail
  retries: 0, //số lần kiểm lại nếu test case fail
  use: {
    headless: true, //chay test mà không bật browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000, //thời gian để thực hiện các action click button to select selector
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', //chế độ này chỉ lưu lại khi mà test fail
    screenshot: 'only-on-failure', //chế độ này chỉ lưu lại khi mà test fail
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
