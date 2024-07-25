import React from "react";

const chats = [
  {
    name: "Alice Freeman",
    message: "How was your meeting?",
    date: "Aug 17, 2022",
  },
  {
    name: "Josefina",
    message: "Hi! No, I am going for a walk.",
    date: "Aug 16, 2022",
  },
  {
    name: "Velazquez",
    message: "Hi! I am a little sad, tell me a joke please.",
    date: "Aug 14, 2022",
  },
  { name: "Piter", message: "", date: "" },
];

const ChatList = () => {
  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div key={index} className="chat-item">
          <div className="chat-avatar"></div>
          <div className="chat-details">
            <div className="chat-name">{chat.name}</div>
            <div className="chat-message">{chat.message}</div>
          </div>
          <div className="chat-date">{chat.date}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
