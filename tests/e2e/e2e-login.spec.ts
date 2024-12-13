import { expect, test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel.only('login-flow', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  //not use POP

  // test.beforeEach(async ({ page }) => {
  //   await page.goto('http://zero.webappsecurity.com/')
  //   await page.click('#signin_button')
  // })

  // test('invalid input', async ({ page }) => {
  //   await page.click('text=Sign in')

  //   const errorMessage = await page.locator('.alert-error') //lấy class của thẻ div dùng .alert-error
  //   await expect(errorMessage).toContainText('Login and/or password are wrong.')
  // })

  // test('working with login-logout from', async ({ page }) => {
  //   await page.fill('#user_login', 'username')
  //   await page.fill('#user_password', 'password')
  //   await page.click('text=Sign in')
  //   await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

  //   const accountSummary = await page.locator('#account_summary_tab')
  //   await expect(accountSummary).toBeVisible()

  //   await page.goto('http://zero.webappsecurity.com/logout.html')
  //   await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  // })

  //refactor use page object pattern
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test('Invalid input', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login({ username: '', password: '' })
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
