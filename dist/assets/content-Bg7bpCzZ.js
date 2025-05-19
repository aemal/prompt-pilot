(function(){const i=document.createElement("style");i.textContent=`
  .prompt-pilot-button {
    composes: artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary;
  }

  .prompt-pilot-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;document.head.appendChild(i);function a(){const t=document.createElement("div");return t.className="feed-shared-social-action-bar__action-button feed-shared-social-action-bar--new-padding prompt-pilot-button",t.innerHTML=`
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
  `,t.addEventListener("click",()=>{console.log("Prompt Pilot button clicked!")}),t}function c(t){if(!t||t.querySelector(".prompt-pilot-button"))return;const e=t.querySelector(".comment-button");if(e){const o=a();e.parentNode.insertBefore(o,e.nextSibling)}}function s(t){for(const e of t)for(const o of e.addedNodes)if(o.nodeType===1){const n=o.matches(".feed-shared-social-action-bar")?o:o.querySelector(".feed-shared-social-action-bar");n&&c(n)}}function r(){try{document.querySelectorAll(".feed-shared-social-action-bar").forEach(c);const e=new MutationObserver(s),o=document.querySelector(".scaffold-finite-scroll");o?(e.observe(o,{childList:!0,subtree:!0}),window._promptPilotObserver=e):console.warn("Prompt Pilot: Feed container not found")}catch(t){console.error("Prompt Pilot initialization failed:",t)}}function d(){window._promptPilotObserver&&(window._promptPilotObserver.disconnect(),delete window._promptPilotObserver)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();window.addEventListener("unload",d);
})()