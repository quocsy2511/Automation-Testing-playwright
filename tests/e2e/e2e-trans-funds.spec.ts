import { expect, test } from '@playwright/test'

test.describe.only('Transfer fundamental', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
  })

  test('should transfer funds', async ({ page }) => {
    await page.click('#transfer_funds_tab')
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
