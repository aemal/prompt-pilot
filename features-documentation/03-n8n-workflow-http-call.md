# How to Trigger an HTTP POST Request on Button Click (n8n Workflow Example)

## Goal
When a user clicks the "Generate" button in your UI, send a POST request to a webhook URL with a specific JSON payload. Display the response to the user.

---

## 1. Locate the "Generate" Button
- Find the component or file where the "Generate" button is rendered (e.g., a React component).
- Example:
  ```jsx
  <button onClick={handleGenerateClick}>Generate</button>
  ```

---

## 2. Add an Event Handler for the Button
- Attach an `onClick` handler to the button.
- The handler should be an async function that sends the HTTP request.

---

## 3. Implement the HTTP POST Request
- Use `fetch` or `axios` to send a POST request.
- **Webhook URL:**
  ```
  https://aemal.app.n8n.cloud/webhook-test/85d278cd-64c8-4dca-830e-4964c31bdadc
  ```
- **Payload:**
  ```json
  {
    "post": "I spent this weekend 'vibe-coding' and built a Clay wrapper ( I call them Clappers 😅 ) That powers OnlyTams - a tool that gives you instant clarity on your Total Addressable Market. ✨ What it does: Simply drop in a domain, and it delivers: - Detailed TAM/SAM/SOM breakdown - Ideal Customer Profile insights - Competitive landscape analysis ⚙️ The tech stack: Lovable frontend → Supabase → Clay integration → AI agents for deep research → results back to the frontendFor me, this was just tinkering around - I don't actually know how to code but am excited that I can bring my ideas to life over a weekend. That's the real magic here!I'm seeing two major opportunities in this space: 1️⃣ Single-use micro-apps built on top of n8n (for agent-only tools) or Clay (for multi-source data enrichment) 2️⃣ User-friendly internal tools for GTM teams who find Clay's interface challenging - bridging the gap between powerful data and intuitive UX Try it out at OnlyTams.io and let me know your thoughts! Looking for feedback as I refine this concept further.",
    "userPrompt": "Generate a short answer and mention that Vibe Coding is the future."
  }
  ```

- **Example (using fetch in React):**
  ```js
  async function handleGenerateClick() {
    const payload = {
      post: "I spent this weekend 'vibe-coding' and built a Clay wrapper ( I call them Clappers 😅 ) That powers OnlyTams - a tool that gives you instant clarity on your Total Addressable Market. ✨ What it does: Simply drop in a domain, and it delivers: - Detailed TAM/SAM/SOM breakdown - Ideal Customer Profile insights - Competitive landscape analysis ⚙️ The tech stack: Lovable frontend → Supabase → Clay integration → AI agents for deep research → results back to the frontendFor me, this was just tinkering around - I don't actually know how to code but am excited that I can bring my ideas to life over a weekend. That's the real magic here!I'm seeing two major opportunities in this space: 1️⃣ Single-use micro-apps built on top of n8n (for agent-only tools) or Clay (for multi-source data enrichment) 2️⃣ User-friendly internal tools for GTM teams who find Clay's interface challenging - bridging the gap between powerful data and intuitive UX Try it out at OnlyTams.io and let me know your thoughts! Looking for feedback as I refine this concept further.",
      userPrompt: "Generate a short answer and mention that Vibe Coding is the future."
    };

    try {
      const response = await fetch('https://aemal.app.n8n.cloud/webhook-test/85d278cd-64c8-4dca-830e-4964c31bdadc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      // Display the response to the user (e.g., set state or show in UI)
      console.log(data.output);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error:', error);
    }
  }
  ```

---

## 4. Display the Response
- After receiving the response, show the `output` field to the user in your UI.
- Example response:
  ```json
  {
    "output": "What an exciting project! 🚀 \"Vibe-coding\" truly is the future—it's amazing to see how creativity can drive innovation, even without traditional coding skills. Your Clapper concept sounds like a game-changer for understanding the Total Addressable Market. Can't wait to try OnlyTams and see where you take this next! 🌟"
  }
  ```

---

## 5. Error Handling
- Make sure to handle errors gracefully (e.g., show an error message if the request fails).

---

## 6. Summary
- User clicks "Generate" → HTTP POST sent to webhook → Response received → Output shown to user.

---

**Tip:** Always test your integration to ensure the request and response flow works as expected!
