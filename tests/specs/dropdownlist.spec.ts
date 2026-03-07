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

test('test dropdownlist',async({page})=>{

await page.setViewportSize({width:1920,height:1080});
await page.goto('https://practice.expandtesting.com/dropdown');
// selecct by label 
//await page.locator('//select[@id="country"]').selectOption({label:'Egypt'});

//select by text 

//await page.locator('//select[@id="country"]').selectOption('Egypt');

//select by value 

//await page.locator('//select[@id="country"]').selectOption('EG');

// select by index 

await page.locator('//select[@id="country"]').selectOption({index:3});

// assertion 
 
//1- list count 

const options =  await page.locator('//select[@id="country"]').locator('option')

await expect(options).toHaveCount(252);

// 2- text content

const options1 = await page.locator('//select[@id="country"]').textContent();

await expect(options1).toContain('Egypt');

const options2 = await page.locator('//select[@id="country"]').innerText();

await expect(options2?.includes('Egypt')).toBeTruthy();
// 3- inner text 







});

