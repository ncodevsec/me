const typingElement = document.getElementById("typing");
const commandElement = document.getElementById("command");

const command = "initializing_secure_connection...";
const message = "Hey there! I'm nCodevSec";

let commandIndex = 0;
let messageIndex = 0;

// Type the terminal command first
function typeCommand() {
    if (commandIndex < command.length) {
        commandElement.textContent += command.charAt(commandIndex);
        commandIndex++;

        setTimeout(typeCommand, Math.random() * 65 + 30);
    } else {
        setTimeout(typeMessage, 500);
    }
}

// Simulate someone typing from the other side
function typeMessage() {
    if (messageIndex < message.length) {
        typingElement.textContent += message.charAt(messageIndex);
        messageIndex++;

        let delay = Math.random() * 100 + 65;

        // Brief pauses make the typing feel more human
        if (message.charAt(messageIndex - 1) === " ") {
            delay += 180;
        }

        if (Math.random() > 0.92) {
            delay += 250;
        }

        setTimeout(typeMessage, delay);
    } else {
        // Pause, then erase and type again
        setTimeout(eraseMessage, 3500);
    }
}

function eraseMessage() {
    if (messageIndex > 0) {
        typingElement.textContent = message.substring(0, messageIndex - 1);
        messageIndex--;

        setTimeout(eraseMessage, 35);
    } else {
        setTimeout(typeMessage, 700);
    }
}

// Start the hacker-style typing sequence
window.addEventListener("load", () => {
    setTimeout(typeCommand, 500);
});