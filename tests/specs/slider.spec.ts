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

test('test slider test case',async({page})=>{

    await page.setViewportSize({width:1920,height:1080});

    await page.goto('https://practice.expandtesting.com/horizontal-slider');

    const sliderlocator = page.locator('//input[@max="5.0"]');

    await sliderlocator.evaluate(e=>{

        e.setAttribute('value', '3.5');
    })



});