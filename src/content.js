// Add styles to match LinkedIn's button styling
const style = document.createElement('style');
style.textContent = `
  .prompt-pilot-button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    composes: artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary social-actions-button;
  }
  .prompt-pilot-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
  }
`;
document.head.appendChild(style);

// Add styles to match LinkedIn's comment bar icon button styling
const styleComment = document.createElement('style');
styleComment.textContent = `
  .prompt-pilot-comment-btn {
    margin-left: 4px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* LinkedIn's icon button classes */
    composes: artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary;
  }
  .prompt-pilot-comment-icon {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }
`;
document.head.appendChild(styleComment);

// Function to create the Prompt Pilot button (icon only)
function createPromptPilotButton() {
  const button = document.createElement('button');
  button.className = 'artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary social-actions-button prompt-pilot-button';
  button.innerHTML = `
    <span class="artdeco-button__icon" style="display: flex; align-items: center; justify-content: center;">
      <svg class="prompt-pilot-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#0A66C2"/>
        <path d="M10 4C6.686 4 4 6.686 4 10C4 13.314 6.686 16 10 16C13.314 16 16 13.314 16 10C16 6.686 13.314 4 10 4ZM10 15C7.243 15 5 12.757 5 10C5 7.243 7.243 5 10 5C12.757 5 15 7.243 15 10C15 12.757 12.757 15 10 15Z" fill="white"/>
        <path d="M10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5ZM10 12.5C8.62 12.5 7.5 11.38 7.5 10C7.5 8.62 8.62 7.5 10 7.5C11.38 7.5 12.5 8.62 12.5 10C12.5 11.38 11.38 12.5 10 12.5Z" fill="white"/>
      </svg>
    </span>
  `;
  button.addEventListener('click', () => {
    console.log('Prompt Pilot button clicked!');
    // TODO: Implement the prompt functionality
  });
  return button;
}

// Function to create the Prompt Pilot comment icon button
function createPromptPilotCommentButton() {
  const button = document.createElement('button');
  button.className = 'artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary prompt-pilot-comment-btn';
  button.type = 'button';
  button.title = 'Prompt Pilot';
  button.setAttribute('aria-label', 'Prompt Pilot');
  button.innerHTML = `
    <svg class="prompt-pilot-comment-icon artdeco-button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
      <path d="M12 5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM12 19.8C8.13 19.8 5 16.67 5 12.8C5 8.93 8.13 5.8 12 5.8C15.87 5.8 19 8.93 19 12.8C19 16.67 15.87 19.8 12 19.8Z" fill="white"/>
      <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14.8C10.45 14.8 9.2 13.55 9.2 12C9.2 10.45 10.45 9.2 12 9.2C13.55 9.2 14.8 10.45 14.8 12C14.8 13.55 13.55 14.8 12 14.8Z" fill="white"/>
    </svg>
  `;
  button.addEventListener('click', () => {
    console.log('Prompt Pilot comment button clicked!');
    // TODO: Implement the prompt functionality
  });
  return button;
}

// Function to add the Prompt Pilot button to the comment input bar
function addPromptPilotToCommentBar(commentBar) {
  if (!commentBar || commentBar.querySelector('.prompt-pilot-comment-btn')) return;
  // Find the emoji button (by aria-label or class)
  const emojiBtn = commentBar.querySelector('button[aria-label*="Emoji"], button[data-test-icon="emoji-medium"]');
  if (emojiBtn) {
    // Insert after the emoji button
    emojiBtn.parentNode.insertBefore(createPromptPilotCommentButton(), emojiBtn.nextSibling);
  } else {
    // If emoji button not found, insert before the image button
    const imageBtn = commentBar.querySelector('button[aria-label*="photo" i], button[data-test-icon="image-medium"]');
    if (imageBtn) {
      imageBtn.parentNode.insertBefore(createPromptPilotCommentButton(), imageBtn);
    }
  }
}

// Function to find all comment input bars and add the button
function addPromptPilotToAllCommentBars() {
  // LinkedIn comment bar action area: div.display-flex.justify-space-between > div.display-flex
  const commentActionBars = document.querySelectorAll('.comments-comment-box__form .display-flex.justify-space-between .display-flex');
  commentActionBars.forEach(addPromptPilotToCommentBar);
}

// MutationObserver callback for dynamic comment bars
function handleCommentBarMutations(mutations) {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === 1) {
        // Check if a comment bar was added
        if (node.matches && node.matches('.comments-comment-box__form .display-flex.justify-space-between .display-flex')) {
          addPromptPilotToCommentBar(node);
        } else {
          // Check descendants
          const bars = node.querySelectorAll && node.querySelectorAll('.comments-comment-box__form .display-flex.justify-space-between .display-flex');
          bars && bars.forEach(addPromptPilotToCommentBar);
        }
      }
    }
  }
}

// Initialize the extension for comment bars
function initializePromptPilotCommentBar() {
  try {
    addPromptPilotToAllCommentBars();
    // Observe for dynamically added comment bars
    const main = document.querySelector('main') || document.body;
    const observer = new MutationObserver(handleCommentBarMutations);
    observer.observe(main, {
      childList: true,
      subtree: true
    });
    window._promptPilotCommentBarObserver = observer;
  } catch (error) {
    console.error('Prompt Pilot comment bar initialization failed:', error);
  }
}

// Cleanup function
function cleanup() {
  if (window._promptPilotCommentBarObserver) {
    window._promptPilotCommentBarObserver.disconnect();
    delete window._promptPilotCommentBarObserver;
  }
}

// Start the extension when the page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePromptPilotCommentBar);
} else {
  initializePromptPilotCommentBar();
}
window.addEventListener('unload', cleanup); 