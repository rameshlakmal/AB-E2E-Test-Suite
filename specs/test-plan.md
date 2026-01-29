# AnalystBuilder Projects Test Plan

## Scope
- Target: https://staging.analystbuilder.com/
- Roles: guest, user, purchased
- Authentication: HTTP Basic Auth (username: te3ter, password: 22JJ33kk)
- Focus: Projects page, project listing and details, and the project "Data Science Demystified: How to Build Your First Data Science Project from Scratch"
- Assumption: each scenario starts from a clean session with no cached state
- Exclusions: login-related scenarios

## Shared Preconditions
1. Open a new browser context with HTTP Basic Auth using te3ter / 22JJ33kk.
2. Navigate to https://staging.analystbuilder.com/.
3. From the top navigation, select Projects.
4. Confirm the Projects page loads and the project list is visible.

## Guest Role Scenarios

### G1. Projects listing loads for guest
Steps:
1. Complete the Shared Preconditions as a guest session.
2. Verify the Projects page shows a list or grid of project cards.
3. Scroll the list and verify more projects load or are visible.
Expected:
- Project list renders without errors and is scrollable.
Success criteria:
- Project cards are visible and contain titles.
Failure conditions:
- Empty list without messaging or page errors.

### G2. Guest opens project details from list
Steps:
1. From the Projects page, select any project card.
2. Observe whether the project details view opens.
Expected:
- Details page opens or an access restriction message is shown.
Success criteria:
- Behavior matches guest permissions without UI errors.
Failure conditions:
- Broken navigation or blank details page.

### G3. Guest access to "Data Science Demystified" details
Steps:
1. Locate the project "Data Science Demystified: How to Build Your First Data Science Project from Scratch" in the list.
2. Open the project details.
Expected:
- Details open or access restriction is shown.
Success criteria:
- Project entry is discoverable and selection behaves correctly for guest.
Failure conditions:
- Project is missing from the list or details do not load.

## User Role Scenarios

### U1. Projects listing loads for user
Steps:
1. Complete the Shared Preconditions as a user session.
2. Verify each project card includes a title and a visible entry point to details.
Expected:
- Project list renders with consistent card information.
Success criteria:
- All cards include a title and are selectable.
Failure conditions:
- Missing titles or non-clickable cards.

### U2. User opens project details from list
Steps:
1. Select a project card from the list.
2. Verify the details page shows the project title, description, and any sections (overview, steps, resources).
Expected:
- Details page loads with primary content visible.
Success criteria:
- Title and main content are present.
Failure conditions:
- Details page loads without key content or errors.

### U3. User views "Data Science Demystified" details
Steps:
1. Locate "Data Science Demystified: How to Build Your First Data Science Project from Scratch" in the list.
2. Open the project details page.
3. Verify the full project title is displayed at the top of the details page.
Expected:
- The correct project details are displayed for the selected project.
Success criteria:
- Title matches exactly and details load.
Failure conditions:
- Title mismatch or wrong project opens.

### U4. User returns to Projects list from details
Steps:
1. Open any project details page.
2. Navigate back to the Projects list (back button or breadcrumb).
3. Verify the list state is retained or reloaded without errors.
Expected:
- User can return to list and continue browsing.
Success criteria:
- Projects list renders after returning.
Failure conditions:
- Navigation back fails or list does not render.

## Purchased Role Scenarios

### P1. Purchased listing and details access
Steps:
1. Complete the Shared Preconditions as a purchased session.
2. Open any project details page from the list.
3. Verify content sections and any premium indicators are visible.
Expected:
- Details page loads and premium content (if present) is accessible.
Success criteria:
- Purchased users can view full project details without restriction.
Failure conditions:
- Access restriction appears for purchased users.

### P2. Purchased view of "Data Science Demystified" details
Steps:
1. Locate "Data Science Demystified: How to Build Your First Data Science Project from Scratch" in the list.
2. Open the project details page.
3. Verify the project title and key content sections are available.
Expected:
- Full details are accessible for purchased users.
Success criteria:
- Title matches and content sections load.
Failure conditions:
- Missing sections or blocked content.

### P3. Purchased project detail deep content
Steps:
1. Open any project details page.
2. Scroll through the page and interact with any expandable sections (if available).
3. Verify content expands and remains readable.
Expected:
- All content is accessible and expandable where applicable.
Success criteria:
- No errors when expanding or scrolling.
Failure conditions:
- Content fails to render or interaction breaks.
