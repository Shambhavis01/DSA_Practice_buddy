import { useState } from "react";

function AIMentor() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! 👋 I'm your DSA Mentor. Ask me for a hint, explanation, or approach to a problem.",
    },
  ]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        type: "user",
        text: message,
      },
      {
        type: "ai",
        text: "That's a good question! The AI response will be connected through an API in the next stage.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="ai-page">
      <div className="ai-header">
        <div>
          <h1>AI Mentor 🤖</h1>
          <p className="dashboard-subtitle">
            Get guidance and hints while practicing DSA.
          </p>
        </div>
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