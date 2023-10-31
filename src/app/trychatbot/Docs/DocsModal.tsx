import React, { useState, useRef, useEffect, Ref } from 'react';
import 'prismjs/themes/prism.css';
import { BiSolidCopy } from 'react-icons/bi';
import Prism from 'prismjs'

type DocsModalProps = {
    apiKey: string;
    initialMessage: string;
    chatbotTitle: string;
    brandImage: string;
    suggestions: string[];
    rateLimitDuration: number;
    onClick: (e: React.MouseEvent) => void;
}

const DocsModal: React.FC<DocsModalProps> = ({apiKey, initialMessage, chatbotTitle, brandImage, suggestions, rateLimitDuration, onClick}) => {
    
    const API_CODE = `async function generateAnswer(userQuestion, apiKey) { 
let chatAPIUrl = "https://chit-chat.tech/api/v1/QnARetrieval?key=${apiKey}";

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
}`;
    
    const [content, setContent] = useState(API_CODE);

    const handleButtonClick = (type: string) => {
        switch(type) {
            case 'API':
                setContent(`${API_CODE}`);
                break;
            case 'JS':
                setContent(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css">
    <title>Chat Bot</title>
</head>
<body>
    <div id="chatbot"></div>
</body>
<script src="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js"></script>
<script>
chatbot.setChatBotConfiguration({
    apiKey: "${apiKey}",
    chatbotTitle: "${chatbotTitle}",
    initialMessage: "${initialMessage}",
    brandImage: "${brandImage}",
    // suggestions :[${suggestions}],
    rateLimitDuration : ${rateLimitDuration}
    });
</script>
</html>

<!-- 
Style Sheet CDN
https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css

JavaScript CDN
https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js -->

                `);
                break;
            case 'REACTJS':
                setContent(`
\`1. Install this Dependency:\`
npm i chit-chat-react

\`2. Configuration & Usage:\`

import ChatBot from 'chit-chat-react';

export default function YourComponent() {
    return <ChatBot 
    apiKey: "${apiKey}",
    chatbotTitle: "${chatbotTitle}",
    initialMessage: "${initialMessage}",
    brandImage: "${brandImage}",
    suggestions :[${suggestions}],
    rateLimitDuration : ${rateLimitDuration} />;
}

            `)
                break;
            default:
                setContent('');
        }
    }

    const codeRef = useRef<HTMLPreElement | null>(null);

    useEffect(() => {
        if (codeRef.current) {
          Prism.highlightAllUnder(codeRef.current);
        }
      }, [content]);

    const copyCodeToClipboard = () => {
        if (codeRef.current) {
            const code = codeRef.current.innerText;
            navigator.clipboard.writeText(code);
        }
    };

    return (
        <div onClick={onClick} className="absolute inset-0 flex items-center justify-center p-4 sm:p-28 md:p-32 lg:p-16 xl:p-12">
    <div onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }} className="relative bg-white bg-opacity-20 backdrop-blur-md p-4 sm:p-6 rounded-lg w-full max-w-2xl h-full max-h-screen overflow-y-auto">
        <div className="flex space-x-4 mb-4">
            <button onClick={() => handleButtonClick('API')} className="px-3 py-2 bg-pink-500 text-white rounded">API</button>
            <button onClick={() => handleButtonClick('JS')} className="px-3 py-2 bg-pink-500 text-white rounded">JS</button>
            <button onClick={() => handleButtonClick('REACTJS')} className="px-3 py-2 bg-pink-500 text-white rounded">REACTJS</button>
        </div>
        <button onClick={copyCodeToClipboard} className="absolute top-2 right-2 bg-white p-2 rounded-full active:bg-pink-500 hover:bg-gray-200 transition duration-300 ease-in-out z-10">
            <BiSolidCopy className="text-pink-200 active:text-black" />
        </button>
        <div className="relative z-0">
            <pre ref={codeRef} className="language-javascript overflow-x-auto rounded-lg shadow-xl hljs p-2 sm:text-base text-sm w-full">
                <code>
                    {content}
                </code>
            </pre>
        </div>
    </div>
</div>

    );
}

export default DocsModal;
