import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar, TabNameInitial } from '../../page-objects/components/Navbar'

test.describe('Transfer fundamental', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let navbar: Navbar

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
    navbar.clickActiveTab({ tabName: TabNameInitial.TRANSFER_FUNDS })

    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '2')
    await page.fill('#tf_amount', '100')
    await page.fill('#tf_description', 'check')
    await page.click('#btn_submit')

    const verify = await page.locator('h2.board-header')
    await expect(verify).toContainText('Verify')

    await page.click('#btn_submit')
    const alertSuccess = await page.locator('.alert-success')

    await expect(alertSuccess).toContainText(
      'You successfully submitted your transaction.',
    )
  })
})
