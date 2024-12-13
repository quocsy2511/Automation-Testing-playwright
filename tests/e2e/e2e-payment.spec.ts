import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar, TabNameInitial } from '../../page-objects/components/Navbar'

test.describe('Payment bills', () => {
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

  // test('should saved payees', async ({ page }) => {
  //   // await page.click('#pay_bills_tab')
  //   navbar.clickActiveTab({ tabName: TabNameInitial.PAY_BILL })

  //   await page.selectOption('#sp_payee', 'apple')
  //   await page.click('#sp_get_payee_details')
  //   const payeeDetails = await page.locator('#sp_payee_details')

  //   await expect(payeeDetails).toBeVisible()

  //   await page.selectOption('#sp_account', '2')
  //   await page.fill('#sp_amount', '100')
  //   await page.fill('#sp_date', '2024-12-03')
  //   await page.fill('#sp_description', '123456789')

  //   await page.click('#pay_saved_payees')

  //   const success = await page.locator('#alert_content > span')
  //   await expect(success).toContainText(
  //     'The payment was successfully submitted.',
  //   )
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

  test('should saved payees', async ({ page }) => {
    // await page.click('#pay_bills_tab')
    navbar.clickActiveTab({ tabName: TabNameInitial.PAY_BILL })

    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    const payeeDetails = await page.locator('#sp_payee_details')

    await expect(payeeDetails).toBeVisible()

    await page.selectOption('#sp_account', '2')
    await page.fill('#sp_amount', '100')
    await page.fill('#sp_date', '2024-12-03')
    await page.fill('#sp_description', '123456789')

    await page.click('#pay_saved_payees')

    const success = await page.locator('#alert_content > span')
    await expect(success).toContainText(
      'The payment was successfully submitted.',
    )
  })
})
