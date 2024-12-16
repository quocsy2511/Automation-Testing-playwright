//kiểm tra ui thay đổi

import test, { expect } from '@playwright/test'

test.describe('Visual regression testing exmaples', () => {
  test('full page snapshot', async ({ page }) => {
    await page.goto('https://example.com/')

    expect(await page.screenshot()).toMatchSnapshot('homepage.png')
  })

  test('element in page', async ({ page }) => {
    await page.goto('https://example.com/')
    const titlePage = await page.locator('h1')

    expect(await titlePage.screenshot()).toMatchSnapshot('title.png')
  })
})
