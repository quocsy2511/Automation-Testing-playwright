import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar, TabNameInitial } from '../../page-objects/components/Navbar'
import { PaymentPage } from '../../page-objects/PaymentPage'

test.describe('Payment bills', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let navbar: Navbar
  let paymentPage: PaymentPage
  //refactoring with POP
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    navbar = new Navbar(page)
    paymentPage = new PaymentPage(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login({ username: 'username', password: 'password' })
    await loginPage.reloadPage()
    await navbar.clickActiveTab({ tabName: TabNameInitial.PAY_BILL })
  })

  test('should saved payees', async ({ page }) => {
    await paymentPage.fillForm({
      account: '2',
      amount: '100',
      date: '2024-12-03',
      description: '123456789',
      payee: 'apple',
    })

    await paymentPage.clickPayeeDetail()
    await paymentPage.assertPayeeDetail()
    await paymentPage.submitForm()
    await paymentPage.assertSuccess()
  })
})
