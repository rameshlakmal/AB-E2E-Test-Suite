import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import QuestionPage from "../pages/QuestionPage";
import TechQuestionDetailsPage from "../pages/TQuestionDetailsPage";
import BookmarkPage from "../pages/BookmarkPage";
import SettingsPage from "../pages/Settingspage";

type Fixtures = {
  loginPage: LoginPage;
  questionPage: QuestionPage;
  techQuestionDetailsPage: TechQuestionDetailsPage;
  settingsPage: SettingsPage;
  bookmarkPage: BookmarkPage;
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
  bookmarkPage: async ({ page }, use) => {
    await use(new BookmarkPage(page));
  },
});

export { expect } from "@playwright/test";
