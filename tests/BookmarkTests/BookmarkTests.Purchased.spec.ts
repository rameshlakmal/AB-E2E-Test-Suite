import { test, expect } from "../../fixtures/fixtures.ts";
import { faker } from "@faker-js/faker";

test.describe("bookmark Page Test Cases", () => {
  let bookmarkListName: string;
  let newName: string;

  test.beforeAll(() => {
    bookmarkListName = faker.lorem.word();
    newName = faker.lorem.word();
  });

  test("Verify that rename a bookmark list", async ({ bookmarkPage, page }) => {
    await bookmarkPage.NavigatetoBookmarkPage();
    await bookmarkPage.CreateNewBookmarkList(bookmarkListName);
    await expect(
      page.getByRole("button", { name: bookmarkListName }),
    ).toBeVisible();

    await bookmarkPage.RenameBookmarkList(bookmarkListName, newName);
    await expect(page.getByRole("button", { name: newName })).toBeVisible();
  });

  test("Verify that user create a bookmark list", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.NavigatetoBookmarkPage();
    await bookmarkPage.CreateNewBookmarkList(bookmarkListName);
    await expect(
      page.getByRole("button", { name: bookmarkListName }),
    ).toBeVisible();
  });

  test("Verify that user create a bookmark list from question detail page", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.CreateBookmarkListFromQuestionPage(bookmarkListName);
    await expect(
      page.getByRole("button", { name: bookmarkListName }),
    ).toBeVisible();
  });

  test("Verify that user create a bookmark list from project detail page", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.CreateBookmarkListFromProjectPage(bookmarkListName);
    await page.waitForTimeout(2000); // Added wait to ensure the page is fully loaded
    await expect(
      page.getByRole("button", { name: bookmarkListName }),
    ).toBeVisible();
  });

  test("Verify that user delete a bookmark list", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.NavigatetoBookmarkPage();
    await bookmarkPage.CreateNewBookmarkList(bookmarkListName);
    await expect(
      page.getByRole("button", { name: bookmarkListName }),
    ).toBeVisible();
    await bookmarkPage.DeleteBookmarkList();
  });
});
