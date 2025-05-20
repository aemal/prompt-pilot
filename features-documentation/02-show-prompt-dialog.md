# Show Prompt Dialog Feature

## Overview
This feature allows users to open a modal dialog box by clicking an icon in the comment box. The dialog displays the original post content and provides a text area for entering prompt instructions.

## UI Components

### Modal Dialog
- A modal dialog box that appears when the user clicks the prompt icon
- Contains two main sections:
  1. Post Content Display
  2. Prompt Input Area

### Post Content Display
- Located at the top of the modal
- Shows the scraped content from the original post
- Contained within a scrollable div for better visibility
- Maximum height set to ensure it fits within one screen
- Extracts content from the following DOM structure:
  ```html
  <div class="feed-shared-inline-show-more-text feed-shared-update-v2__description">
    <div class="update-components-text relative update-components-update-v2__commentary">
      <!-- Post content -->
    </div>
  </div>
  ```

### Prompt Input Area
- Large text area for entering prompt instructions
- Located below the post content display
- Full width of the modal
- Clear visual separation from the post content

## Functionality
1. User clicks the prompt icon in the comment box
2. Modal dialog opens
3. Original post content is automatically scraped and displayed
4. User can enter their prompt instructions in the text area
5. Modal can be closed via a close button or clicking outside the modal

## Technical Requirements
- Implement DOM scraping for post content
- Create a responsive modal dialog
- Ensure proper scrolling behavior for long post content
- Maintain accessibility standards
- Handle modal state management
