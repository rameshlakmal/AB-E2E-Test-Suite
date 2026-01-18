import { Page } from "@playwright/test";

export default class BookmarkPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async NavigatetoBookmarkPage(): Promise<void> {
    await this.page.goto("/");
    await this.page.getByRole("button", { name: "Polly" }).click();
    await this.page.getByRole("link", { name: "Bookmarks" }).click();
  }

  async CreateNewBookmarkList(listName: string): Promise<void> {
    await this.page.getByRole("button", { name: "New List" }).click();
    await this.page.getByRole("textbox").fill(listName);
    await this.page.getByRole("textbox").press("Enter");
    await this.page.getByRole("button", { name: listName }).click();
  }

  async CreateBookmarkListFromQuestionPage(newListName: string): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator("header")
      .getByRole("link", { name: "Questions" })
      .click();
    await this.page
      .getByRole("link", { name: "Data Sources very-hard" })
      .click();
    await this.page
      .locator("#tabs-home")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .click();
    await this.page.getByRole("button", { name: "New List" }).click();
    await this.page.locator('input[name="title"]').fill(newListName);
    await this.page.locator('input[name="title"]').press("Enter");
    await this.page.getByRole("button", { name: "Polly" }).click();
    await this.page.getByRole("link", { name: "Bookmarks" }).click();
  }

  async CreateBookmarkListFromProjectPage(newListName: string): Promise<void> {
    await this.page.goto("/");
    await this.page
      .getByRole("link", { name: "Projects", exact: true })
      .click();
    await this.page.getByRole("link", { name: "Start Project" }).nth(1).click();

    await this.page
      .getByRole("heading", { name: "Data Science Demystified: How" })
      .getByRole("button")
      .click();
    await this.page.getByRole("button", { name: "New List" }).click();
    await this.page.locator('input[name="title"]').fill(newListName);
    await this.page.locator('input[name="title"]').press("Enter");
    await this.page.getByRole("button", { name: "Polly" }).click();
    await this.page.getByRole("link", { name: "Bookmarks" }).click();
  }

  async RenameBookmarkList(listName: string, newName: string): Promise<void> {
    await this.page.getByRole("button", { name: listName }).click();
    await this.page
      .locator(
        '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/div/div/button',
      )
      .click();

    await this.page.getByRole("textbox").fill(newName);
    await this.page.getByRole("textbox").press("Enter");
  }

  async DeleteBookmarkList(): Promise<void> {
    await this.page
      .locator(
        '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/button',
      )
      .click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}
