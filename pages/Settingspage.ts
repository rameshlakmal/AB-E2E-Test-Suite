import { Page } from "@playwright/test";
import type { PersonalInfo } from "../types/profile.types";

export default class SettingsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async NavigateToSettings(): Promise<void> {
    await this.page.goto("/");
    await this.page.locator("img.size-9.cursor-pointer.rounded-lg").click();
    await this.page.getByRole("link", { name: "Settings" }).click();
  }

  async ChangeEmail(email: string): Promise<void> {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  }
  async clickUpdateEmailButton(): Promise<void> {
    await this.page
      .locator("form")
      .filter({ hasText: "EmailUpdate" })
      .getByRole("button")
      .click();
  }

  async ChangeUserName(username: string): Promise<void> {
    await this.page.getByRole("textbox", { name: "User name" }).fill(username);
  }

  async clickUpdateUsernameButton(username: string) {
    await this.page
      .locator("form")
      .filter({ hasText: `User Name${username} is` })
      .getByRole("button")
      .click();
  }

  async ChangePersonalInformation(info: PersonalInfo): Promise<void> {
    await this.page
      .getByRole("textbox", { name: "Your First name" })
      .fill(info.firstname);
    await this.page
      .getByRole("textbox", { name: "Your Last name" })
      .fill(info.lastname);
    await this.page
      .getByRole("textbox", { name: "Live in" })
      .fill(info.country);
    await this.page
      .getByRole("textbox", { name: "About you" })
      .fill(info.about);
    await this.page
      .locator('input[name="socialLinks\\.0"]')
      .fill(info.sociallink);
  }

  async clickUpdateProfileInfoButton() {
    await this.page.getByRole("button", { name: "Save Changes" }).click();
  }
}
