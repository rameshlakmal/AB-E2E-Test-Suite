export const BookmarkPageLocators = {
  BookmarksLinkName: "Bookmarks",
  NewListButtonName: "New List",
  TextboxRole: "textbox",
  NewListTitleInput: 'input[name="title"]',
  HeaderSelector: "header",
  DataSourcesVeryHardLinkName: "Data Sources very-hard",
  TabsHomeSelector: "#tabs-home",
  EmptyButtonText: /^$/,
  ProjectsLinkName: "Projects",
  QuestionsLinkName: "Questions",
  StartProjectLinkName: "Start Project",
  DataScienceHeadingName: "Data Science Demystified: How",
  BookmarkListMenuButtonXPath:
    '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/div/div/button',
  BookmarkListDeleteButtonXPath:
    '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/button',
  ContinueButtonName: "Continue",
  BookmarkListDeleteButton:
    '//*[@id="main-content"]/div/div/div/div[2]/div[2]/div/div[1]/button',
} as const;
