import { useState } from "react";

function AIMentor() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! 👋 I'm your DSA Mentor. Ask me anything about DSA.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Unable to connect to the backend.",
        },
      ]);
    }
  };

  return (
    <div className="ai-page">
      <div className="ai-header">
        <h1>AI Mentor 🤖</h1>

        <p className="dashboard-subtitle">
          Get guidance and hints while practicing DSA.
        </p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type}`}
            >
              <div className="message-avatar">
                {msg.type === "ai" ? "🤖" : "👤"}
              </div>

              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask your DSA question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            Send →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIMentor;