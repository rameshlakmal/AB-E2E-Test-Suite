import { test } from "../fixtures/fixtures.ts";
import {
  roleFrom,
  QuestionDetailsPageAssertions,
} from "../assertions/TechQDetailsPageAssertions.ts";

test.describe("Technical Question page Test Cases", () => {
  test("Check submission tab when there are no submissions ", async ({
    techQuestionDetailsPage,
    page,
  }, testInfo) => {
    await techQuestionDetailsPage.OpenQuestion();
    await techQuestionDetailsPage.NavigateToSubmissionsTab();
    await QuestionDetailsPageAssertions.EmptySubmissionTabAssertions(
      page,
      roleFrom(testInfo)
    );
  });

  test("Open a premium question", async ({
    techQuestionDetailsPage,
    page,
  }, testInfo) => {
    await techQuestionDetailsPage.openpremiumquestion();
    await QuestionDetailsPageAssertions.openpremiumquestion(
      page,
      roleFrom(testInfo)
    );
  });

  test("Open a free question", async ({
    techQuestionDetailsPage,
    page,
  }, testInfo) => {
    await techQuestionDetailsPage.openfreequestion();
    await QuestionDetailsPageAssertions.openfreequestion(
      page,
      roleFrom(testInfo)
    );
  });
});
