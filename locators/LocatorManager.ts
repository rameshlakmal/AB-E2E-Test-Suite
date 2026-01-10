import { LoginPageLocators } from "./LoginPageLocators";

export interface LocatorManagerType {
  LoginPageLocators: typeof LoginPageLocators;
  // Add other page locators here
}

export const LocatorManager: LocatorManagerType = {
  LoginPageLocators,
};
