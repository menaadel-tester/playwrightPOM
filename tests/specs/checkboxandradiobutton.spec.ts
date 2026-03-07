import{test,expect}from '@playwright/test'



test.beforeEach(async ({ page }) => {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('doubleclick.net')) {
      return route.abort();
    }
    route.continue();
  });
});


test('test check box and radio button',async({page})=>{

    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//*[text()="Check Boxes"]').click();
    await page.locator('(//input[@class="form-check-input"])[1]').click();

    await expect(page.locator('(//input[@class="form-check-input"])[1]')).toBeChecked();


});

test('test unchecked box', async({page})=>{

     await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//*[text()="Check Boxes"]').click();
    await page.locator('(//input[@class="form-check-input"])[2]').click();

    await expect(page.locator('(//input[@class="form-check-input"])[2]')).not.toBeChecked();


});


test('test radio button', async({page})=>{

    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//*[text()="Radio Buttons"]').click();
    await page.locator('//input[@id="red"]').click({force:true});
    await expect(page.locator('//input[@id="red"]')).toBeChecked();


});


