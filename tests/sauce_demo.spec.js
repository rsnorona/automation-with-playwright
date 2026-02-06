const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/sauce_demo.page');

test('Login through principal page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});
