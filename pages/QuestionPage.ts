import { Page } from "@playwright/test";
import { LocatorManager } from "../locators/LocatorManager";

export default class QuestionPage {
  private page: Page;
  private questionLocators: typeof LocatorManager.QuestionPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.questionLocators = LocatorManager.QuestionPageLocators;
  }

  async navigatetoquestionpage(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator(this.questionLocators.HeaderSelector)
      .getByRole("link", { name: this.questionLocators.QuestionsLinkName })
      .click();
  }
}
