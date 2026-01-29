export const ProjectsLocators = {
  navProjects: { role: "link", name: "Projects" },
  projectsHeading: { role: "heading", name: "Projects" },
  projectsRegion: { role: "main" },
  projectCardTitle: { role: "heading" },
  projectCardLink: { role: "link" },
  projectLinkByTitle: (title: string) => ({ role: "link", name: title }),
  projectTitleHeading: (title: string) => ({ role: "heading", name: title }),
  breadcrumbProjects: { role: "link", name: "Projects" },
  accessRestrictionText: {
    text: /sign in|log in|subscribe|purchase|upgrade|restricted|access/i,
  },
  overviewSection: { role: "heading", name: /overview/i },
  stepsSection: { role: "heading", name: /steps/i },
  resourcesSection: { role: "heading", name: /resources/i },
  expandableSectionButton: {
    role: "button",
    name: /expand|show|read more|view|more|open/i,
  },
} as const;
