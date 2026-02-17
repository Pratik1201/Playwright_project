/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
import {test, expect, Locator} from '@playwright/test';
test("Verify all the locators", async({page})=>{

    await page.goto("https://demo.nopcommerce.com");
    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();
    await page.getByRole("link",{name:'Register'}).click();
    await expect (page.getByRole("heading", {name:'Register'})).toBeVisible();
    await page.getByLabel('First name:').fill("Sumit");
    await page.getByLabel('Last name:').fill("Sonawane");
    await page.getByLabel('Email:').fill("sumit@gmail.com");
    await page.getByLabel('Company name:').fill("sumit@gmail.com")
    await page.getByLabel('Password:').fill("sumit123");
    await page.getByLabel('Confirm password:').fill("sumit123");
    await page.getByRole('button', {name: 'Register'}).click();
    await expect(page.getByText('Your registration completed')).toBeVisible();
    await page.getByPlaceholder('Search store').fill("Samsung Galaxy S24");


});