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

test('test frames',async({page})=>{

    await page.setViewportSize({width:1920,height:1080});

    await page.goto('https://demo.automationtesting.in/Frames.html');

    // to know the number of frames 

    const frames  = await page.frames();

    console.log("number of farmes",frames.length);

    //1-switch to iframe by name 

   //  const frame = await page.frame('SingleFrame');
     
    // await frame?.locator("//input[@type='text']").fill('hello world');

     // switch to iframe by url
   //  const frame = page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"});
    // await frame?.locator("//input[@type='text']").fill('hello world');

     // switch ton iframe by locator 
    // const frame =  await page.frameLocator('#singleframe');

     //await frame.locator('//input[@type="text"]').fill('hello world');

    // How to deal with list of frame 

    //1- sselect by locator 

    await page.locator('(//a[@class="analystic"])[2]').click();

    const parentframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]');
    const childframe = await parentframe.frameLocator('//iframe[@src="SingleFrame.html"]');
    await childframe.locator('//input[@type="text"]').fill('hello world');







});