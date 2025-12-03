const { test, expect } = require('@playwright/test');
const { generateRandomEmail, validPassword } = require('../helpers/helpers');

test('LifeDAO Sign-Up Flow', async ({ page }) => {
  await page.goto('https://uat.thelifedao.io/app/sign-up');

  // Click the "Log In" link
  await page.click("//a[contains(text(),'Log In')]");
  
  // Click the Sign Up option
  await page.click("//a[@class='text-primary font-semibold text-sm']");
  
  // Enter the code
  await page.fill("//input", 'w3Arw9');
  
  // Click Submit button
  await page.click("//button[contains(text(),'Submit')]");
  
  // Enter email
  await page.fill("//input[@placeholder='Enter your email']", 'pmallanagouda518@gmail.com');
  
  // Enter password
  await page.fill("//input[@placeholder='Enter your password']", 'Test@123');

  //Entee the repeat password
  await page.fill("//input[@placeholder='Repeat Password']", 'Test@123');
  
  // Click Sign Up button
  await page.click("//button[normalize-space()='Sign Up']");
  
  // Wait for navigation or confirmation
  await page.waitForTimeout(2000);
});
