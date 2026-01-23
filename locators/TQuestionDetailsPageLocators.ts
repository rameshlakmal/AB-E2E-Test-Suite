export const TQuestionDetailsPageLocators = {
  HeaderSelector: "header",
  QuestionsLinkName: "Questions",
  PremiumQuestionLinkName: "IT Department very-hard",
  FreeQuestionLinkName: "Data Sources very-hard",
  ModerateQuestionLinkName: "Traffic Control moderate",
  SolutionsTabName: "Solutions",
  CommunityTabName: "Community",
  YourSubmissionsTabName: "Your Submissions",
  TextboxRole: "textbox",
  CheckAnswerButtonName: "Check Answer",
  CommunityShareButtonSelector:
    ".flex.w-full.items-center > button:nth-child(5)",
  PopularityButtonName: "Popularity",
  NewestButtonName: "Newest",
  DeleteCommunitySolutionXPath:
    '//*[@id="tabs-home"]/div[2]/div[1]/div[2]/div/div[2]/div[2]/button',
  HintsButtonName: "Hints",
  ExpectedOutputButtonName: "Expected Output",
  TabsHomeSelector: "#tabs-home",
  EmptyButtonText: /^$/,
  BookmarkCheckboxName: "Questions",
  DoneButtonName: "Done",
} as const;
