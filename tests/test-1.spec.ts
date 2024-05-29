import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('locator.getattribute');
  await page.getByRole('link', { name: 'locator.getAttribute Locator' }).click();
  await expect(page.getByText('If you need to assert an')).toBeVisible();
  await expect(page.getByText('adsfasdf')).toBeVisible();
});