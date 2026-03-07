import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  console.log('this action runs before each test');

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});

test.afterEach(async ({page}) => {

  console.log('this action runs after all tests');


});

test.describe('login test', () => {

  test('test valid login', async ({ page }) => {

    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();

    await expect(page.locator('//span[text()="Admin"]')).toBeVisible({timeout:5000});

  });

  test('test invalid login', async ({ page }) => {

    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin');
    await page.locator('//button[@type="submit"]').click();

    await expect(page.locator('//p[text()="Invalid credentials"]')).toBeVisible({timeout:5000});

  });

});


 
