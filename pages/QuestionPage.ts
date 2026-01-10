import { Page } from "@playwright/test";

export default class QuestionPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigatetoquestionpage(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator("header")
      .getByRole("link", { name: "Questions" })
      .click();
  }
}
