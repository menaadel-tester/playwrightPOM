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

test('test drag and drop',async({page})=>{

    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://practice.expandtesting.com/drag-and-drop-circles')
    const redcircle = await page.locator('.red');
    const greencircle = await page.locator('.green')
    const targetlocator = await page.locator('//div[@class="span-6 dragTarg"]');
    await redcircle.hover();
    await page.mouse.down();
    await targetlocator.hover();
    await page.mouse.up();
    await greencircle.hover();
    await page.mouse.down();
    await targetlocator.hover();
    await page.mouse.up();
    const bluecircle = await page.locator('.blue');

    await bluecircle.dragTo(targetlocator);



})