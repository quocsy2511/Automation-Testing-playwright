import { Locator, Page } from '@playwright/test'

type NavbarProps = {
  tabName: string
}

export const TabNameInitial = {
  ACCOUNT_SUMMARY: 'Account Summary',
  ACCOUNT_ACTIVITY: 'Account Activity',
  TRANSFER_FUNDS: 'Transfer Funds',
  PAY_BILL: 'Pay Bills',
  MONEY_MAP: 'My Money Map',
  ONLINE_STATEMENTS: 'Online Statements',
}

export class Navbar {
  readonly page: Page
  readonly accountSummary: Locator
  readonly accountActivity: Locator
  readonly transferFunds: Locator
  readonly payBills: Locator
  readonly moneyMap: Locator
  readonly onlineStatements: Locator

  constructor(page: Page) {
    this.page = page
    this.accountSummary = page.locator('#account_summary_tab')
    this.accountActivity = page.locator('#account_activity_tab')
    this.transferFunds = page.locator('#transfer_funds_tab')
    this.payBills = page.locator('#pay_bills_tab')
    this.moneyMap = page.locator('#money_map_tab')
    this.onlineStatements = page.locator('#online_statements_tab')
  }

  async clickActiveTab({ tabName }: NavbarProps) {
    switch (tabName) {
      case TabNameInitial.ACCOUNT_SUMMARY:
        await this.accountSummary.click()
        break
      case TabNameInitial.ACCOUNT_ACTIVITY:
        await this.accountActivity.click()
        break
      case TabNameInitial.TRANSFER_FUNDS:
        await this.transferFunds.click()
        break
      case TabNameInitial.PAY_BILL:
        await this.payBills.click()
        break
      case TabNameInitial.MONEY_MAP:
        await this.moneyMap.click()
        break
      case TabNameInitial.ONLINE_STATEMENTS:
        await this.onlineStatements.click()
        break

      default:
        throw new Error('this is not a valid tab name')
    }
  }
}
