import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("U1. Projects listing loads for user", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.expectProjectCardsSelectable();
});
