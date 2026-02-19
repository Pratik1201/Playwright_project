import{test, expect, Locator} from '@playwright/test';
import { clear } from 'node:console';
test("Verify xpath locators", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com")

    //1. Relative xpath
    const logo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
    await expect (page.getByText("Demo Web Shop")).toBeVisible();

    //2. Contains()
    const products : Locator = page.locator("//a[contains (@href, 'computer')]");
    const productsCount : number = await products.count();
    console.log("Number of coumputer related products:" ,productsCount);
    expect(productsCount).toBeGreaterThan(0);
    products.textContent();



})