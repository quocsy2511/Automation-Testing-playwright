Feature('example')



Scenario('Should load example.com', ({ I }) => {
  I.amOnPage('https://example.com/') // giống với goto
  I.see('Example') //giống với toContainText
  I.dontSee('Six')
  I.seeElement('h1')
})
