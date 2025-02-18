const sendButton = document.getElementById('sendButton');
const userInput = document.getElementById('userInput');
const botResponse = document.getElementById('botResponse');
const botAvatar = document.getElementById('botAvatar');

// Simple responses based on user input
const botActions = {
    hello: "Hello, how can I help you today?",
    howareyou: "I'm doing great, thanks for asking! 😊",
    whatisyourname: "I'm CartoonBot, at your service! 🤖",
    happy: "Yay! I'm happy too! 😁",
    sad: "Oh no! Don't be sad. I'm here for you. 😞",
    default: "Sorry, I don't understand that. Can you ask something else?"
};

// Function to determine bot's response and action
function getBotResponse(userText) {
    userText = userText.toLowerCase().trim();
    if (botActions[userText]) {
        return botActions[userText];
    } else {
        return botActions.default;
    }
}

// Function to simulate bot action (changing its avatar)
function botAction(userText) {
    if (userText.includes("happy")) {
        botAvatar.style.backgroundColor = "#FFD700"; // Change color for happy state
        botAvatar.style.animation = "none";
    } else if (userText.includes("sad")) {
        botAvatar.style.backgroundColor = "#6C7A89"; // Change color for sad state
        botAvatar.style.animation = "none";
    } else {
        botAvatar.style.backgroundColor = "#ffcb00"; // Default color
        botAvatar.style.animation = "botSmile 2s infinite alternate";
    }
}

// Event listener for the send button
sendButton.addEventListener('click', function() {
    const userText = userInput.value;
    if (userText.trim() !== "") {
        const response = getBotResponse(userText);
        botResponse.textContent = response;
        botAction(userText);
        userInput.value = ""; // Clear the input after sending
    }
});

// Optional: Make the user press Enter to submit
userInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
