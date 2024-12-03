import React, { useState, useRef, useEffect } from "react";
import { ClipboardPaste } from "lucide-react";
import "./vscode.css"
import Prism from "prismjs";

type DocsModalProps = {
  apiKey: string;
  initialMessage: string;
  chatbotTitle: string;
  LLM: string;
  brandImage: string;
  suggestions: string[];
  rateLimitDuration: number;
  onClick: (e: React.MouseEvent) => void;
};

const DocsModal: React.FC<DocsModalProps> = ({
  apiKey,
  initialMessage,
  chatbotTitle,
  LLM,
  brandImage,
  suggestions,
  rateLimitDuration,
  onClick,
}) => {
  const API_CODE = `async function generateAnswer(userQuestion) {
    const chatAPIUrl = "https://api.chit-chat.fun/api/v1/QnARetrieval?key=${apiKey}";
    const payloadBody = { prompt: userQuestion, llm: "${LLM}" };

    try {
      const response = await fetch(chatAPIUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadBody),
      });

      if (!response.ok) {
        throw new Error("HTTP error! Status:", response.status);
      }

      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  // Usage Example:
  // generateAnswer("ask your question")
  //   .then((answer) => console.log(answer))
  //   .catch((error) => console.log(error));
  `;

  const [content, setContent] = useState(API_CODE);
  const codeRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, [content]);

  const handleButtonClick = (type: string) => {
    switch (type) {
      case "API":
        setContent(API_CODE);
        break;
      case "JS":
        setContent(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://chit-chat.fun/style.css" />
  <title>Chat Bot</title>
</head>
<body>
  <div id="chatbot"></div>
</body>
<script src="https://chit-chat.fun/script.js"></script>
<script>
  chatbot.setChatBotConfiguration({
    apiKey: "${apiKey}",
    chatbotTitle: "${chatbotTitle}",
    LLM: "${LLM}",
    initialMessage: "${initialMessage}",
    brandImage: "${brandImage}",
    suggestions: [${suggestions.map((s) => `"${s}"`).join(", ")}],
    rateLimitDuration: ${rateLimitDuration},
  });
</script>
</html>`);
        break;
      case "REACTJS":
        setContent(`"install the npm dependecies:"
npm i chit-chat-react

"Paste This Code"

import ChatBot from "chit-chat-react";

export default function YourComponent() {
  return (
    <ChatBot
      apiKey="${apiKey}"
      chatbotTitle="${chatbotTitle}"
      LLM="${LLM}"
      initialMessage="${initialMessage}"
      brandImage="${brandImage}"
      suggestions={[${suggestions.map((s) => `"${s}"`).join(", ")}]}
      rateLimitDuration={${rateLimitDuration}}
    />
  );
}`);
        break;
      case "PYTHON":
        setContent(`import requests

def generate_answer(user_question):
  chat_api_url = "http://chit-chat.fun/api/v1/QnARetrieval?key=${apiKey}"
  payload_body = {"prompt": user_question, "llm": "${LLM}"}

  try:
    response = requests.post(chat_api_url, json=payload_body, headers={"Content-Type": "application/json"})

    if response.status_code != 200:
      raise Exception(f"HTTP error! Status: {response.status_code}")

    return response.json()
  except Exception as e:
    print("Error fetching data:", e)
    raise e`);
        break;
      default:
        setContent("");
    }
  };

  const copyCodeToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
    }
  };

  return (
    <div
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center p-4 sm:p-28 md:p-32 lg:p-16 xl:p-12"
    >
      <div
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="relative bg-gray-900 border-border backdrop-blur-md p-4 sm:p-6 rounded-lg w-full max-w-2xl h-full max-h-screen overflow-y-auto"
      >
        <div className="flex space-x-4 mb-4">
          {["API", "JS", "REACTJS", "PYTHON"].map((type) => (
            <button
              key={type}
              onClick={() => handleButtonClick(type)}
              className="px-3 py-2 bg-gray-700 text-white rounded"
            >
              {type}
            </button>
          ))}
        </div>
        <button
          onClick={copyCodeToClipboard}
          className="absolute top-2 right-2 bg-white p-2 rounded-full active:bg-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out z-10"
        >
          <ClipboardPaste className="text-gray-700 active:text-black" />
        </button>
        <div className="relative z-0">
          <pre
            ref={codeRef}
            className="language-javascript overflow-x-auto rounded-lg shadow-xl hljs p-2 sm:text-base text-sm w-full"
          >
            <code>{content}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DocsModal;
