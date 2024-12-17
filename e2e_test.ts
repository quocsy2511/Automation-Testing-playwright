import LoginPage from './pages/LoginPage'

Feature('E2E testing ')

Before(({ I }) => {
  console.log('BEFORE TEST')
  I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
  console.log('AFTER TEST')
})

Scenario('login zero bank with invalid', ({ I }) => {
  I.click('#signin_button')
  LoginPage.assertLoginFromVisible()
  LoginPage.submitLoginForm({ username: 'invalid', password: 'invalid' })

  I.seeElement('.alert-error')
})
