import { expect, Page, TestInfo } from "@playwright/test";

type Role = "guest" | "user" | "purchased";

export function roleFrom(testInfo: TestInfo): Role {
  const role = testInfo.project.name as Role;
  if (!["guest", "user", "purchased"].includes(role)) {
    throw new Error(`Unknown role/project: ${testInfo.project.name}`);
  }
  return role;
}

async function byRole(
  page: Page,
  role: Role,
  checks: Record<Role, () => Promise<void>>
) {
  await checks[role]();
}
export const QuestionDetailsPageAssertions = {
  async openpremiumquestion(page: Page, role: Role) {
    await byRole(page, role, {
      guest: async () =>
        expect(page.getByText("Oops!You need to log in to")).toBeVisible(),

      user: async () =>
        expect(page.getByText("Highlight to execute").first()).toBeVisible(),

      purchased: async () =>
        expect(page.getByText("Oops!You need to log in to")).toBeVisible(),
    });
  },

  async openfreequestion(page: Page, role: Role) {
    const guestText = page.getByText("Oops!You need to log in to");
    const memberText = page.getByText("Highlight to execute").first();

    const guestView = async () => {
      await expect(guestText).toBeVisible();
    };

    const memberView = async () => {
      await expect(memberText).toBeVisible();
    };

    await byRole(page, role, {
      guest: guestView,
      user: memberView,
      purchased: memberView,
    });
  },

  async EmptySubmissionTabAssertions(page: Page, role: Role) {
    const tabnamevisibility = page.getByRole("tab", {
      name: "Your Submissions",
    });

    const submissionsTabText = page
      .locator("div")
      .filter({
        hasText:
          /^No submissions yet Submit your code to see the results here!$/,
      })
      .nth(1);

    const notvisible = async () => {
      await expect(tabnamevisibility).not.toBeVisible();
    };

    const visible = async () => {
      await expect(submissionsTabText).toBeVisible();
    };

    await byRole(page, role, {
      guest: notvisible,
      user: visible,
      purchased: visible,
    });
  },
};
