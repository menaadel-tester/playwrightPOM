import{test,expect}from '@playwright/test'
import { link } from 'node:fs';



test.beforeEach(async ({ page }) => {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('doubleclick.net')) {
      return route.abort();
    }
    route.continue();
  });
});

test('trest date picker',async({page})=>{

    await page.setViewportSize({width:1920, height:1080});

    await page.goto('https://demo.automationtesting.in/Datepicker.html')

    await page.locator('//input[@id="datepicker1"]').click();

    await page.locator('.ui-state-default.ui-state-highlight').click();

    await page.getByRole('link', { name: '20' }).click();

    await page.locator('[id="datepicker2"]').click();

    const year = 2026;
    const month = 4 ;
    const day = 17 ;

    await page.locator('(//select[@class="datepick-month-year"])[1]').selectOption('March');
    await page.locator('(//select[@class="datepick-month-year"])[2]').selectOption('2026');
    await page.getByRole('link',{name:'20'}).click();

    console.log();
    







});