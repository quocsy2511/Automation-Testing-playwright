import { Locator, Page, expect } from '@playwright/test'

type FeedbackProps = {
  username: string
  email: string
  subject: string
  comment: string
}

export class Feedback {
  readonly page: Page
  readonly usernameInput: Locator
  readonly emailInput: Locator
  readonly subjectInput: Locator
  readonly commentInput: Locator
  readonly resetButton: Locator
  readonly submitButton: Locator
  readonly feedBackTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('#name')
    this.emailInput = page.locator('#email')
    this.subjectInput = page.locator('#subject')
    this.commentInput = page.locator('#comment')
    this.resetButton = page.locator("input[name='clear']")
    this.submitButton = page.locator("input[name='submit']")
    this.feedBackTitle = page.locator('#feedback-title')
  }

  async fieldFeedback({ username, email, subject, comment }: FeedbackProps) {
    await this.usernameInput.fill(username)
    await this.emailInput.fill(email)
    await this.subjectInput.fill(subject)
    await this.commentInput.fill(comment)
  }

  async resetFeedback() {
    await this.resetButton.click()
  }

  async assertReset() {
    await expect(this.usernameInput).toBeEmpty()
    await expect(this.commentInput).toBeEmpty()
  }

  async submitFeedback() {
    await this.submitButton.click()
  }

  async assertSubmit() {
    await expect(this.feedBackTitle).toBeVisible()
  }
}
