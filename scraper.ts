// Web scraper là một chương trình tự động truy cập vào một trang web để thu thập hoặc phân tích dữ liệu.

const playwright = require('playwright')
const random_useragent = require('random-useragent')
const fs = require('fs')
const BASE_URL = 'https://github.com/topics/playwright?l=svelte&o=desc&s=forks'

;(async () => {
  //setup Browser
  const agent = random_useragent.getRandom() //tạo 1 useragent mới mỗi lần chạy

  const browser = await playwright.chromium.launch({ headless: true })
  const context = await browser.newContext({ userAgent: agent }) //tránh các anti scraper phát hiện
  const page = await context.newPage({ bypassCSP: true }) //bypassCSP Cho phép bỏ qua các hạn chế Content Security Policy (CSP)
  await page.setDefaultTimeout(30000)
  await page.setViewportSize({ width: 800, height: 600 })
  await page.goto(BASE_URL)

  //get data
  const repositories = await page.$$eval('article.border', (repoCard) => {
    return repoCard.map((card) => {
      const [user, repo] = card.querySelectorAll('h3 a')

      const formatText = (element) => element && element.innerText.trim()

      return {
        user: formatText(user),
        repo: formatText(repo),
        url: repo.href,
      }
    })
  })

  // store data
  const logger = fs.createWriteStream('data.txt', { flag: 'w' })
  logger.write(JSON.stringify(repositories, null, ' '))

  //close Browser
  await browser.close()
})().catch((error) => {
  console.log(error)
  process.exit(1)
})
