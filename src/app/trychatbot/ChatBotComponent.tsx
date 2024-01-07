"use client";

import React, { useState, useEffect, useRef } from "react";
import { ImCancelCircle } from "react-icons/im";
import { serverUrl } from "../api/serverUrl";

const url = serverUrl({Production: true})
interface ChatBotProps {
  initialMessage?: string;
  chatbotTitle?: string;
  brandImage?: string;
  apiKey: string;
  switchAPI?: boolean;
  suggestions?: string[];
  rateLimitDuration?: number
}

const ChatBotComponent: React.FC<ChatBotProps> = ({
  initialMessage = "Hello! How Can I Assist You ?",
  chatbotTitle = "Chat bot",
  brandImage = "https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",
  apiKey,
  switchAPI = false,
  suggestions=[],
  rateLimitDuration = 5000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [rateLimited, setRateLimited] = useState(false);
  const [suggest, setSuggestions] = useState<string[]>(suggestions);

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    sendMessage();
    setSuggestions([]);
  };

  useEffect(() => {
    if (initialMessage) {
      setMessages([{ type: "bot", text: initialMessage }]);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setSuggestions(suggestions);
  }, [suggestions]);
  

  async function generateAnswers(userQuestion: string) {
    try {
      let chatAPIUrl = url + `/api/v1/QnARetrieval?key=${apiKey}`;

      if (switchAPI) {
        chatAPIUrl = `https://your-hosted-domain/api/v1/organization/generateCompletion?key=${apiKey}`;
      }

      const payloadBody = {
        prompt: userQuestion,
      };

      const response = await fetch(chatAPIUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadBody),
      });

      const jsonData = await response.json();

      setMessages((prev) => [...prev, { type: "bot", text: jsonData.message }]);
      setIsBotTyping(false);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "OOPs! something went wrong" },
      ]);
      setIsBotTyping(false);
    }
  }

  const sendMessage = () => {
    if (inputValue.trim() && !rateLimited) {
      const userMessage = {
        type: "user",
        text: inputValue,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsBotTyping(true);
      setSuggestions([]); // clear the suggestions when user sends a message

      generateAnswers(inputValue);
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), rateLimitDuration);
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-10 right-10">
      {isOpen ? (
        <div className="w-80 h-96 border p-4 bg-white rounded-lg flex flex-col shadow-lg">
          <div className="mb-4 font-bold flex justify-between items-center text-black p-2 rounded-t-lg">
            <div className="flex items-center">
              <img
                src={brandImage}
                alt="brand"
                className="w-6 h-6 rounded-full object-cover mr-2"
              />
              <span>{chatbotTitle}</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <ImCancelCircle />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              // ... (rest of the code)
              <div
                key={index}
                className={`p-2 my-2 ${msg.type === "user" ? "ml-auto" : ""}`}
              >
                {msg.type === "bot" && (
                  <div className="flex items-center">
                    <img
                      src={brandImage}
                      alt="Bot"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-black bg-gray-300 rounded-md pr-4 p-2">
                      {msg.text}
                    </span>
                  </div>
                )}
                {msg.type === "user" && (
                  <div className="flex flex-col items-end">
                    <span className="text-gray-600 text-sm mb-1">You</span>
                    <span className="bg-gray-300 pr-4 p-2 rounded-md text-black">
                      {msg.text}
                    </span>
                  </div>
                )}
              </div>
            ))}
            {isBotTyping && (
              <div className="text-gray-600">Bot is typing...</div>
            )}
            <div ref={messagesEndRef}></div>
            {suggest.length > 0 && (
              <>
                <div className="flex overflow-y-auto">
                  <img
                    src={brandImage}
                    alt="Bot"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <div className="bg-gray-300 p-2 rounded-lg">
                    <div className="mt-2">Here are Some Suggestions</div>
                    {suggest.map((suggestion, index) => (
                      <div className="flex items-center mt-2" key={index}>
                        <button
                          className="chatbot-suggestion-label bg-white hover:bg-gray-500 text-black rounded-md px-2 py-1"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleEnterPress}
              className="flex-1 p-2 border rounded-md"
            />
            <button
              onClick={sendMessage}
              disabled={isBotTyping || rateLimited}
              className="px-1 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="30px"
                width="30px"
              >
                <path
                  fill="#d7d7d7"
                  d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        >
          <img
            src={brandImage}
            alt="Chat Icon"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;
