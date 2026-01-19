import { test, expect } from "../../fixtures/fixtures.ts";

test.describe("Technical Question page Test Cases", () => {
  test("Check submission tab when there are no submissions ", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.OpenQuestion();
    await techQuestionDetailsPage.NavigateToYourSubmissionsTab();
    await expect(
      page
        .locator("div")
        .filter({
          hasText:
            /^No submissions yet Submit your code to see the results here!$/,
        })
        .nth(1),
    ).toBeVisible();
  });

  test("Open a premium question", async ({ techQuestionDetailsPage, page }) => {
    await techQuestionDetailsPage.openpremiumquestion();
    await expect(page.getByText("Get Access NowPurchase")).toBeVisible();
  });

  test("Open a free question", async ({ techQuestionDetailsPage, page }) => {
    await techQuestionDetailsPage.openfreequestion();
    await expect(page.getByText("Highlight to execute").first()).toBeVisible();
  });
});
