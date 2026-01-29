import { Page } from "@playwright/test";
import { LocatorManager } from "../locators/LocatorManager";

export default class TechQuestionDetailsPage {
  private page: Page;
  private questionDetailsLocators: typeof LocatorManager.TQuestionDetailsPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.questionDetailsLocators = LocatorManager.TQuestionDetailsPageLocators;
  }

  async openpremiumquestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator(this.questionDetailsLocators.HeaderSelector)
      .getByRole("link", {
        name: this.questionDetailsLocators.QuestionsLinkName,
      })
      .click();

    await this.page
      .getByRole("link", {
        name: this.questionDetailsLocators.PremiumQuestionLinkName,
      })
      .click();
    await this.page.waitForTimeout(2000);
  }

  async openfreequestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator(this.questionDetailsLocators.HeaderSelector)
      .getByRole("link", {
        name: this.questionDetailsLocators.QuestionsLinkName,
      })
      .click();

    await this.page
      .getByRole("link", {
        name: this.questionDetailsLocators.FreeQuestionLinkName,
      })
      .click();
    await this.page.waitForTimeout(2000);
  }

  async OpenQuestion(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .locator(this.questionDetailsLocators.HeaderSelector)
      .getByRole("link", {
        name: this.questionDetailsLocators.QuestionsLinkName,
      })
      .click();

    await this.page
      .getByRole("link", {
        name: this.questionDetailsLocators.ModerateQuestionLinkName,
      })
      .click();
    await this.page.waitForTimeout(2000);
  }

  async NavigateToSubmissionsTab(): Promise<void> {
    await this.page
      .getByRole("tab", { name: this.questionDetailsLocators.SolutionsTabName })
      .click();
    await this.page
      .getByRole("tab", { name: this.questionDetailsLocators.CommunityTabName })
      .click();
  }

  async NavigateToYourSubmissionsTab(): Promise<void> {
    await this.page
      .getByRole("tab", {
        name: this.questionDetailsLocators.YourSubmissionsTabName,
      })
      .click();
  }

  async ClearCodeEditor(): Promise<void> {
    await this.page.getByRole(this.questionDetailsLocators.TextboxRole).clear();
  }

  async AnswerQuestion(answer: string): Promise<void> {
    // await this.page.getByRole("button", { name: "Python" }).click();
    // await this.page.getByRole("button", { name: "MySQL" }).click();
    await this.page.getByRole(this.questionDetailsLocators.TextboxRole).fill(answer);
  }
  async ClickSubmitButton(): Promise<void> {
    await this.page
      .getByRole("button", {
        name: this.questionDetailsLocators.CheckAnswerButtonName,
      })
      .click();
  }
  async ClickCommunityShareButton(): Promise<void> {
    await this.page
      .locator(this.questionDetailsLocators.CommunityShareButtonSelector)
      .click();
  }

  async NavigateToCommunitySolutionsTab(): Promise<void> {
    await this.page
      .getByRole("tab", { name: this.questionDetailsLocators.SolutionsTabName })
      .click();
    await this.page
      .getByRole("tab", { name: this.questionDetailsLocators.CommunityTabName })
      .click();
  }
  async FilterNewestSolutions(): Promise<void> {
    await this.page
      .getByRole("button", {
        name: this.questionDetailsLocators.PopularityButtonName,
      })
      .click();
    await this.page
      .getByRole("button", { name: this.questionDetailsLocators.NewestButtonName })
      .click();
  }

  async DeleteCommunitySolution(): Promise<void> {
    await this.page
      .locator(this.questionDetailsLocators.DeleteCommunitySolutionXPath)
      .click();
    await this.page.waitForTimeout(2000);
  }

  async ViewHints(): Promise<void> {
    await this.page
      .getByRole("button", { name: this.questionDetailsLocators.HintsButtonName })
      .click();
  }

  async ViewExpectedOutput(): Promise<void> {
    await this.page
      .getByRole("button", {
        name: this.questionDetailsLocators.ExpectedOutputButtonName,
      })
      .click();
  }

  async BookmarkQuestion(): Promise<void> {
    await this.page
      .locator(this.questionDetailsLocators.TabsHomeSelector)
      .getByRole("button")
      .filter({ hasText: this.questionDetailsLocators.EmptyButtonText })
      .click();
    await this.page
      .getByRole("checkbox", {
        name: this.questionDetailsLocators.BookmarkCheckboxName,
        exact: true,
      })
      .click();
    await this.page
      .getByRole("button", { name: this.questionDetailsLocators.DoneButtonName })
      .click();
  }
}
