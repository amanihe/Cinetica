import { test, expect } from '@playwright/test';
import { login } from './utils';

test.describe('Now Playing Movies Page', () => {
  test('display a list of now playing movies with images and titles ', async ({ page }) => {
    await login(page);

    await page.goto('/dashboard/movies/now-playing');

    const pageTitle = await page.locator('h2').textContent();
    expect(pageTitle).toBe('Now Playing Movies');

    const movieCards = page.locator('div.border.rounded.shadow.p-2');
    const movieCount = await movieCards.count();
    expect(movieCount).toBeGreaterThan(0);

    const firstMovie = movieCards.first();

    const image = firstMovie.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', /tmdb\.org/);

    const title = firstMovie.locator('h3');
    await expect(title).toBeVisible();
    await expect(title).not.toHaveText('');

    const releaseDate = firstMovie.locator('p.text-xs.text-gray-500');
    await expect(releaseDate).toBeVisible();
    await expect(releaseDate).not.toHaveText('');

  });
});
