import { expect, Locator, Page } from '@playwright/test'

type PaymentProps = {
  payee: string
  account: string
  amount: string
  date: string
  description: string
}

export class PaymentPage {
  readonly page: Page
  readonly payeeSelectBox: Locator
  readonly getPayeeDetail: Locator
  readonly payeeDetail: Locator
  readonly accountSelectBox: Locator
  readonly amountInput: Locator
  readonly dateInput: Locator
  readonly descriptionInput: Locator
  readonly submitButton: Locator
  readonly successMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.payeeSelectBox = page.locator('#sp_payee')
    this.getPayeeDetail = page.locator('#sp_get_payee_details')
    this.payeeDetail = page.locator('#sp_payee_details')
    this.accountSelectBox = page.locator('#sp_account')
    this.amountInput = page.locator('#sp_amount')
    this.dateInput = page.locator('#sp_date')
    this.descriptionInput = page.locator('#sp_description')
    this.submitButton = page.locator('#pay_saved_payees')
    this.successMessage = page.locator('#alert_content > span')
  }

  async createPayment() {
    await this.payeeSelectBox.selectOption('apple')
    await this.getPayeeDetail.click()
    await expect(this.payeeDetail).toBeVisible()
    await this.accountSelectBox.selectOption('2')
    await this.amountInput.fill('100')
    await this.dateInput.fill('2024-12-03')
    await this.descriptionInput.fill('123456789')
    await this.submitButton.click()
  }

  async clickPayeeDetail() {
    await this.getPayeeDetail.click()
  }

  async assertPayeeDetail() {
    await expect(this.payeeDetail).toBeVisible()
  }

  async fillForm({ account, amount, date, description, payee }: PaymentProps) {
    await this.payeeSelectBox.selectOption(payee)
    await this.accountSelectBox.selectOption(account)
    await this.amountInput.fill(amount)
    await this.dateInput.fill(date)
    await this.descriptionInput.fill(description)
  }

  async submitForm() {
    await this.submitButton.click()
  }

  async assertSuccess() {
    await expect(this.successMessage).toContainText(
      'The payment was successfully submitted.',
    )
  }
}
