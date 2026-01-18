import { Page } from "@playwright/test";

export default class TechQuestionDetailsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openpremiumquestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator("header")
      .getByRole("link", { name: "Questions" })
      .click();

    await this.page
      .getByRole("link", { name: "IT Department very-hard" })
      .click();
  }

  async openfreequestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator("header")
      .getByRole("link", { name: "Questions" })
      .click();

    await this.page
      .getByRole("link", { name: "Data Sources very-hard" })
      .click();
  }

  async OpenQuestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator("header")
      .getByRole("link", { name: "Questions" })
      .click();

    await this.page
      .getByRole("link", { name: "Traffic Control moderate" })
      .click();
  }

  async NavigateToSubmissionsTab(): Promise<void> {
    await this.page.getByRole("tab", { name: "Solutions" }).click();
    await this.page.getByRole("tab", { name: "Community" }).click();
  }

  async ClearCodeEditor(): Promise<void> {
    await this.page.getByRole("textbox").clear();
  }

  async AnswerQuestion(answer: string): Promise<void> {
    // await this.page.getByRole("button", { name: "Python" }).click();
    // await this.page.getByRole("button", { name: "MySQL" }).click();
    await this.page.getByRole("textbox").fill(answer);
  }
  async ClickSubmitButton(): Promise<void> {
    await this.page.getByRole("button", { name: "Check Answer" }).click();
  }
  async ClickCommunityShareButton(): Promise<void> {
    await this.page
      .locator(".flex.w-full.items-center > button:nth-child(5)")
      .click();
  }

  async NavigateToCommunitySolutionsTab(): Promise<void> {
    await this.page.getByRole("tab", { name: "Solutions" }).click();
    await this.page.getByRole("tab", { name: "Community" }).click();
  }
  async FilterNewestSolutions(): Promise<void> {
    await this.page.getByRole("button", { name: "Popularity" }).click();
    await this.page.getByRole("button", { name: "Newest" }).click();
  }

  async DeleteCommunitySolution(): Promise<void> {
    await this.page
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(5)
      .click();
  }

  async ViewHints(): Promise<void> {
    await this.page.getByRole("button", { name: "Hints" }).click();
  }

  async ViewExpectedOutput(): Promise<void> {
    await this.page.getByRole("button", { name: "Expected Output" }).click();
  }

  async BookmarkQuestion(): Promise<void> {
    await this.page
      .locator("#tabs-home")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .click();
    await this.page
      .getByRole("checkbox", { name: "Questions", exact: true })
      .click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }
}
