import { Locator, Page, expect } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

type LoginProps = {
  username: string
  password: string
}

export class LoginPage extends AbstractPage {
  // define selector
  // readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator
  readonly loginForm: Locator

  //initialize the selector use constructor
  constructor(page: Page) {
    // this.page = page
    super(page) // Gọi constructor của AbstractPage để khởi tạo thuộc tính page.
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.loginForm = page.locator('#login_form')
  }

  //   define method
  async login({ username, password }: LoginProps) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText(
      'Login and/or password are wrong.',
    )
  }

  async reloadPage() {
    await this.page.goto(
      'http://zero.webappsecurity.com/bank/account-summary.html',
    )
  }

  async snapshotLogin() {
    expect(await this.loginForm.screenshot()).toMatchSnapshot('login-from.png')
  }

  async snapshotErrorMessage() {
    expect(await this.errorMessage.screenshot()).toMatchSnapshot(
      'error-message.png',
    )
  }
}
