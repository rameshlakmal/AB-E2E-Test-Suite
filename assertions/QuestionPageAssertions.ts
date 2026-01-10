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
export const questionAssert = {
  async checkprogressbar(page: Page, role: Role) {
    const guestText = page.getByText(
      "About our Questions PageBundle of Questions that may be used in production!"
    );
    const progressText = page.getByText("Your Progress");

    const guestView = async () => {
      await expect(guestText).toBeVisible();
    };

    const memberView = async () => {
      await expect(progressText).toBeVisible();
    };

    await byRole(page, role, {
      guest: guestView,
      user: memberView,
      purchased: memberView,
    });
  },

  async statusdropdownvisibility(page: Page, role: Role) {
    const statusdropdownvisibility = page.getByRole("button", {
      name: "Status",
    });

    const notvisible = async () => {
      await expect(statusdropdownvisibility).not.toBeVisible();
    };
    const visible = async () => {
      await expect(statusdropdownvisibility).toBeVisible();
    };
    await byRole(page, role, {
      guest: notvisible,
      user: visible,
      purchased: visible,
    });
  },
};
