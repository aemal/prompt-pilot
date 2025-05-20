(function(){const u=document.createElement("style");u.textContent=`
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
`;document.head.appendChild(u);const b=document.createElement("style");b.textContent=`
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
`;document.head.appendChild(b);const f=document.createElement("style");f.textContent=`
  .prompt-pilot-modal-3col {
    padding: 24px 24px 24px 24px;
    max-width: 900px;
    min-width: 600px;
  }
  .prompt-pilot-modal-3col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    width: 100%;
    align-items: flex-start;
  }
  .prompt-pilot-modal-col {
    background: #fafbfc;
    border-radius: 6px;
    padding: 16px;
    min-height: 180px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .prompt-pilot-modal-col1 {
    font-size: 14px;
    color: #444;
    background: #f3f2ef;
    min-width: 0;
    word-break: break-word;
  }
  .prompt-pilot-modal-col2 {
    background: #fff;
    align-items: stretch;
    justify-content: flex-start;
  }
  .prompt-pilot-modal-col3 {
    background: #f3f2ef;
    min-width: 0;
    word-break: break-word;
    align-items: stretch;
    justify-content: flex-start;
  }
  @media (max-width: 900px) {
    .prompt-pilot-modal-3col-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .prompt-pilot-modal-3col {
      min-width: 0;
      max-width: 98vw;
    }
  }
`;document.head.appendChild(f);function g(){const t=document.createElement("div");t.className="prompt-pilot-modal",t.innerHTML=`
    <div class="prompt-pilot-modal-content prompt-pilot-modal-3col">
      <div class="prompt-pilot-modal-header">
        <h2 class="prompt-pilot-modal-title">Create Prompt</h2>
        <button class="prompt-pilot-modal-close" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="rgba(0, 0, 0, 0.6)"/>
          </svg>
        </button>
      </div>
      <div class="prompt-pilot-modal-3col-grid">
        <div class="prompt-pilot-modal-col prompt-pilot-modal-col1">
          <div class="prompt-pilot-post-content"></div>
        </div>
        <div class="prompt-pilot-modal-col prompt-pilot-modal-col2">
          <textarea class="prompt-pilot-textarea" placeholder="Enter your prompt instructions here..."></textarea>
          <button class="prompt-pilot-generate-btn">Generate</button>
        </div>
        <div class="prompt-pilot-modal-col prompt-pilot-modal-col3">
          <div class="prompt-pilot-response" style="display: none; margin-top: 0; padding: 16px; background-color: #f3f2ef; border-radius: 4px;"></div>
        </div>
      </div>
    </div>
  `,t.querySelector(".prompt-pilot-modal-close").addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",n=>{n.target===t&&t.classList.remove("active")});const e=t.querySelector(".prompt-pilot-generate-btn");return e.addEventListener("click",async()=>{const n=t.querySelector(".prompt-pilot-post-content").textContent,i=t.querySelector(".prompt-pilot-textarea").value,r=t.querySelector(".prompt-pilot-response"),l=t.getAttribute("data-pp-username")||"";try{e.disabled=!0,e.textContent="Generating...",r.style.display="none";const p=await(await fetch("https://aemal.app.n8n.cloud/webhook-test/85d278cd-64c8-4dca-830e-4964c31bdadc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:n,userPrompt:i,userName:l})})).json();r.innerHTML=`
        <div class="response-dialog">
          <div class="response-content">
            <p>${p.output||p.response||p}</p>
            <div class="button-group" style="display: flex; gap: 8px; margin-top: 16px;">
              <button class="prompt-pilot-copy-btn" style="padding: 8px 16px; background: #0a66c2; color: white; border: none; border-radius: 4px; cursor: pointer;">Copy</button>
              <button class="prompt-pilot-insert-btn" style="padding: 8px 16px; background: #0a66c2; color: white; border: none; border-radius: 4px; cursor: pointer;">Insert</button>
            </div>
          </div>
        </div>
      `;const c=r.querySelector(".prompt-pilot-copy-btn"),x=r.querySelector(".prompt-pilot-insert-btn");c.addEventListener("click",()=>{navigator.clipboard.writeText(p.output||p.response||p),c.textContent="Copied!",setTimeout(()=>{c.textContent="Copy"},2e3)}),x.addEventListener("click",()=>{console.log("Insert button clicked")}),r.style.display="block"}catch(a){console.error("Error:",a),r.innerHTML=`<p style="color: red;">Error: ${a.message}</p>`,r.style.display="block"}finally{e.disabled=!1,e.textContent="Generate"}}),t}function y(t){const o=t.closest(".feed-shared-update-v2");if(!o)return{postContent:"",userName:""};const e=o.querySelector(".feed-shared-inline-show-more-text .update-components-text"),n=e?e.textContent.trim():"";let i="";const r=o.querySelector(".update-components-actor__container");if(r){const l=r.querySelector('.update-components-actor__title span[aria-hidden="true"]');l&&(i=l.textContent.trim())}return{postContent:n,userName:i}}function h(t){let o=document.querySelector(".prompt-pilot-modal");o||(o=g(),document.body.appendChild(o));const{postContent:e,userName:n}=y(t),i=o.querySelector(".prompt-pilot-post-content");i.innerHTML=`<strong>${n||""}</strong><br>${e}`,o.setAttribute("data-pp-username",n),o.classList.add("active"),o.querySelector(".prompt-pilot-textarea").focus()}function s(){const t=document.createElement("button");return t.className="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary prompt-pilot-comment-btn",t.type="button",t.title="Prompt Pilot",t.setAttribute("aria-label","Prompt Pilot"),t.innerHTML=`
    <svg class="prompt-pilot-comment-icon artdeco-button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
      <path d="M12 5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM12 19.8C8.13 19.8 5 16.67 5 12.8C5 8.93 8.13 5.8 12 5.8C15.87 5.8 19 8.93 19 12.8C19 16.67 15.87 19.8 12 19.8Z" fill="white"/>
      <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14.8C10.45 14.8 9.2 13.55 9.2 12C9.2 10.45 10.45 9.2 12 9.2C13.55 9.2 14.8 10.45 14.8 12C14.8 13.55 13.55 14.8 12 14.8Z" fill="white"/>
    </svg>
  `,t.addEventListener("click",()=>{h(t)}),t}function d(t){if(!t||t.querySelector(".prompt-pilot-comment-btn"))return;const o=t.querySelector('button[aria-label*="Emoji"], button[data-test-icon="emoji-medium"]');if(o)o.parentNode.insertBefore(s(),o.nextSibling);else{const e=t.querySelector('button[aria-label*="photo" i], button[data-test-icon="image-medium"]');e&&e.parentNode.insertBefore(s(),e)}}function v(){document.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex").forEach(d)}function w(t){for(const o of t)for(const e of o.addedNodes)if(e.nodeType===1)if(e.matches&&e.matches(".comments-comment-box__form .display-flex.justify-space-between .display-flex"))d(e);else{const n=e.querySelectorAll&&e.querySelectorAll(".comments-comment-box__form .display-flex.justify-space-between .display-flex");n&&n.forEach(d)}}function m(){try{v();const t=document.querySelector("main")||document.body,o=new MutationObserver(w);o.observe(t,{childList:!0,subtree:!0}),window._promptPilotCommentBarObserver=o}catch(t){console.error("Prompt Pilot comment bar initialization failed:",t)}}function C(){window._promptPilotCommentBarObserver&&(window._promptPilotCommentBarObserver.disconnect(),delete window._promptPilotCommentBarObserver)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();window.addEventListener("unload",C);
})()