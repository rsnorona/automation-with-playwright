const { test, expect } = require('@playwright/test');

test('homepage should display main heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const heading = page.getByRole('heading', {
    name: 'Playwright enables reliable end-to-end testing',
  });
  await expect(heading).toBeVisible();
});
