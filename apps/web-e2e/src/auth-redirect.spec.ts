import { test, expect } from '@playwright/test';

test('unauthenticated user is redirected to login from step-1', async ({
  page,
}) => {
  // Clear all cookies to simulate logged-out user
  await page.context().clearCookies();

  // Try to access a protected page
  await page.goto('/tax-form/2025/step-1');

  // Expect redirect to login
  await expect(page).toHaveURL('/login');
});
