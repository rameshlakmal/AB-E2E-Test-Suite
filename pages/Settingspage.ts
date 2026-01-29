import { Page } from "@playwright/test";
import type { PersonalInfo } from "../types/profile.types";
import { LocatorManager } from "../locators/LocatorManager";

export default class SettingsPage {
  private page: Page;
  private navlocators: typeof LocatorManager.NavigationLocators;
  private settingsLocators: typeof LocatorManager.SettingsPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.navlocators = LocatorManager.NavigationLocators;
    this.settingsLocators = LocatorManager.SettingsPageLocators;
  }

  async NavigateToSettings(): Promise<void> {
    await this.page.goto("/");
    await this.page.locator(this.navlocators.Profile).click();
    await this.page
      .getByRole("link", { name: this.settingsLocators.SettingsLinkName })
      .click();
  }

  async ChangeEmail(email: string): Promise<void> {
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.EmailTextboxName })
      .fill(email);
  }
  async clickUpdateEmailButton(): Promise<void> {
    await this.page
      .getByRole("button", { name: this.settingsLocators.UpdateButtonName })
      .nth(1)
      .click();
  }

  async ChangeUserName(username: string): Promise<void> {
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.UserNameTextboxName })
      .fill(username);
  }

  async clickUpdateUsernameButton(username: string) {
    await this.page
      .locator(this.settingsLocators.UserNameFormSelector)
      .filter({
        hasText: `${this.settingsLocators.UserNameFormTextPrefix}${username}${this.settingsLocators.UserNameFormTextSuffix}`,
      })
      .getByRole("button")
      .click();
  }

  async ChangePersonalInformation(info: PersonalInfo): Promise<void> {
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.FirstNameTextboxName })
      .fill(info.firstname);
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.LastNameTextboxName })
      .fill(info.lastname);
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.LiveInTextboxName })
      .fill(info.country);
    await this.page
      .getByRole("textbox", { name: this.settingsLocators.AboutTextboxName })
      .fill(info.about);
    await this.page
      .locator(this.settingsLocators.SocialLinksInputSelector)
      .fill(info.sociallink);
  }

  async clickUpdateProfileInfoButton() {
    await this.page
      .getByRole("button", { name: this.settingsLocators.SaveChangesButtonName })
      .click();
  }
}
