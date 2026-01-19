import { test, expect } from "../../fixtures/fixtures.ts";
import { faker } from "@faker-js/faker";

test.describe("bookmark Page Test Cases", () => {
  let bookmarkListName: string;
  let newName: string;
  let createbookmarklist: string;
  let bookmarkListFromQuestionPage: string;
  let bookmarkListFromProjectPage: string;

  test.beforeAll(() => {
    bookmarkListName = faker.lorem.word();
    newName = faker.lorem.word();
    createbookmarklist = faker.lorem.word();
    bookmarkListFromQuestionPage = faker.lorem.word();
    bookmarkListFromProjectPage = faker.lorem.word();
  });

  test("Verify that user can rename a bookmark list", async ({
    bookmarkPage,
    page,
  }) => {
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
    await bookmarkPage.CreateNewBookmarkList(createbookmarklist);
    await expect(
      page.getByRole("button", { name: createbookmarklist }),
    ).toBeVisible();
  });

  test("Verify that user create a bookmark list from question detail page", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.CreateBookmarkListFromQuestionPage(
      bookmarkListFromQuestionPage,
    );
    await expect(
      page.getByRole("button", { name: bookmarkListFromQuestionPage }),
    ).toBeVisible();
  });

  test("Verify that user create a bookmark list from project detail page", async ({
    bookmarkPage,
    page,
  }) => {
    await bookmarkPage.CreateBookmarkListFromProjectPage(
      bookmarkListFromProjectPage,
    );

    await expect(
      page.getByRole("button", { name: bookmarkListFromProjectPage }),
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
