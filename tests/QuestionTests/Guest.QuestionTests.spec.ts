import { expect, test } from "../../fixtures/fixtures.ts";

test.describe("Question Test Cases", () => {
  test("Check the progress bar", async ({ questionPage, page }) => {
    await questionPage.navigatetoquestionpage();
    await expect(
      page.getByText("All skillsAll the timeLast")
    ).not.toBeVisible();
  });

  test("Verify that visiblity of the status dropdown", async ({
    questionPage,
    page,
  }) => {
    await questionPage.navigatetoquestionpage();
    await expect(
      page.locator(".hidden > div:nth-child(3)").first()
    ).not.toBeVisible();
  });
});
