import { Page } from "@playwright/test";
import { LocatorManager } from "../locators/LocatorManager";

export default class LoginPage {
  private readonly page: Page;
  private readonly locators: typeof LocatorManager.LoginPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = LocatorManager.LoginPageLocators;
  }
  async loginWithValidCredentials(email: string, password: string) {
    await this.page.goto("/");
    await this.page.getByRole("link", { name: "Login" }).click();
    await this.page.getByPlaceholder(this.locators.UN_PH).fill(email);
    await this.page.getByPlaceholder(this.locators.PW_PH).fill(password);
    // Click login and wait for the Dashboard link to appear which indicates a successful login
    await Promise.all([
      this.page.getByRole("button", { name: "Login" }).click(),
      this.page
        .getByRole("link", { name: "Dashboard" })
        .waitFor({ state: "visible", timeout: 30000 }),
    ]);
  }
}
