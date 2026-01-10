import { test, expect } from "../fixtures/fixtures.ts";
import { faker } from "@faker-js/faker";
import { Login } from "../test-data/test-data.json";
import type { PersonalInfo } from "../types/profile.types";

test.describe("Settings Test Cases", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(
      testInfo.project.name !== "purchased",
      "Runs only for purchased users"
    );
  });

  let personalInfo: PersonalInfo;

  test.beforeAll(() => {
    personalInfo = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      country: faker.location.country(),
      about: faker.lorem.sentence(),
      sociallink: faker.internet.url(),
    };
  });

  test("Verify that user can update their username", async ({
    settingsPage,
    page,
  }) => {
    const username = faker.internet.username();

    await settingsPage.NavigateToSettings();
    await settingsPage.ChangeUserName(username);
    await expect(page.getByText(username + " is available")).toBeVisible();
    await settingsPage.clickUpdateUsernameButton(username);
    await expect(page.getByText("Username updated!")).toBeVisible();
  });

  test("Verify that user cannot enter invalid characters to the username field", async ({
    settingsPage,
    page,
  }) => {
    await settingsPage.NavigateToSettings();
    await settingsPage.ChangeUserName(faker.lorem.word(5) + "@@@");
    await expect(page.getByText("Invalid username format")).toBeVisible();
  });

  test("Verify that user can change email successfully", async ({
    settingsPage,
    page,
  }) => {
    await settingsPage.NavigateToSettings();
    await settingsPage.ChangeEmail(faker.internet.email());
    await settingsPage.clickUpdateEmailButton();
    await expect(page.getByText("Confirmation email sent to")).toBeVisible();
  });

  test("Verify that users cannot change their email again immediately after updating it.", async ({
    settingsPage,
    page,
  }) => {
    await settingsPage.NavigateToSettings();
    await settingsPage.ChangeEmail(faker.internet.email());
    await settingsPage.ChangeEmail(faker.internet.email());
    await settingsPage.clickUpdateEmailButton();

    await expect(page.getByText("For security purposes, you")).toBeVisible();
  });

  test("Verify that users cannot set an already registered email address as their new email.", async ({
    settingsPage,
    page,
  }) => {
    await settingsPage.NavigateToSettings();
    await settingsPage.ChangeEmail(Login.paidemail);
    await settingsPage.clickUpdateEmailButton();
    await expect(page.getByText("A user with this email")).toBeVisible();
  });

  test("Verify that the user can update their details, including location, social media links, portfolio links, and bio.", async ({
    settingsPage,
    page,
  }) => {
    await settingsPage.NavigateToSettings();
    await settingsPage.ChangePersonalInformation(personalInfo);
    await settingsPage.clickUpdateProfileInfoButton();
    await expect(page.getByText("Profile updated!")).toBeVisible();
  });
});
