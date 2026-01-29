import { BookmarkPageLocators } from "./BookmarkPageLocators";
import { LoginPageLocators } from "./LoginPageLocators";
import { NavigationLocators } from "./NavigationLocators";
import { QuestionPageLocators } from "./QuestionPageLocators";
import { SettingsPageLocators } from "./SettingsPageLocators";
import { TQuestionDetailsPageLocators } from "./TQuestionDetailsPageLocators";

export interface LocatorManagerType {
  BookmarkPageLocators: typeof BookmarkPageLocators;
  LoginPageLocators: typeof LoginPageLocators;
  NavigationLocators: typeof NavigationLocators;
  QuestionPageLocators: typeof QuestionPageLocators;
  SettingsPageLocators: typeof SettingsPageLocators;
  TQuestionDetailsPageLocators: typeof TQuestionDetailsPageLocators;
  // Add other page locators here
}

export const LocatorManager: LocatorManagerType = {
  BookmarkPageLocators,
  LoginPageLocators,
  NavigationLocators,
  QuestionPageLocators,
  SettingsPageLocators,
  TQuestionDetailsPageLocators,
};
