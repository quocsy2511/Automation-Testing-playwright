import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar, TabNameInitial } from '../../page-objects/components/Navbar'
test.describe('Purchase Foreign Currency', () => {
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

  // test('should purchase cash to new cash Foreign Currency', async ({
  //   page,
  // }) => {
  //   await page.click('#pay_bills_tab')
  //   await page.click('text=Purchase Foreign Currency')

  //   await page.selectOption('#pc_currency', 'EUR')
  //   const sellRate = await page.locator('#sp_sell_rate')

  //   await expect(sellRate).toBeVisible()
  //   await expect(sellRate).toContainText('1 euro (EUR)')

  //   await page.fill('#pc_amount', '100')

  //   //test radio us
  //   await page.click('#pc_inDollars_true')
  //   await page.click('#pc_calculate_costs')
  //   const convertAmountUS = await page.locator('#pc_conversion_amount')
  //   await expect(convertAmountUS).toBeVisible()
  //   await expect(convertAmountUS).toContainText('100.00 U.S. dollar (USD)')

  //   //test radio euro
  //   await page.click('#pc_inDollars_false')
  //   await page.click('#pc_calculate_costs')
  //   const convertAmountEUR = await page.locator('#pc_conversion_amount')
  //   await expect(convertAmountEUR).toBeVisible()
  //   await expect(convertAmountUS).toContainText('100.00 euro (EUR)')

  //   await page.click('#purchase_cash')

  //   const success = await page.locator('#alert_content')
  //   await expect(success).toContainText('successfully purchased')
  // })

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    navbar = new Navbar(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login({ username: 'username', password: 'password' })
    await loginPage.reloadPage()
  })

  test('should purchase cash to new cash Foreign Currency', async ({
    page,
  }) => {
    navbar.clickActiveTab({ tabName: TabNameInitial.PAY_BILL })
    await page.click('text=Purchase Foreign Currency')

    await page.selectOption('#pc_currency', 'EUR')
    const sellRate = await page.locator('#sp_sell_rate')

    await expect(sellRate).toBeVisible()
    await expect(sellRate).toContainText('1 euro (EUR)')

    await page.fill('#pc_amount', '100')

    //test radio us
    await page.click('#pc_inDollars_true')
    await page.click('#pc_calculate_costs')
    const convertAmountUS = await page.locator('#pc_conversion_amount')
    await expect(convertAmountUS).toBeVisible()
    await expect(convertAmountUS).toContainText('100.00 U.S. dollar (USD)')

    //test radio euro
    await page.click('#pc_inDollars_false')
    await page.click('#pc_calculate_costs')
    const convertAmountEUR = await page.locator('#pc_conversion_amount')
    await expect(convertAmountEUR).toBeVisible()
    await expect(convertAmountUS).toContainText('100.00 euro (EUR)')

    await page.click('#purchase_cash')

    const success = await page.locator('#alert_content')
    await expect(success).toContainText('successfully purchased')
  })
})
