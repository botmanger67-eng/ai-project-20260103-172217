document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    
    // Example: Smooth scrolling for the chat messages
    const chatMessages = document.querySelector('.chat-messages');
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Example: Send message functionality
    const sendButton = document.querySelector('.message-input button');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const messageInput = document.querySelector('.message-input input');
            const messageText = messageInput.value.trim();
            
            if (messageText) {
                // Create a new message element
                const newMessage = document.createElement('div');
                newMessage.className = 'message sent';
                newMessage.innerHTML = `
                    <p>${messageText}</p>
                    <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                `;
                
                // Add the message to the chat
                chatMessages.appendChild(newMessage);
                
                // Scroll to the bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Clear the input
                messageInput.value = '';
            }
        });
    }
});