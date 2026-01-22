import { LoginPageLocators } from "./LoginPageLocators";
import { NavigationLocators } from "./NavigationLocators";

export interface LocatorManagerType {
  LoginPageLocators: typeof LoginPageLocators;
  NavigationLocators: typeof NavigationLocators;
  // Add other page locators here
}

export const LocatorManager: LocatorManagerType = {
  LoginPageLocators,
  NavigationLocators,
};
