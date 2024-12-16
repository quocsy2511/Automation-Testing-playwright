import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel('login-flow', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  //refactor use page object pattern
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test('Invalid input', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login({ username: '', password: '' })
    await loginPage.wait(3000)
    await loginPage.assertErrorMessage()
  })

  test('Working with login-logout from', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login({ username: 'username', password: 'password' })
    await loginPage.reloadPage()

    const accountSummary = await page.locator('#account_summary_tab')
    await expect(accountSummary).toBeVisible()

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
