import { test } from "../../fixtures/fixtures";

test.use({
  httpCredentials: {
    username: "te3ter",
    password: "22JJ33kk",
  },
});

test(
  "U3. User views Data Science Demystified details",
  async ({ projectsPage }) => {
    const projectTitle =
      "Data Science Demystified: How to Build Your First Data Science Project from Scratch";

    await projectsPage.open();
    await projectsPage.openProjectByTitle(projectTitle);
    await projectsPage.expectProjectDetailsVisible(projectTitle);
  },
);
