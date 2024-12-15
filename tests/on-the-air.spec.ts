import { test, expect } from '@playwright/test';
import { login } from './utils';

test.describe('On The Air TV Shows Page', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('display a list of on-the-air TV shows with images and titles', async ({ page }) => {
    await page.goto('/dashboard/shows/on-the-air');

    const pageTitle = await page.locator('h2').textContent();
    expect(pageTitle).toBe('On The Air TV Shows');

    const showCards = page.locator('div.border.rounded.shadow.p-2');
    const showCount = await showCards.count();
    expect(showCount).toBeGreaterThan(0);

    const firstShow = showCards.first();

    const image = firstShow.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', /tmdb\.org/);

    const title = firstShow.locator('h3');
    await expect(title).toBeVisible();
    await expect(title).not.toHaveText('');

    const firstAirDate = firstShow.locator('p.text-xs.text-gray-500');
    await expect(firstAirDate).toBeVisible();
    await expect(firstAirDate).not.toHaveText('');

  });
});
