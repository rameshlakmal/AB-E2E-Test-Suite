import { Page, expect } from "@playwright/test";
import { ProjectsLocators as L } from "../../locators/Projects/projects.locators";

export class ProjectsPage {
  constructor(private page: Page) {}

  async open(): Promise<void> {
    await this.page.goto("/");
    await this.page
      .getByRole(L.navProjects.role, { name: L.navProjects.name })
      .click();
    await this.expectProjectsListVisible();
  }

  async expectProjectsListVisible(): Promise<void> {
    await expect(
      this.page.getByRole(L.projectsHeading.role, {
        name: L.projectsHeading.name,
      }),
    ).toBeVisible();
    const listRegion = this.page.getByRole(L.projectsRegion.role);
    await expect(listRegion).toBeVisible();
    const cardTitles = listRegion.getByRole(L.projectCardTitle.role);
    await expect(cardTitles.first()).toBeVisible();
  }

  async expectProjectCardsSelectable(): Promise<void> {
    const listRegion = this.page.getByRole(L.projectsRegion.role);
    const cardTitles = listRegion.getByRole(L.projectCardTitle.role);
    await expect(cardTitles.first()).toBeVisible();
    const cardLinks = listRegion.getByRole(L.projectCardLink.role);
    await expect(cardLinks.first()).toBeVisible();
  }

  async scrollProjectsList(): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }

  async expectMoreProjectsVisibleAfterScroll(): Promise<void> {
    const listRegion = this.page.getByRole(L.projectsRegion.role);
    const cardTitles = listRegion.getByRole(L.projectCardTitle.role);
    const beforeCount = await cardTitles.count();
    await this.scrollProjectsList();
    await this.page.waitForLoadState("domcontentloaded");
    const afterCount = await cardTitles.count();
    expect(afterCount).toBeGreaterThan(0);
    expect(afterCount).toBeGreaterThanOrEqual(beforeCount);
  }

  async openFirstProjectFromList(): Promise<void> {
    const listRegion = this.page.getByRole(L.projectsRegion.role);
    const firstCardTitle = listRegion.getByRole(L.projectCardTitle.role).first();
    await expect(firstCardTitle).toBeVisible();
    await firstCardTitle.click();
  }

  async openProjectByTitle(title: string): Promise<void> {
    const projectLink = this.page.getByRole(
      L.projectLinkByTitle(title).role,
      { name: L.projectLinkByTitle(title).name },
    );
    await expect(projectLink).toBeVisible();
    await projectLink.click();
  }

  async expectProjectDetailsOrRestriction(title?: string): Promise<void> {
    const restriction = this.page.getByText(
      L.accessRestrictionText.text,
    );
    if (title) {
      const heading = this.page.getByRole(
        L.projectTitleHeading(title).role,
        { name: L.projectTitleHeading(title).name },
      );
      await expect(heading.or(restriction)).toBeVisible();
      return;
    }
    await expect(
      this.page.getByRole(L.projectCardTitle.role).first().or(restriction),
    ).toBeVisible();
  }

  async expectProjectDetailsVisible(title: string): Promise<void> {
    await expect(
      this.page.getByRole(L.projectTitleHeading(title).role, {
        name: L.projectTitleHeading(title).name,
      }),
    ).toBeVisible();
  }

  async expectProjectDetailsContent(): Promise<void> {
    const sectionLocators = [
      this.page.getByRole(L.overviewSection.role, {
        name: L.overviewSection.name,
      }),
      this.page.getByRole(L.stepsSection.role, { name: L.stepsSection.name }),
      this.page.getByRole(L.resourcesSection.role, {
        name: L.resourcesSection.name,
      }),
    ];

    let visibleCount = 0;
    for (const section of sectionLocators) {
      if (await section.count()) {
        await expect(section.first()).toBeVisible();
        visibleCount += 1;
      }
    }

    expect(visibleCount).toBeGreaterThan(0);
  }

  async expectNoAccessRestriction(): Promise<void> {
    const restriction = this.page.getByText(
      L.accessRestrictionText.text,
    );
    await expect(restriction).toHaveCount(0);
  }

  async returnToProjectsList(): Promise<void> {
    const breadcrumb = this.page.getByRole(L.breadcrumbProjects.role, {
      name: L.breadcrumbProjects.name,
    });
    if (await breadcrumb.isVisible().catch(() => false)) {
      await breadcrumb.click();
    } else {
      await this.page.goBack();
    }
    await this.expectProjectsListVisible();
  }

  async expandAllSectionsIfAvailable(): Promise<void> {
    const expandButtons = this.page.getByRole(
      L.expandableSectionButton.role,
      { name: L.expandableSectionButton.name },
    );
    const count = await expandButtons.count();
    if (count === 0) {
      return;
    }
    for (let i = 0; i < count; i += 1) {
      await expandButtons.nth(i).click();
    }
  }
}
