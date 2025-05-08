import { test } from '@playwright/test';

test('user logs in and gets redirected to tax form step 1', async ({
  page,
}) => {
  await page.goto('/login');

  // Wait explicitly for input#phone to appear and be visible
  await page.waitForSelector('input#phone', {
    state: 'visible',
    timeout: 5000,
  });

  // Fill phone number
  await page.fill('input#phone', '772-8391');

  // Submit form and wait for redirect
  await Promise.all([
    page.waitForURL(/\/tax-form\/[a-z0-9-]+\/step-1/i, { timeout: 10_000 }),
    page.click('button[type="submit"]'),
  ]);
});
