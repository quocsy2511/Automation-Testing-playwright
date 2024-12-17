const { it } = require('mocha')
const { chromium } = require('playwright')
// const expect = require('chai').expect

let browser
let page

before(async () => {
  browser = await chromium.launch()
})

after(async () => {
  await browser.close()
})

beforeEach(async () => {
  page = await browser.newPage()
})

afterEach(async () => {
  await page.close()
})

it('Example playwright with mocha', async () => {
  const { expect } = await import('chai')
  await page.goto('https://example.com/')
  expect('h1').to.exist
})
