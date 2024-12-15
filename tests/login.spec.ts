import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test("Successful login", async ({ page }) => {
    await page.goto("/login");
    await page.fill("input[placeholder='Email address']", "amanisalma@gmail.com");
    await page.fill("input[placeholder='Password']", "amanisalma");
    await page.waitForTimeout(3000); 
    await page.click("button:has-text('Login')");
    await page.waitForURL("**/dashboard");
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test("Error message displayed on invalid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.fill("input[placeholder='Email address']", "invalid@example.com");
    await page.fill("input[placeholder='Password']", "wrongpassword");
    await page.click("button:has-text('Login')");
    const errorMessage = page.locator("text=Invalid email or password");
    await expect(errorMessage).toBeVisible();
  });
});
