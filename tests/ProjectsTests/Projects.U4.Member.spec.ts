import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("U4. User returns to Projects list from details", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.openFirstProjectFromList();
  await projectsPage.returnToProjectsList();
});
