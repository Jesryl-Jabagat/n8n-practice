I need help configuring my n8n workflow to send a response back to my chatbot frontend.

**The Situation:**
- I have a website sending a POST request to my n8n Webhook.
- The connection works! My website receives a `200 OK` success status.
- **The Problem:** The response body is empty or just says "Webhook received". My chatbot on the website says "Message sent successfully (No content)" because `data.output` is undefined.

**What I need:**
I need to send the **AI Agent's text response** back to the website.

**Please guide me on:**
1. Adding a **Respond to Webhook** node at the end of my workflow.
2. Configuring it to respond with **JSON**.
3. Mapping the output. I need the JSON body to look like this:
   ```json
   {
     "output": "The text response from the AI Agent goes here"
   }
   ```
   How do I map the AI node's output to this JSON field in the Respond to Webhook node?
