import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await page.getByRole("link", { name: "Start Project" }).nth(1).click();
  await page.getByRole("link", { name: "Start Project" }).nth(1).click();
  await page
    .getByRole("heading", { name: "Data Science Demystified: How" })
    .getByRole("button")
    .click();
});
