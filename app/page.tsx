"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex flex-col w-full py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            <div className="">
              <div className="font-bold">{message.role}</div>
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
          className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
        />
      </form>
    </div>
  );
}
