const { test, expect } = require('@playwright/test');
const { generateRandomEmail, validPassword } = require('../helpers/helpers');

test('LifeDAO Login Flow', async ({ page }) => {
  await page.goto('https://uat.thelifedao.io/app/sign-up');

  // Click the "Log In" link
  await page.click("//a[contains(text(),'Log In')]");

  // Enter the Email 
  await page.fill("//input[@placeholder='Enter your email']", 'pmallanagouda518@gmail.com');

  // Enter the Password
  await page.fill("//input[@placeholder='Enter your password']", 'Test@123');

  // Click Log In button (skip checkbox for now - may be optional)
  await page.click("//button[@type='submit']");

  // Wait for navigation or confirmation
  await page.waitForTimeout(2000);
});