"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <div className="">
      <div className="">
        {messages.map((message, i) => (
          <div key={message.id} className="">
            <div className="">
              <div className="">{message.role}</div>
              {message.parts.map((part) => {
                switch (part.type) {
                  case "text":
                    return <p>{part.text}</p>;
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          placeholder="Say something..."
          className=""
        />
      </form>
    </div>
  );
}
