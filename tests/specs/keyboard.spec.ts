import{test,expect}from '@playwright/test'



test.describe('login test cases',()=>{


    test('test valid login',async({page})=>{

await page.goto('https://practice.expandtesting.com/login');
await page.setViewportSize({width:1920,height:1080});
await page.locator('[id="username"]').fill('practice');
await page.locator('[id="password"]').fill('SuperSecretPassword!');
await page.locator('//button[@id="submit-login"]').press('Enter');
await expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible();
await page.close();


});


test('test select paragraph using keyboard action', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://practice.expandtesting.com/login');
    await page.locator('//div[@class="col-9"]').press('Control+A')
   await page.locator('[id="username"]').fill('practice');
 await page.locator('[id="password"]').fill('SuperSecretPassword!');
 await page.locator('//button[@id="submit-login"]').press('Enter');
 await expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible();
 await page.close();

});


test('test login and password using keyboard',async({page})=>{

await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto('https://practice.expandtesting.com/login');
await page.locator('[id="username"]').click();
await page.keyboard.type('practice');
await page.locator('[id="password"]').click();
await page.keyboard.type('SuperSecretPassword!');
await page.locator('[name="submit-login"]').click();
await expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible();
await page.close();






});









});