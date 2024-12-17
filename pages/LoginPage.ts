const { I } = inject()

type LoginPage = {
  username: string
  password: string
}

export = {
  // insert your locators and methods here
  loginFrom: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',

  //Create Methods
  submitLoginForm({ username, password }: LoginPage) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)

    I.click(this.submitButton)
  },

  assertLoginFromVisible() {
    I.seeElement(this.loginFrom)
  },
}
