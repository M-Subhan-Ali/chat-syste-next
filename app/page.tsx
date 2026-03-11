"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  text: string;
  sender: string;
};

let socket: Socket;

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket = io();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msg: Message = {
      text: message,
      sender: socket.id!
    };

    socket.emit("message", msg);
    setMessage("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>WebSocket Chat</h1>

      {/* Chat Messages */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        {messages.map((m, i) => {
          const isMe = m.sender === socket.id;

          return (
            <div
              key={i}
              style={{
                alignSelf: isMe ? "flex-end" : "flex-start",
                background: isMe ? "#0070f3" : "#e5e5ea",
                color: isMe ? "white" : "black",
                padding: "10px 15px",
                borderRadius: "15px",
                maxWidth: "250px"
              }}
            >
              {m.text}
            </div>
          );
        })}
      </div>

      {/* Input */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}