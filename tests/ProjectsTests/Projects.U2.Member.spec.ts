import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("U2. User opens project details from list", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.openFirstProjectFromList();
  await projectsPage.expectProjectDetailsContent();
});
