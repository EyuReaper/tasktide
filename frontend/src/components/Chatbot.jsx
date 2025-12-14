// src/components/Chatbot.jsx
import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm still learning. Please check the FAQ!" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg w-80">
      <div className="overflow-y-auto h-60 border-b-2 mb-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "bot" ? "text-left" : "text-right"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded ${
                msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
