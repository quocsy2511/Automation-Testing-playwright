import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Search Result ', () => {
  let homePage: HomePage

  // test.beforeEach(async ({ page }) => {
  //   await page.goto('http://zero.webappsecurity.com/index.html')
  // })

  // test('Should find research result', async ({ page }) => {
  //   await page.fill('#searchTerm', 'bank')
  //   await page.keyboard.press('Enter')

  //   const elements = await page.locator('li > a')
  //   await expect(elements).toHaveCount(2)
  // })

  //refactor use POP
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test('Should find research result', async ({ page }) => {
    await homePage.search({ value: 'bank' })

    const elements = await page.locator('li > a')
    await expect(elements).toHaveCount(2)
  })
})
