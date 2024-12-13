import { Locator, Page } from '@playwright/test'

type SearchProps = {
  value: string
}

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator
  readonly feedBackTab: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
    this.feedBackTab = page.locator('#feedback')
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/')
  }

  async clickOnSignIn() {
    await this.signInButton.click()
  }

  async search({ value }: SearchProps) {
    await this.searchBox.fill(value)
    await this.page.keyboard.press('Enter')
  }

  async clickFeedbackTab() {
    await this.feedBackTab.click()
  }
}
