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
    await this.page.getByRole("tab", { name: "Your Submissions" }).click();
  }
}
