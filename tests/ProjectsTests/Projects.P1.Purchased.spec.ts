import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("P1. Purchased listing and details access", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.openFirstProjectFromList();
  await projectsPage.expectNoAccessRestriction();
  await projectsPage.expectProjectDetailsContent();
});
