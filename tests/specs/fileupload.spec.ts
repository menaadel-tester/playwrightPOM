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

test('test upload single upload file',async({page})=>{


    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.locator('[name="input4[]"]').setInputFiles('testdata/uploadtest.txt');
    await page.locator('//button[@title="Upload selected files"]').click();
    await expect(page.locator('(//div[@title="uploadtest.txt"])[1]')).toBeVisible();

});

test('test upload more than 1 file',async({page})=>{

await page.goto('https://demo.automationtesting.in/FileUpload.html');

await page.locator('[name="input4[]"]').setInputFiles([

    'testdata/uploadtest.txt',
    'testdata/uploadtest2.txt'


]);
    await page.locator('//button[@title="Upload selected files"]').click();

    await expect(page.locator('(//div[@title="uploadtest.txt"])[1]')).toBeVisible();


});