"use client";
import { getAiModelByKey } from "@/app/api/apiCall";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input";

const Chatbot = ({ id }: { id: string }) => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [playgroundData, setplaygroundData] = useState<{
    uploadKnowledge: string;
    apiKey: string;
  }>({
    uploadKnowledge: "",
    apiKey: "",
  });
  const placeholders = [
    "Ask anything related to the provided data.",
    "Refer to the file content on the left for context.",
    "Type your query about the data and hit 'Send'.",
    "Ask for summaries or details from the file on your left.",
    "Who is Apurv?",
    "Who are you?",
  ];
  
  const [selectedLLM, setSelectedLLM] = useState("Gemini"); // Default to "Gemini"

  useEffect(() => {
    async function fetchData() {
      const result = await getAiModelByKey(id);
      if (result && result.response && result.response.data) {
        setplaygroundData({
          uploadKnowledge: result.response.data.uploadKnowledge,
          apiKey: result.response.data.apiKey,
        });
      }
    }

    fetchData();
  }, [id]);

  const fetchBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch(
        `https://chit-chat.fun/api/v0.1/QnARetrieval?key=${playgroundData.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: userMessage,
            llm: selectedLLM,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      return data?.message || "No response from the bot.";
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "An error occurred while communicating with the server.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: userMessage, bot: "" },
    ]);
    setInputValue("");
    setLoading(true);

    const botMessage = await fetchBotResponse(userMessage);

    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, bot: botMessage }
          : message
      )
    );

    setLoading(false);

    if (pendingMessage) {
      const pending = pendingMessage;
      setPendingMessage(null);
      setTimeout(() => handleSendMessageWithQueue(pending), 0);
    }
  };

  const handleSendMessageWithQueue = async (message: string) => {
    if (loading) {
      setPendingMessage(message);
    } else {
      setInputValue(message);
      await handleSendMessage();
    }
  };


  const handleLLMChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedLLM(selected);
    console.log(`Selected LLM: ${selected}`);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left Half: Iframe */}
      <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-border p-4 bg-background">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-200">Chatbot</h1>
          <Link
            href={`/chatbotconfig?key=${playgroundData.apiKey}`}
            className="bg-gray-900 rounded-xl border border-border hover:bg-gray-800 py-2 px-4"
          >
            Preview →
          </Link>
        </div>
        <div className="h-[85vh] lg:h-[90%]">
          <iframe
            src={playgroundData.uploadKnowledge}
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>

      {/* Right Half: Chatbot */}
      <div className="w-full lg:w-1/2 flex flex-col h-full lg:h-[97%] p-4 bg-background">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-200">Chatbot</h1>
          <select
            value={selectedLLM}
            onChange={handleLLMChange}
            className="bg-gray-900 text-white border border-border rounded-md p-2"
          >
            <option value="Gemini">Gemini</option>
            <option value="OpenAI">OpenAI</option>
          </select>
        </div>
        <div className="flex-1 overflow-y-auto border border-border rounded-md p-4 bg-gray-950">
          {messages.length === 0 ? (
            <p className="text-sm text-gray-500">Start the conversation...</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-end mb-2">
                  <div className="max-w-xs p-2 rounded-md bg-gray-600 text-white">
                    {message.user}
                  </div>
                </div>
                {message.bot && (
                  <div className="flex justify-start">
                    <div className="max-w-xs p-2 rounded-md bg-gray-800 text-white">
                      {message.bot}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="p-2 rounded-md bg-gray-800 text-gray-400">
                <span className="typing-animation">Bot is typing...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="mt-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleInputChange}
            onSubmit={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
