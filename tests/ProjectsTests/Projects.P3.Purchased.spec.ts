import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("P3. Purchased project detail deep content", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.openFirstProjectFromList();
  await projectsPage.expandAllSectionsIfAvailable();
  await projectsPage.expectProjectDetailsContent();
});
