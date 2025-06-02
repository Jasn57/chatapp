const socket = new WebSocket("ws://localhost:3000");
const messages = docuument.getElementById("messages");

socket.onmessege = (event) => {
    const msg = document.createElement("div");
    msg.textContent = event.data;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
};

function sendMessage() {
    const input = document.getElementById("input");
    socket.send(input.value);
    input.value = "";
}