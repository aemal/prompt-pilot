// Add styles to match LinkedIn's button styling
const style = document.createElement('style');
style.textContent = `
  .prompt-pilot-button {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    /* Inherit LinkedIn's button styles */
    composes: artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary social-actions-button;
  }
  .prompt-pilot-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    display: inline-block;
    vertical-align: middle;
  }
`;
document.head.appendChild(style);

// Function to create the Prompt Pilot button
function createPromptPilotButton() {
  const button = document.createElement('button');
  button.className = 'artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary social-actions-button prompt-pilot-button';
  button.innerHTML = `
    <span class="artdeco-button__text" style="display: flex; align-items: center; gap: 4px;">
      <svg class="prompt-pilot-icon artdeco-button__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#0A66C2"/>
        <path d="M8 3C5.24 3 3 5.24 3 8C3 10.76 5.24 13 8 13C10.76 13 13 10.76 13 8C13 5.24 10.76 3 8 3ZM8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8 12Z" fill="white"/>
        <path d="M8 5.5C6.62 5.5 5.5 6.62 5.5 8C5.5 9.38 6.62 10.5 8 10.5C9.38 10.5 10.5 9.38 10.5 8C10.5 6.62 9.38 5.5 8 5.5ZM8 9.5C7.17 9.5 6.5 8.83 6.5 8C6.5 7.17 7.17 6.5 8 6.5C8.83 6.5 9.5 7.17 9.5 8C9.5 8.83 8.83 9.5 8 9.5Z" fill="white"/>
      </svg>
      <span class="artdeco-button__text social-action-button__text">Prompt Pilot</span>
    </span>
  `;
  button.addEventListener('click', () => {
    console.log('Prompt Pilot button clicked!');
    // TODO: Implement the prompt functionality
  });
  return button;
}

// Function to add the button to an action bar
function addPromptPilotButton(actionBar) {
  if (!actionBar || actionBar.querySelector('.prompt-pilot-button')) return;
  const commentButton = actionBar.querySelector('button');
  if (commentButton) {
    const promptPilotButton = createPromptPilotButton();
    commentButton.parentNode.insertBefore(promptPilotButton, commentButton.nextSibling);
  }
}

// Function to handle mutations
function handleMutations(mutations) {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === 1) {
        const actionBar = node.matches('.feed-shared-social-action-bar') 
          ? node 
          : node.querySelector('.feed-shared-social-action-bar');
        if (actionBar) {
          addPromptPilotButton(actionBar);
        }
      }
    }
  }
}

// Initialize the extension
function initializePromptPilot() {
  try {
    // Handle existing posts
    const existingPosts = document.querySelectorAll('.feed-shared-social-action-bar');
    existingPosts.forEach(addPromptPilotButton);
    // Setup MutationObserver for new posts
    const observer = new MutationObserver(handleMutations);
    const feedContainer = document.querySelector('.scaffold-finite-scroll');
    if (feedContainer) {
      observer.observe(feedContainer, {
        childList: true,
        subtree: true
      });
      window._promptPilotObserver = observer;
    } else {
      console.warn('Prompt Pilot: Feed container not found');
    }
  } catch (error) {
    console.error('Prompt Pilot initialization failed:', error);
  }
}

// Cleanup function
function cleanup() {
  if (window._promptPilotObserver) {
    window._promptPilotObserver.disconnect();
    delete window._promptPilotObserver;
  }
}

// Start the extension when the page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePromptPilot);
} else {
  initializePromptPilot();
}
window.addEventListener('unload', cleanup); 