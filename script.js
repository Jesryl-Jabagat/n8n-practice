// DOM Elements
const openLoginBtn = document.getElementById('openLoginBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.getElementById('btnLoader');
const successMessage = document.getElementById('successMessage');
const usernameInput = document.getElementById('username');
const welcomeUserSpan = document.getElementById('welcomeUser');
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

// Modal Logic
function openModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    usernameInput.focus();
}

function closeModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling

    // Reset form after closing
    setTimeout(() => {
        loginForm.reset();
        successMessage.classList.remove('show');
        loginForm.style.display = 'flex'; // Ensure form is visible again
        loginForm.style.opacity = '1';
    }, 300);
}

// Event Listeners
openLoginBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the container
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        closeModal();
    }
});

// Toggle Password Visibility
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle eye icon
    const icon = togglePasswordBtn.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// Form Submission Simulation
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    if (!usernameInput.value || !passwordInput.value) return;

    // Show loading state
    submitBtn.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        // Success state
        submitBtn.classList.remove('loading');

        // Hide form and show success message
        loginForm.style.transition = 'opacity 0.3s ease';
        loginForm.style.opacity = '0';

        setTimeout(() => {
            loginForm.style.display = 'none';
            welcomeUserSpan.textContent = usernameInput.value;
            successMessage.classList.add('show');

            // Close modal after success message
            setTimeout(() => {
                closeModal();
            }, 2000);
        }, 300);

    }, 1500); // 1.5s delay
});

// ==========================================
// CHAT WIDGET LOGIC
// ==========================================

const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatWindow = document.getElementById('chatWindow');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const chatSendBtn = document.getElementById('chatSendBtn');

// N8N Webhook URL - REPLACE THIS WITH YOUR ACTUAL WEBHOOK URL
const N8N_WEBHOOK_URL = 'https://YOUR_N8N_WEBHOOK_URL';

// Toggle Chat Window
function toggleChat() {
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
        chatInput.focus();
    }
}

chatToggleBtn.addEventListener('click', toggleChat);
chatCloseBtn.addEventListener('click', toggleChat);

// Add Message to Chat
function addMessage(content, type = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${type}-message`);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = content; // Using innerHTML to allow basic formatting if needed

    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    const now = new Date();
    messageTime.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Add Typing Indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('typing-indicator');
    typingDiv.id = 'typingIndicator';

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('typing-dot');
        typingDiv.appendChild(dot);
    }

    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Scroll to bottom of chat
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send Message to N8N
async function sendMessageToN8N(message) {
    try {
        const response = await fetch(https://gwenchana123.app.n8n.cloud/webhook/chatbot, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Assuming n8n returns a JSON object with a 'output' or 'text' property
        return data.output || data.text || data.message || "I received your message but didn't get a proper response format.";

    } catch (error) {
        console.error('Error connecting to n8n:', error);
        return "Sorry, I'm having trouble connecting to the server right now. Please try again later.";
    }
}

// Handle Form Submission
chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();
    if (!message) return;

    // 1. Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    chatSendBtn.disabled = true;

    // 2. Show typing indicator
    showTypingIndicator();

    // 3. Send to n8n (simulated delay for effect, or real fetch)
    // For demo purposes, if URL is placeholder, we simulate a response
    let botResponse;

    if (N8N_WEBHOOK_URL.includes('https://gwenchana123.app.n8n.cloud/webhook/chatbot')) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        botResponse = "I am currently in demo mode. Please configure the N8N_WEBHOOK_URL in script.js to connect me to your real AI agent!";
    } else {
        botResponse = await sendMessageToN8N(message);
    }

    // 4. Remove typing indicator and add bot response
    removeTypingIndicator();
    addMessage(botResponse, 'bot');
    chatSendBtn.disabled = false;
});
