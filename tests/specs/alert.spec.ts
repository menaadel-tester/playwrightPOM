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


// simple alert


test('test simple alert', async({page})=>{

    await page.setViewportSize({width:1920,height:1080})

await page.goto('https://testautomationpractice.blogspot.com/');

await page.on('dialog', async dialog=>{

await expect(dialog.message()).toContain('I am an alert box!');

await dialog.accept();

})

await page.locator('//button[text()="Simple Alert"]').click();


});

//confirm alert 

test('test confirm Alert', async({page})=>{

    await page.setViewportSize({width:1920,height:1080})

await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        await expect(dialog.message()).toContain('Press a button!');

        await dialog.dismiss();
    });

    await page.locator('//button[text()="Confirmation Alert"]').click();

    await expect(page.locator('//p[@id="demo"]')).toContainText('You pressed Cancel!');


});

//prompet Alert 

test('test prompet Alert',async({page})=>{

   await page.setViewportSize({width:1920,height:1080})

await page.goto('https://testautomationpractice.blogspot.com/');

await page.on('dialog',async dialog=>{

  await expect(dialog.message()).toContain('Please enter your name:');

  await expect(dialog.defaultValue()).toContain('Harry Potter');

  await dialog.accept('Mena Adel');

});

await page.locator('//button[@id="promptBtn"]').click();
await expect(page.locator('//p[text()="Hello Mena Adel! How are you today?"]')).toBeVisible();

});