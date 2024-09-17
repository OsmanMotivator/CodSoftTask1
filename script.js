// Function to send the user message and get chatbot's response
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    
    // Display the user's message
    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    // Scroll to the bottom of chat-box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = '';

    // Get chatbot's response
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");

        if (userInput.toLowerCase() === "hello") {
            botMessage.textContent = "Bot: Hi there! How can I assist you today?";
        } else if (userInput.toLowerCase() === "what's your name?") {
            botMessage.textContent = "Bot: I'm CodSoftBot, your friendly assistant.";
        } else if (userInput.toLowerCase() === "how are you?") {
            botMessage.textContent = "Bot: I'm doing great, thank you!";
        } else if (userInput.toLowerCase() === "exit") {
            botMessage.textContent = "Bot: Goodbye!";
        } else {
            botMessage.textContent = "Bot: Sorry, I don't understand that.";
        }

        // Display the bot's message
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);  // Simulate delay for bot response
}