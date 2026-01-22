import { expect, test } from "../../fixtures/fixtures.ts";

test.describe("Question Test Cases", () => {
  test("Check the progress bar", async ({ questionPage, page }) => {
    await questionPage.navigatetoquestionpage();
    await expect(page.getByText("All skillsAll the timeLast")).toBeVisible();
  });
});

//Create a seperate file for locators
//Try plywright agents for test generation
