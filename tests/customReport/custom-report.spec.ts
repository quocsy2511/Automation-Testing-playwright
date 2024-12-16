import test, { expect } from '@playwright/test'

test.describe.only('Custom report', () => {
  test('Custom report', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    const title = await page.locator('.navbar__inner .navbar__title')
    expect(title).toContainText('Playwright')
  })
})
