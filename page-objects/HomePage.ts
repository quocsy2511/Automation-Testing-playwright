import { Locator, Page } from '@playwright/test'

type SearchProps = {
  value: string
}

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
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
}
