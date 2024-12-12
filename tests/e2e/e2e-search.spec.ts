import { expect, test } from '@playwright/test'

test.describe('Search Result ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
  })

  test('Should find research result', async ({ page }) => {
    await page.fill('#searchTerm', 'bank')
    await page.keyboard.press('Enter')

    const elements = await page.locator('li > a')
    await expect(elements).toHaveCount(2)
  })
})
