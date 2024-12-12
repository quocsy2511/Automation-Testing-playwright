export const loadingPage = async (page: any) => {
  await page.goto('https://example.com/')
}

export const assertTitle = async (page: any) => {
  await page.waitForSelector('h1')
}
