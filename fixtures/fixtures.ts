import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import QuestionPage from "../pages/QuestionPage";
import TechQuestionDetailsPage from "../pages/TQuestionDetailspage";
import SettingsPage from "../pages/Settingspage";

type Fixtures = {
  loginPage: LoginPage;
  questionPage: QuestionPage;
  techQuestionDetailsPage: TechQuestionDetailsPage;
  settingsPage: SettingsPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  questionPage: async ({ page }, use) => {
    await use(new QuestionPage(page));
  },
  techQuestionDetailsPage: async ({ page }, use) => {
    await use(new TechQuestionDetailsPage(page));
  },
  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page));
  },
});

export { expect } from "@playwright/test";
