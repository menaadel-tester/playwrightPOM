import{test,expect}from '@playwright/test'


test('register test cases',async({page})=>{

    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('(//div[@class="card-body"])[3]').click();
    const register_link = page.locator('//*[text()="Test Register Page"]');
     await register_link.click();
    const username = page.locator('[id="username"]');
    await   username.fill('test1300');
    const password = page.locator('[name="password"]');
    await  password.fill('12345678');
    const confirmpassword = page.locator('[id="confirmPassword"]')
     await confirmpassword.fill('12345678');
     const register_btn = page.locator('//button[@type="submit"]')
     await register_btn.click();
     await expect(page.locator('div[id="flash"] b')).toBeVisible();




    
});
