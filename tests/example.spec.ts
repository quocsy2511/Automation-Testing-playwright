import { expect, test } from '@playwright/test'

test('Should be show text', async ({ page }) => {
  await page.goto('https://example.com/')
  const titlePage = await page.locator('h1')
  await expect(titlePage).toContainText('Example Domain')
})

test('Click in element', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/')
  await page.click('#signin_button') //button có id
  await page.click('text=Sign in') // trường hợp input text thì lấy value

  const errorMessage = await page.locator('.alert-error') //lấy class của thẻ div dùng .alert-error
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

//đây là 1 script test
//skip test ở đây để bỏ qua đoạn test này
//only ở đây là chỉ chạy 1 dòng test này nếu đoạn test khác có only thì sẽ chạy 2 đoạn có only
test.skip('Selectors', async ({ page }) => {
  //test
  await page.click('text=some text')

  //css selector
  await page.click('button')
  await page.click('#id')
  await page.click('.class')

  //only visible css selector
  await page.click('.submit-button:visible') //Chỉ nhắm đến các phần tử có class="submit-button" mà đang được hiển thị trên giao diện

  //combination
  await page.click('#username .first')

  //xpath
  await page.click('//button') //Chọn tất cả các thẻ <button> trong DOM.
})


//nhóm các đoạn test lại với nhau
test.describe('group test case' , ()=>{
  test('working with login from', async ({ page }) => {
    //truy cập vô trang
    await page.goto('http://zero.webappsecurity.com/')
  
    //chuyển đổi trang
    await page.click('#signin_button')
  
    //nhập form login và nhấn submit
    await page.fill('#user_login', 'some username')
    await page.fill('#user_password', 'some passwords')
    await page.click('text=Sign in')
  
    //kết quả mong đợi
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
  })
  
  // assertion kiểm tra tính đúng/sai của điều kiện trong quá trình test
  // khi thêm @myTag có thể tự chạy riêng lẻ test case bằng lệnh npx playwright test --grep @myTag
  // nếu muốn chạy case còn lại mà ko chạy case test này thì dùng npx playwright test --grep-invert @myTag     
  test('Assertions @myTag', async ({ page }) => {
    await page.goto('https://example.com/')
  
    await expect(page).toHaveURL('https://example.com/')
    await expect(page).toHaveTitle('Example Domain')
  
    const elementH1 = await page.locator('h1')
    await expect(elementH1).toHaveCount(1) //kiểm tra số lượng của các phần tử được tìm thấy
    await expect(elementH1).toContainText('Example Domain')
    await expect(elementH1).toBeVisible()
  
    const nonExistentElementH5 = await page.locator('h5')
    await expect(nonExistentElementH5).not.toBeVisible()
  })
})