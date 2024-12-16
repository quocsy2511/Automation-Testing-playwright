import test from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe('login-flow', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test('Login form', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.snapshotLogin()
  })

  test('Error message', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login({ username: '', password: '' })
    await loginPage.snapshotErrorMessage()
  })
})
