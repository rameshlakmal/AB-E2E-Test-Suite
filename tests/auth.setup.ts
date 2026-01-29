// global-setup.ts
import { chromium, type FullConfig } from "@playwright/test";
import { Login } from "../test-data/test-data.json";
import LoginPage from "../pages/LoginPage";

const httpCredentials = {
  username: "te3ter",
  password: "22JJ33kk",
};

export default async function globalSetup(config: FullConfig) {
  const baseURL =
    process.env.BASE_URL ||
    (config.projects[0]?.use?.baseURL as string) ||
    "https://staging.analystbuilder.com/";

  const browser = await chromium.launch();

  try {
    // user
    {
      const context = await browser.newContext({ baseURL, httpCredentials });
      const page = await context.newPage();
      const loginPage = new LoginPage(page);

      await loginPage.loginWithValidCredentials(
        Login.useremail,
        Login.userpassword,
      );

      // replace expect(...) with a deterministic wait
      await page
        .getByRole("link", { name: "Dashboard" })
        .waitFor({ state: "visible" });

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
        Login.paidpassword,
      );

      await page
        .getByRole("link", { name: "Dashboard" })
        .waitFor({ state: "visible" });

      await context.storageState({ path: "./.auth/purchased.json" });
      await context.close();
    }
  } finally {
    await browser.close();
  }
}
