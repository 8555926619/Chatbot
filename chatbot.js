
function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatBox = document.getElementById("chat-box");

  if (userInput.trim() === "") return;

  // Display user message
  chatBox.innerHTML += "<div>User: " + userInput + "</div>";

  // Clear user input
  document.getElementById("user-input").value = "";

  // Simulate ChatGPT response (you can replace this with actual chatbot logic)
  var botResponse = "ChatGPT: Sorry, I'm just a simple example. You can replace this with your own chatbot logic!";
  chatBox.innerHTML += "<div>" + botResponse + "</div>";

  // Scroll chat to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
