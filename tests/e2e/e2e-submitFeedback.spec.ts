import { expect, test } from '@playwright/test'

test.describe.parallel.only('Feedback form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#feedback')

    await page.fill('#name', 'username')
    await page.fill('#email', 'username@example.com')
    await page.fill('#subject', 'Feedback')
    await page.fill('#comment', 'Feedback')
  })

  test('Reset feedback', async ({ page }) => {
    await page.click("input[name='clear']") //lấy thông qua các field có sẵn trong element

    const userNameField = await page.locator('#name')
    const commentField = await page.locator('#comment')

    expect(userNameField).toBeEmpty()
    expect(commentField).toBeEmpty()
  })

  test('Submit feedback', async ({ page }) => {
    await page.click("input[name='submit']") //lấy thông qua các field có sẵn trong element

    await page.waitForSelector('#feedback-title') //kiểm tra xem phần tử có trên trang không
  })
})
