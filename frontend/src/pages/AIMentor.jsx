import { useState } from "react";

function AIMentor() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! 👋 I'm your DSA Mentor. Ask me anything about Data Structures and Algorithms.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://dsa-practice-buddy.onrender.com/api/mentor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("AI Mentor Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Sorry, I couldn't connect to the AI right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        type: "ai",
        text: "Hi! 👋 I'm your DSA Mentor. Ask me anything about Data Structures and Algorithms.",
      },
    ]);
  };

  return (
    <div className="ai-page">
      <div className="ai-header">
        <div>
          <h1>AI Mentor 🤖</h1>

          <p className="dashboard-subtitle">
            Your personal DSA mentor for hints, explanations and problem-solving.
          </p>
        </div>

        <button className="clear-chat-btn" onClick={clearChat}>
          Clear Chat
        </button>
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

          {isLoading && (
            <div className="message ai">
              <div className="message-avatar">🤖</div>

              <div className="message-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
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
            disabled={isLoading}
          />

          <button
            onClick={sendMessage}
            disabled={isLoading || !message.trim()}
          >
            {isLoading ? "Thinking..." : "Send →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIMentor;