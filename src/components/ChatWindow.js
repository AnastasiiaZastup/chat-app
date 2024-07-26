import React, { useState } from "react";
import MessageInput from "./MessageInput";

const messages = [
  {
    sender: "Alice Freeman",
    content: "Hi, how are you?",
    timestamp: "8/17/2022, 7:43 AM",
  },
  {
    sender: "You",
    content: "Not bad. What about you?",
    timestamp: "8/17/2022, 7:45 AM",
  },
  {
    sender: "You",
    content: "How was your meeting?",
    timestamp: "8/17/2022, 7:48 AM",
  },
];

const ChatWindow = () => {
  const [currentMessages, setCurrentMessages] = useState(messages);

  const handleSendMessage = (message) => {
    const newMessage = {
      sender: "You",
      content: message,
      timestamp: new Date().toLocaleString(),
    };
    setCurrentMessages([...currentMessages, newMessage]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-avatar"></div>
        <div className="chat-name">Alice Freeman</div>
      </div>
      <div className="chat-messages">
        {currentMessages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "You" ? "sent" : "received"
            }`}
          >
            <div className="chat-message-content">{msg.content}</div>
            <div className="chat-message-timestamp">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
