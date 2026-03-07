import{test,expect}from '@playwright/test'
import path from 'node:path';



test.describe('login test cases',()=>{


    test('test valid login',async({page},testInfo)=>{

await page.goto('https://practice.expandtesting.com/login');
await page.setViewportSize({width:1920,height:1080});
await page.locator('[id="username"]').fill('practice');
await page.locator('[id="password"]').fill('SuperSecretPassword!');
await page.locator('//button[@id="submit-login"]').click();
await expect(page.getByText('You logged into a secure area!', { exact: true })).toBeVisible();
await page.screenshot({path:'screenshot/validlogin.png'})
 testInfo.attach(`${testInfo.title}`, {path:'screenshot/validlogin.png'})
await page.close();


});

test('test invalid login',async({page},testInfo)=>{

await page.goto('https://practice.expandtesting.com/login');
await page.setViewportSize({width:1920,height:1080});
await page.locator('[id="username"]').fill('practice122222');
await page.locator('[id="password"]').fill('SuperSecretPassword!');
await page.locator('//button[@id="submit-login"]').click();
await expect(page.locator("div[id='flash'] b")).toContainText("Your username is invalid!");
await page.screenshot({path:'screenshot/invalidlogin.png'})
testInfo.attach(`${testInfo.title}`,{path:'screenshot/invalidlogin.png'});

await page.close();

});




});





