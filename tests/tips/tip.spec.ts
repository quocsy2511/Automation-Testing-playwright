import test, { expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utils/data-helper'
//npx playwright test --config=playwright.config.ts --project=chromium --reporter=list --retries=3
//thử lại test 3 lần nếu nó test sai

//testInfo truy cập vô tất cả function trong test
test('Should be show text', async ({ page }, testInfo) => {
  const number = await getRandomNumber()
  const string = await getRandomString()
  await page.goto('https://example.com/')
  console.log('🚀 ~ test ~ testInfo:', string + 'random number : ', number)
})

//test có thể bỏ qua
test('Test skip browser', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'feature is not supported webkit browser')
  await page.goto('https://example.com/')
})

//bỏ qua test tương tự với skip nhưng nó sẽ ghi chú  là đoạn test browser này cần fix thay vì có thể bỏ qua
test('Test fixme annotation', async ({ page, browserName }) => {
  test.fixme(
    browserName === 'webkit',
    'feature is not supported webkit browser',
  )
  await page.goto('https://example.com/')
})

//test case with parameter
const searchValue = ['six', 'apple', 'orange', 'pink']
for (const element of searchValue) {
  test(`fill parameter ${element}`, async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.fill('#searchTerm', `${element}`)
    await page.waitForTimeout(1000)
  })
}

//test case with move mouse
test('Mouse move ', async ({ page }) => {
  await page.goto('https://example.com/')
  await page.mouse.move(0, 0)
  await page.mouse.down()
  await page.mouse.up()
  await page.mouse.move(0, 100)
})

//test with multiple
test('multiple browser ', async ({ browser }) => {
  const context = await browser.newContext()
  const page_1 = await context.newPage()
  const page_2 = await context.newPage()
  const page_3 = await context.newPage()

  await page_1.goto('https://example.com/')
  await page_2.goto('http://zero.webappsecurity.com/index.html')
  await page_3.goto('http://zero.webappsecurity.com/login.html')

  await page_1.waitForTimeout(1000)
})

//test with device emulation
//mở trình duyệt với máy ảo npx playwright open --device="iPhone 15 Pro Max" wikipedia.org

// lưu hình ảnh thành 1 file pdf
//npx playwright pdf https://example.com my-file.pdf

//cap màn hình từ 1 web bằng thiết bị ảo
//npx playwright screenshot --device="iPhone 15 Pro Max" --wait-for-timeout=3000 twitter.com twitter-iphone-15-ptomax.png
