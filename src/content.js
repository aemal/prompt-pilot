// Add styles to match LinkedIn's button styling
const style = document.createElement('style');
style.textContent = `
  .prompt-pilot-button {
    composes: artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary;
  }

  .prompt-pilot-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;
document.head.appendChild(style);

// Function to create the Prompt Pilot button
function createPromptPilotButton() {
  const button = document.createElement('div');
  button.className = 'feed-shared-social-action-bar__action-button feed-shared-social-action-bar--new-padding prompt-pilot-button';
  button.innerHTML = `
    <button class="artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary social-actions-button">
      <span class="artdeco-button__text">
        <div class="flex-wrap justify-center artdeco-button__text align-items-center">
          <svg class="artdeco-button__icon" width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="currentColor"/>
            <path d="M7 4h2v5H7zM7 10h2v2H7z" fill="currentColor"/>
          </svg>
          <span class="artdeco-button__text social-action-button__text">
            Prompt Pilot
          </span>
        </div>
      </span>
    </button>
  `;
  
  // Add click event listener
  button.addEventListener('click', () => {
    console.log('Prompt Pilot button clicked!');
    // TODO: Implement the prompt functionality
  });
  
  return button;
}

// Function to add the button to an action bar
function addPromptPilotButton(actionBar) {
  if (!actionBar || actionBar.querySelector('.prompt-pilot-button')) return;
  
  const commentButton = actionBar.querySelector('.comment-button');
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

      // Store observer for cleanup
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

// Cleanup when the page is unloaded
window.addEventListener('unload', cleanup); 