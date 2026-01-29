import { test, expect } from "@playwright/test";

test("seed", async ({ page }) => {
  await page.goto("https://staging.analystbuilder.com/");

  await page.getByRole("link", { name: "Login" }).click();
  await page
    .getByRole("textbox", { name: "Enter your email address" })
    .fill("dilshi@mailinator.com");
  await page
    .getByRole("textbox", { name: "Enter your password" })
    .fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator("div")
    .filter({
      hasText:
        "HomeQuestionsCoursesProjectsResourcesPricingCtrl + KSearchSearch through site",
    })
    .nth(3)
    .click();
  await page.getByRole("link", { name: "Projects" }).click();
  await page.getByRole("link", { name: "Start Project" }).nth(1).click();
});
