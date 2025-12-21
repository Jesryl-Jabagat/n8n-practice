# How to make n8n respond like a Chatbot

The message `Message sent successfully (No content)` means **n8n received your message** (Success!) but **didn't send back the AI's answer**.

Access your n8n workflow and follow these steps to fix existing nodes or add new ones:

### 1. Check your "AI Agent" / "LLM" Node
- Ensure your AI node actually produces text output (usually a field called `output`, `text`, or `response`).
- Run the workflow manually once to see the output data structure.

### 2. Configure the "Respond to Webhook" Node
You must have a **Respond to Webhook** node at the very end of your workflow.

**Settings:**
- **Respond With:** `JSON`
- **Response Body:**
  ```json
  {
    "output": "Drag and drop the AI response text here"
  }
  ```
  *(In n8n, you usually drag the output variable from the previous node into this field. It should look something like `{{ $json.output }}` or `{{ $json.text }}`)*.

### 3. Check for "Webhook received"
If you see a default message "Webhook received", it means you are using the default Webhook settings.
- **Webhook Node Settings:** Change "Response Mode" to **"Respond to Webhook Node"** (Standard) or **"Last Node"** (if you don't have a specific Respond node, but Respond node is recommended).

**Once you do this, n8n will send the actual text back, and your chat window will show the AI's reply instead of "No content".**
