(function(){const a=document.createElement("style");a.textContent=`
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

  /* Modal Dialog Styles */
  .prompt-pilot-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
  }

  .prompt-pilot-modal.active {
    display: flex;
  }

  .prompt-pilot-modal-content {
    background-color: white;
    padding: 24px;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .prompt-pilot-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .prompt-pilot-modal-title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
  }

  .prompt-pilot-modal-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .prompt-pilot-post-content {
    max-height: 200px;
    overflow-y: auto;
    padding: 16px;
    background-color: #f3f2ef;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .prompt-pilot-textarea {
    width: 100%;
    min-height: 150px;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    resize: vertical;
    font-family: inherit;
    font-size: 14px;
  }

  .prompt-pilot-textarea:focus {
    outline: none;
    border-color: #0a66c2;
  }

  .prompt-pilot-generate-btn {
    margin-top: 8px;
    align-self: flex-end;
    background-color: #0a66c2;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .prompt-pilot-generate-btn:hover {
    background-color: #004182;
  }
`;document.head.appendChild(a);const c=document.createElement("style");c.textContent=`
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
`;document.head.appendChild(c);function p(){const t=document.createElement("div");return t.className="prompt-pilot-modal",t.innerHTML=`
    <div class="prompt-pilot-modal-content">
      <div class="prompt-pilot-modal-header">
        <h2 class="prompt-pilot-modal-title">Create Prompt</h2>
        <button class="prompt-pilot-modal-close" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="rgba(0, 0, 0, 0.6)"/>
          </svg>
        </button>
      </div>
      <div class="prompt-pilot-post-content"></div>
      <textarea class="prompt-pilot-textarea" placeholder="Enter your prompt instructions here..."></textarea>
      <button class="prompt-pilot-generate-btn">Generate</button>
    </div>
  `,t.querySelector(".prompt-pilot-modal-close").addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",o=>{o.target===t&&t.classList.remove("active")}),t}function d(t){const e=t.closest(".feed-shared-update-v2");if(!e)return"";const o=e.querySelector(".feed-shared-inline-show-more-text .update-components-text");return o?o.textContent.trim():""}function s(t){let e=document.querySelector(".prompt-pilot-modal");e||(e=p(),document.body.appendChild(e));const o=d(t),n=e.querySelector(".prompt-pilot-post-content");n.textContent=o,e.classList.add("active"),e.querySelector(".prompt-pilot-textarea").focus()}function i(){const t=document.createElement("button");return t.className="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary prompt-pilot-comment-btn",t.type="button",t.title="Prompt Pilot",t.setAttribute("aria-label","Prompt Pilot"),t.innerHTML=`
    <svg class="prompt-pilot-comment-icon artdeco-button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
      <path d="M12 5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM12 19.8C8.13 19.8 5 16.67 5 12.8C5 8.93 8.13 5.8 12 5.8C15.87 5.8 19 8.93 19 12.8C19 16.67 15.87 19.8 12 19.8Z" fill="white"/>
      <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14.8C10.45 14.8 9.2 13.55 9.2 12C9.2 10.45 10.45 9.2 12 9.2C13.55 9.2 14.8 10.45 14.8 12C14.8 13.55 13.55 14.8 12 14.8Z" fill="white"/>
    </svg>
  `,t.addEventListener("click",()=>{s(t)}),t}function r(t){if(!t||t.querySelector(".prompt-pilot-comment-btn"))return;const e=t.querySelector('button[aria-label*="Emoji"], button[data-test-icon="emoji-medium"]');if(e)e.parentNode.insertBefore(i(),e.nextSibling);else{const o=t.querySelector('button[aria-label*="photo" i], button[data-test-icon="image-medium"]');o&&o.parentNode.insertBefore(i(),o)}}function m(){document.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex").forEach(r)}function u(t){for(const e of t)for(const o of e.addedNodes)if(o.nodeType===1)if(o.matches&&o.matches(".comments-comment-box__form .display-flex.justify-space-between .display-flex"))r(o);else{const n=o.querySelectorAll&&o.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex");n&&n.forEach(r)}}function l(){try{m();const t=document.querySelector("main")||document.body,e=new MutationObserver(u);e.observe(t,{childList:!0,subtree:!0}),window._promptPilotCommentBarObserver=e}catch(t){console.error("Prompt Pilot comment bar initialization failed:",t)}}function b(){window._promptPilotCommentBarObserver&&(window._promptPilotCommentBarObserver.disconnect(),delete window._promptPilotCommentBarObserver)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();window.addEventListener("unload",b);
})()