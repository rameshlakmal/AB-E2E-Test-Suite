import { test } from "../fixtures/fixtures.ts";
import {
  roleFrom,
  questionAssert,
} from "../assertions/QuestionPageAssertions.ts";

test.describe("Question Test Cases", () => {
  test("Check the progress bar", async ({ questionPage, page }, testInfo) => {
    await questionPage.navigatetoquestionpage();
    await questionAssert.checkprogressbar(page, roleFrom(testInfo));
  });

  test("Verify that visiblity of the status dropdown", async ({
    questionPage,
    page,
  }, testInfo) => {
    await questionPage.navigatetoquestionpage();
    await questionAssert.statusdropdownvisibility(page, roleFrom(testInfo));
  });
});
