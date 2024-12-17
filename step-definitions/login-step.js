const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I want to login to the application', async function () {
  await loginPage.navigateToLoginPage()
})

//defineStep có thể thay thế When , Given .. các steps
//defineStep nhưng có thể sử dụng cho các trường hợp đặc biệt hoặc khi bạn muốn tạo các bước có thể được gọi từ nhiều nơi
When('I fill login form with valid credentials', async function () {
  await loginPage.login()
})

Then('I should see the home page', async function () {
  await loginPage.assertUserIsLoggedIn()
})

defineStep('I wait for the 3 seconds', async function () {
  await loginPage.pause()
})

defineStep(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.loginWithParameter(username, password)
  },
)
