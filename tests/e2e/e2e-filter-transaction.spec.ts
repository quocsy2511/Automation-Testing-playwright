import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar, TabNameInitial } from '../../page-objects/components/Navbar'
test.describe('Filter Transactions', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let navbar: Navbar

  // test.beforeEach(async ({ page }) => {
  //   await page.goto('http://zero.webappsecurity.com/index.html')
  //   await page.click('#signin_button')
  //   await page.fill('#user_login', 'username')
  //   await page.fill('#user_password', 'password')
  //   await page.click('text=Sign in')
  //   await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
  // })

  //   test('should transfer funds', async ({ page }) => {
  //     await page.click('#account_activity_tab')

  //     await page.selectOption('#aa_accountId', '2')

  //     const element = await page.locator('#all_transactions_for_account tbody tr')
  //     await expect(element).toHaveCount(3)

  //     await page.selectOption('#aa_accountId', '6')
  //     const noElement = await page.locator('.well')

  //     await expect(noElement).toBeVisible()
  //   })
  // })

  //refactoring with POP
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    navbar = new Navbar(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login({ username: 'username', password: 'password' })
    await loginPage.reloadPage()
  })

  test('should transfer funds', async ({ page }) => {
    // await page.click('#account_activity_tab')
    navbar.clickActiveTab({ tabName: TabNameInitial.ACCOUNT_ACTIVITY })
    await page.selectOption('#aa_accountId', '2')

    const element = await page.locator('#all_transactions_for_account tbody tr')
    await expect(element).toHaveCount(3)

    await page.selectOption('#aa_accountId', '6')
    const noElement = await page.locator('.well')

    await expect(noElement).toBeVisible()
  })
})
