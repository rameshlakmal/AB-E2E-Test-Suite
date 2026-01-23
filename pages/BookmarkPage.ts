import { Page } from "@playwright/test";
import { LocatorManager } from "../locators/LocatorManager";

export default class BookmarkPage {
  private page: Page;
  private navlocators: typeof LocatorManager.NavigationLocators;
  private bookmarkLocators: typeof LocatorManager.BookmarkPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.navlocators = LocatorManager.NavigationLocators;
    this.bookmarkLocators = LocatorManager.BookmarkPageLocators;
  }

  async NavigatetoBookmarkPage(): Promise<void> {
    await this.page.goto("/");
    await this.page.locator(this.navlocators.Profile).click();
    await this.page
      .getByRole("link", { name: this.bookmarkLocators.BookmarksLinkName })
      .click();
  }

  async CreateNewBookmarkList(listName: string): Promise<void> {
    await this.page
      .getByRole("button", { name: this.bookmarkLocators.NewListButtonName })
      .click();
    await this.page.getByRole(this.bookmarkLocators.TextboxRole).fill(listName);
    await this.page.getByRole(this.bookmarkLocators.TextboxRole).press("Enter");
    await this.page.getByRole("button", { name: listName }).click();
  }

  async CreateBookmarkListFromQuestionPage(newListName: string): Promise<void> {
    await this.page.goto("/");
    await this.page.locator(this.navlocators.Questions).click();
    await this.page
      .getByRole("link", {
        name: this.bookmarkLocators.DataSourcesVeryHardLinkName,
      })
      .click();
    await this.page
      .locator(this.bookmarkLocators.TabsHomeSelector)
      .getByRole("button")
      .filter({ hasText: this.bookmarkLocators.EmptyButtonText })
      .click();
    await this.page
      .getByRole("button", { name: this.bookmarkLocators.NewListButtonName })
      .click();
    await this.page
      .locator(this.bookmarkLocators.NewListTitleInput)
      .fill(newListName);
    await this.page
      .locator(this.bookmarkLocators.NewListTitleInput)
      .press("Enter");
    await this.page.locator(this.navlocators.Profile).click();
    await this.page
      .getByRole("link", { name: this.bookmarkLocators.BookmarksLinkName })
      .click();
    await this.page.waitForTimeout(5000); // Added wait to ensure the page is fully loaded
    await this.page.reload();
  }

  async CreateBookmarkListFromProjectPage(newListName: string): Promise<void> {
    await this.page.goto("/");
    await this.page
      .getByRole("link", {
        name: this.bookmarkLocators.ProjectsLinkName,
        exact: true,
      })
      .click();
    await this.page
      .getByRole("link", { name: this.bookmarkLocators.StartProjectLinkName })
      .nth(1)
      .click();

    await this.page
      .getByRole("heading", {
        name: this.bookmarkLocators.DataScienceHeadingName,
      })
      .getByRole("button")
      .click();
    await this.page
      .getByRole("button", { name: this.bookmarkLocators.NewListButtonName })
      .click();
    await this.page
      .locator(this.bookmarkLocators.NewListTitleInput)
      .fill(newListName);
    await this.page
      .locator(this.bookmarkLocators.NewListTitleInput)
      .press("Enter");
    await this.page.locator(this.navlocators.Profile).click();
    await this.page
      .getByRole("link", { name: this.bookmarkLocators.BookmarksLinkName })
      .click();
    await this.page.waitForTimeout(5000); // Added wait to ensure the page is fully loaded
    await this.page.reload();
  }

  async RenameBookmarkList(listName: string, newName: string): Promise<void> {
    await this.page.getByRole("button", { name: listName }).click();
    await this.page
      .locator(
        '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/div/div/button',
      )
      .click();

    await this.page.getByRole(this.bookmarkLocators.TextboxRole).fill(newName);
    await this.page.getByRole(this.bookmarkLocators.TextboxRole).press("Enter");
  }

  async DeleteBookmarkList(): Promise<void> {
    await this.page
      .locator(
        '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/button',
      )
      .click();
    await this.page
      .getByRole("button", { name: this.bookmarkLocators.ContinueButtonName })
      .click();
  }
}
