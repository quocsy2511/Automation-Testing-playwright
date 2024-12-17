const playwright = require('playwright')
const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber')

//chạy tại các thời điểm xác định trong vòng đời của kịch bản kiểm thử (scenarios) để thực hiện một số thiết lập hoặc dọn dẹp cần thiết

BeforeAll(async () => {
  console.log('Launch browser')
  global.browser = await playwright['chromium'].launch({ headless: false })
})

AfterAll(async () => {
  console.log('Close browser')
  await global.browser.close()
})

Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.browser.newPage()
})

After(async () => {
  console.log('Create new context and page')
  await global.page.close()
  await global.context.close()
})
