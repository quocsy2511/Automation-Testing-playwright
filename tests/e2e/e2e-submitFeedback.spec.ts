import { expect, test } from '@playwright/test'
import { Feedback } from '../../page-objects/FeedBackPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel.only('Feedback form', () => {
  let feedBackPage: Feedback
  let homePage: HomePage

  // test.beforeEach(async ({ page }) => {
  //   await page.goto('http://zero.webappsecurity.com/index.html')
  //   await page.click('#feedback')

  //   await page.fill('#name', 'username')
  //   await page.fill('#email', 'username@example.com')
  //   await page.fill('#subject', 'Feedback')
  //   await page.fill('#comment', 'Feedback')
  // })

  // test('Reset feedback', async ({ page }) => {
  //   await page.click("input[name='clear']") //lấy thông qua các field có sẵn trong element

  //   const userNameField = await page.locator('#name')
  //   const commentField = await page.locator('#comment')

  //   expect(userNameField).toBeEmpty()
  //   expect(commentField).toBeEmpty()
  // })

  // test('Submit feedback', async ({ page }) => {
  //   await page.click("input[name='submit']") //lấy thông qua các field có sẵn trong element
  //   await page.waitForSelector('#feedback-title') //kiểm tra xem phần tử có trên trang không
  // })

  //refactor use POP
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    feedBackPage = new Feedback(page)
    await homePage.visit()
    await homePage.clickFeedbackTab()

    await feedBackPage.fieldFeedback({
      username: 'username',
      comment: 'Feedback',
      email: 'username@example.com',
      subject: 'Feedback',
    })
  })

  test('Reset feedback', async ({ page }) => {
    await feedBackPage.resetFeedback()
    await feedBackPage.assertReset()
  })

  test('Submit feedback', async ({ page }) => {
    await feedBackPage.submitFeedback()
    await feedBackPage.assertSubmit()
  })
})
