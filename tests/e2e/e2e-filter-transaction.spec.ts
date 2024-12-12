import { expect, test } from '@playwright/test'
test.describe.only('Filter Transactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
  })

  test('should transfer funds', async ({ page }) => {
    await page.click('#account_activity_tab')
    await page.selectOption('#aa_accountId', '2')

    const element = await page.locator('#all_transactions_for_account tbody tr')
    await expect(element).toHaveCount(3)

    await page.selectOption('#aa_accountId', '6')
    const noElement = await page.locator('.well')

    await expect(noElement).toBeVisible()
  })
})
