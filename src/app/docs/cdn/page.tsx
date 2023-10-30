"use client"

import React, { useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "prismjs/themes/prism.css"; 
import { BiSolidCopy } from "react-icons/bi";
import Prism from "prismjs";
import Link from "next/link";

const Page = () => {
  const codeRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, []);

  const copyCodeToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      navigator.clipboard.writeText(code);
    }
  };

  return (
    <>
      <Navbar />
      <div className="sm:min-h-screen min-h-[54rem] flex items-center justify-center bg-opacity-50 p-4 md:pt-28 pt-52">
        <div className="relative w-full max-w-xl mx-auto">
          <div className="absolute top-[-50px] left-0 flex space-x-4 bg-opacity-40 bg-white backdrop-blur-md rounded px-4 py-2">
            <Link href="/docs">
              <button className="mr-4 hover:text-pink-500 text-black font-semibold px-4 py-2 rounded">
                API
              </button>
            </Link>
            <Link href="/docs/cdn">
              <button className="hover:text-pink-500 text-black font-semibold px-4 py-2 rounded">
                CDN
              </button>
            </Link>
            <Link href="https://github.com/apurvjha123/Chit-Chat-Server#-how-to-integrate">
              <button className="hover:text-pink-500 text-black font-semibold px-4 py-2 rounded">
                More
              </button>
            </Link>
          </div>
          <button
            onClick={copyCodeToClipboard}
            className="absolute top-2 right-2 bg-white p-2 rounded-full active:bg-pink-500 hover:bg-gray-200 transition duration-300 ease-in-out z-10"
          >
            <BiSolidCopy className="text-pink-200 active:text-black" />
          </button>
          <div className="relative z-0">
            <pre
              ref={codeRef}
              className="language-html overflow-x-auto overflow-y-auto p-3 white-space-pre-wrap rounded-lg shadow-xl hljs"
            >
              <code>
                {`  <!DOCTYPE html>
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
    apiKey: "Your API Key",
    chatbotTitle: "Chat Bot",
    initialMessage: "Hello! How can I assist You ?",
    brandImage:
    "https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",
  });
</script>
</html>

<!-- 
Style Sheet CDN
https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css

JavaScript CDN
https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js -->

`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
