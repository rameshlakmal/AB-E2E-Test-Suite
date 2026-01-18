import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://staging.analystbuilder.com/");

  await page.getByRole("link", { name: "Start Project" }).nth(1).click();
  await page
    .getByRole("heading", { name: "Data Science Demystified: How" })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "New List" }).click();
  await page.getByRole("textbox").fill("dddd");
  await page.getByRole("textbox").press("Enter");
  await page.getByRole("button", { name: "Polly" }).click();
  await page.getByRole("link", { name: "Profile" }).click();
  await page.getByRole("link", { name: "Profile" }).click();
  await page.getByRole("link", { name: "Bookmarks" }).click();
  await expect(page.getByRole("button", { name: "summa" })).toBeVisible();
});
