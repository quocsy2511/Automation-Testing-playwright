import { expect, test } from "@playwright/test";


test("Should be show text" , async ({page}) => {
    await page.goto("https://example.com/")
    const titlePage = await page.locator("h1")
    // await expect(titlePage).toContainText("Hello")
    await expect(titlePage).toContainText("Example Domain")
})