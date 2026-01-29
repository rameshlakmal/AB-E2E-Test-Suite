import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test("G1. Projects listing loads for guest", async ({ projectsPage }) => {
  await projectsPage.open();
  await projectsPage.expectProjectsListVisible();
  await projectsPage.expectMoreProjectsVisibleAfterScroll();
});
