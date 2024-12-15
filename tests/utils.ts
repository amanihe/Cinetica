import { Page } from '@playwright/test';

/**
 * Fonction pour se connecter
 * @param page 
 */
export async function login(page: Page) {
  await page.goto('/login');
  await page.fill('input[type="email"]', "amanisalma@gmail.com");
  await page.fill('input[type="password"]', "amanisalma");
  await page.click('button[type="submit"]');
  await page.waitForURL('/dashboard');
}
