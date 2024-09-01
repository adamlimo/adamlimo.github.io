document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendMessage");
    const userInput = document.getElementById("userInput");

    sendButton.addEventListener("click", function() {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("You", message);
            fetchResponse(message);
            userInput.value = "";
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = `${sender}: ${message}`;
        document.getElementById("messages").appendChild(messageDiv);
    }

    function fetchResponse(userMessage) {
        const apiKey = "AIzaSyC7xe21QcigNvnNDHk7heCm1_4Hr47oL2g";
        const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
        
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: userMessage
                            }
                        ]
                    }
                ]
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Log the entire response for debugging
            
            if (data && data.choices && data.choices.length > 0) {
                const botMessage = data.choices[0].text || "Sorry, I didn't get that.";
                appendMessage("Chatbot", botMessage);
            } else {
                appendMessage("Chatbot", "Sorry, I didn't get that.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            appendMessage("Chatbot", "There was an error processing your request.");
        });
    }
});
