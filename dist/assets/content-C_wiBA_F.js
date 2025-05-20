(function(){const l=document.createElement("style");l.textContent=`
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
`;document.head.appendChild(l);const a=document.createElement("style");a.textContent=`
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
`;document.head.appendChild(a);function r(){const t=document.createElement("button");return t.className="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary prompt-pilot-comment-btn",t.type="button",t.title="Prompt Pilot",t.setAttribute("aria-label","Prompt Pilot"),t.innerHTML=`
    <svg class="prompt-pilot-comment-icon artdeco-button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
      <path d="M12 5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM12 19.8C8.13 19.8 5 16.67 5 12.8C5 8.93 8.13 5.8 12 5.8C15.87 5.8 19 8.93 19 12.8C19 16.67 15.87 19.8 12 19.8Z" fill="white"/>
      <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14.8C10.45 14.8 9.2 13.55 9.2 12C9.2 10.45 10.45 9.2 12 9.2C13.55 9.2 14.8 10.45 14.8 12C14.8 13.55 13.55 14.8 12 14.8Z" fill="white"/>
    </svg>
  `,t.addEventListener("click",()=>{console.log("Prompt Pilot comment button clicked!")}),t}function n(t){if(!t||t.querySelector(".prompt-pilot-comment-btn"))return;const o=t.querySelector('button[aria-label*="Emoji"], button[data-test-icon="emoji-medium"]');if(o)o.parentNode.insertBefore(r(),o.nextSibling);else{const e=t.querySelector('button[aria-label*="photo" i], button[data-test-icon="image-medium"]');e&&e.parentNode.insertBefore(r(),e)}}function m(){document.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex").forEach(n)}function d(t){for(const o of t)for(const e of o.addedNodes)if(e.nodeType===1)if(e.matches&&e.matches(".comments-comment-box__form .display-flex.justify-space-between .display-flex"))n(e);else{const i=e.querySelectorAll&&e.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex");i&&i.forEach(n)}}function c(){try{m();const t=document.querySelector("main")||document.body,o=new MutationObserver(d);o.observe(t,{childList:!0,subtree:!0}),window._promptPilotCommentBarObserver=o}catch(t){console.error("Prompt Pilot comment bar initialization failed:",t)}}function s(){window._promptPilotCommentBarObserver&&(window._promptPilotCommentBarObserver.disconnect(),delete window._promptPilotCommentBarObserver)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();window.addEventListener("unload",s);
})()