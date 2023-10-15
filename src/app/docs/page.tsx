"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import "./style.css";
import { BiSolidCopy } from "react-icons/bi";
import javascript from "highlight.js/lib/languages/javascript";
import Link from "next/link";

const page = () => {
  const codeRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.registerLanguage("javascript", javascript);
      hljs.highlightBlock(codeRef.current);
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
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <Navbar />
        <div className="sm:min-h-screen min-h-[54rem] flex items-center justify-center bg-opacity-50 p-4 sm:pt-28 lg:pt-30">
          <div className="relative w-full max-w-xl mx-auto">
            <div className="absolute top-[-50px] left-0 space-x-4 bg-opacity-40 bg-white backdrop-blur-md rounded px-4 py-2 flex flex-row">
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
                className="overflow-auto rounded-lg shadow-xl hljs p-2 sm:text-base text-sm w-full"
              >
                <code>
                  {`   async function generateAnswer(userQuestion, apiKey) {
      let chatAPIUrl = \`https://chit-chat.tech/api/v1/QnARetrieval?key={apiKey}\`;

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
  }`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
