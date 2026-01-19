import { test, expect } from "../../fixtures/fixtures.ts";
import { datasource } from "../../test-data/question-answers.json";

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
    await expect(page.getByText("Highlight to execute").first()).toBeVisible();
  });

  test("Open a free question", async ({ techQuestionDetailsPage, page }) => {
    await techQuestionDetailsPage.openfreequestion();
    await expect(page.getByText("Highlight to execute").first()).toBeVisible();
  });

  test("Verify that user can view hints by clicking on hints button", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ViewHints();
    await expect(page.getByRole("listitem")).toBeVisible();
  });

  test("Verify that user can view expected result by clicking on expected output buton", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ViewExpectedOutput();
    await expect(page.locator("div:nth-child(6)")).toBeVisible();
  });

  test("Succesfully Answer a Question", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ClearCodeEditor();
    await techQuestionDetailsPage.AnswerQuestion(datasource.correctanswer);
    await techQuestionDetailsPage.ClickSubmitButton();
    await expect(page.getByText("Your solution is correct")).toBeVisible();
  });

  test("Try a question with incorrect answer", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ClearCodeEditor();
    await techQuestionDetailsPage.AnswerQuestion(datasource.incorrectanswer);
    await techQuestionDetailsPage.ClickSubmitButton();
    await expect(page.getByText("Your solution is incorrect")).toBeVisible();
  });

  test("Verify that user can share the answer with community", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ClearCodeEditor();
    await techQuestionDetailsPage.AnswerQuestion(datasource.correctanswer);
    await techQuestionDetailsPage.ClickSubmitButton();
    await expect(page.getByText("Your solution is correct")).toBeVisible();
    await techQuestionDetailsPage.ClickCommunityShareButton();
    await expect(page.getByText("Shared in community solutions")).toBeVisible();
    await techQuestionDetailsPage.NavigateToSubmissionsTab();
    await techQuestionDetailsPage.FilterNewestSolutions();
    await expect(page.getByText("a few seconds ago")).toBeVisible();
  });

  test("Verify that user can remove the shared answer from the community", async ({
    techQuestionDetailsPage,
    page,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.ClearCodeEditor();
    await techQuestionDetailsPage.AnswerQuestion(datasource.correctanswer);
    await techQuestionDetailsPage.ClickSubmitButton();
    await expect(page.getByText("Your solution is correct")).toBeVisible();
    await techQuestionDetailsPage.ClickCommunityShareButton();
    await expect(page.getByText("Shared in community solutions")).toBeVisible();
    await techQuestionDetailsPage.NavigateToSubmissionsTab();
    await techQuestionDetailsPage.FilterNewestSolutions();
    await techQuestionDetailsPage.DeleteCommunitySolution();
    await expect(page.getByText("Solution deleted successfully")).toBeVisible();

    // await expect(rows).toHaveCount(before - 1);
  });

  test("Verify that the user can add a question to an existing bookmark list.", async ({
    techQuestionDetailsPage,
  }) => {
    await techQuestionDetailsPage.openfreequestion();
    await techQuestionDetailsPage.BookmarkQuestion();
  });
});
