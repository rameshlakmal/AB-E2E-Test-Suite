import { test, expect } from "../../fixtures/fixtures.ts";

test.describe("Technical Question page Test Cases", () => {
  test("Open a premium question", async ({ techQuestionDetailsPage, page }) => {
    await techQuestionDetailsPage.openpremiumquestion();
    await expect(page.getByText("Oops!You need to log in to")).toBeVisible();
  });

  test("Open a free question", async ({ techQuestionDetailsPage, page }) => {
    await techQuestionDetailsPage.openfreequestion();
    await expect(page.getByText("Oops!You need to log in to")).toBeVisible();
  });
});
