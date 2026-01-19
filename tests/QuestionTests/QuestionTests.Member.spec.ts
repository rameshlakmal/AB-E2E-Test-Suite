import { expect, test } from "../../fixtures/fixtures.ts";

test.describe("Question Test Cases", () => {
  test("Check the progress bar", async ({ questionPage, page }) => {
    await questionPage.navigatetoquestionpage();
    await expect(page.getByText("All skillsAll the timeLast")).toBeVisible();
  });
});

// Fix local errors
//Fix pipeline errors
//Create a seperate file for locators
//Login global setup for all tests
//Playwright allure reporter integration and show as output in the pipeline
//Try plywright agents for test generation
