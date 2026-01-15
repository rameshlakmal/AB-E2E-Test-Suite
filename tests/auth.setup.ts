import { Login } from "../test-data/test-data.json";
import { expect, test as setup } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const baseURL = process.env.BASE_URL || "https://staging.analystbuilder.com/";

const httpCredentials = {
  username: "te3ter",
  password: "22JJ33kk",
};

setup("User Login", async ({ browser }) => {
  // user
  {
    const context = await browser.newContext({ baseURL, httpCredentials });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.loginWithValidCredentials(
      Login.useremail,
      Login.userpassword
    );

    // Ensure login completed before saving storage state
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
    await context.storageState({ path: "./.auth/user.json" });

    await context.close();
  }

  // purchased
  {
    const context = await browser.newContext({ baseURL, httpCredentials });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.loginWithValidCredentials(
      Login.paidemail,
      Login.paidpassword
    );

    // Ensure login completed before saving storage state
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
    await context.storageState({ path: "./.auth/purchased.json" });

    await context.close();
  }
});
