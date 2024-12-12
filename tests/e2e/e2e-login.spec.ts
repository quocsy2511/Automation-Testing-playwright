import { expect, test } from '@playwright/test'

test.describe.parallel('login-flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
  })

  test('invalid input', async ({ page }) => {
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error') //lấy class của thẻ div dùng .alert-error
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
  })

  test('working with login-logout from', async ({ page }) => {
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

    const accountSummary = await page.locator('#account_summary_tab')
    await expect(accountSummary).toBeVisible()

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
