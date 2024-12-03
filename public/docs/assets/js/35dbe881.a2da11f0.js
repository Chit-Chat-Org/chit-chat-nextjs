"use strict";(self.webpackChunkchit_chat_docs=self.webpackChunkchit_chat_docs||[]).push([[931],{1734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Integration/HTML","title":"CDN Integration Guide","description":"Overview","source":"@site/docs/Integration/HTML.md","sourceDirName":"Integration","slug":"/Integration/HTML","permalink":"/docs/Integration/HTML","draft":false,"unlisted":false,"editUrl":"https://github.com/Chit-Chat-Org/docs-chit-chat/edit/main/docs/Integration/HTML.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Installation Guide","permalink":"/docs/Getting Started/installation"},"next":{"title":"API Integration Guide","permalink":"/docs/Integration/api"}}');var r=n(4848),a=n(8453);const o={},s="CDN Integration Guide",h={},l=[{value:"Overview",id:"overview",level:2},{value:"Steps to Obtain Your API Key",id:"steps-to-obtain-your-api-key",level:2},{value:"Integration",id:"integration",level:2},{value:"1. Add CSS CDN",id:"1-add-css-cdn",level:3},{value:"2. Add Chatbot Interface",id:"2-add-chatbot-interface",level:3},{value:"3. Add JavaScript CDN",id:"3-add-javascript-cdn",level:3},{value:"4. Configure the Chatbot",id:"4-configure-the-chatbot",level:3},{value:"HTML Template",id:"html-template",level:2},{value:"Key Props:",id:"key-props",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"cdn-integration-guide",children:"CDN Integration Guide"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["This guide explains how to integrate a chatbot into your webpage. The chatbot will be powered by a model called ",(0,r.jsx)(t.strong,{children:"Gemini"})," or ",(0,r.jsx)(t.strong,{children:"OpenAI"}),". The configuration requires an API key, which can be obtained through the ",(0,r.jsx)(t.a,{href:"http://chit-chat.fun/dashboard",children:(0,r.jsx)(t.code,{children:"dashboard"})}),". route of your application."]}),"\n",(0,r.jsx)(t.admonition,{title:"Api KEY",type:"danger",children:(0,r.jsx)(t.p,{children:"Don't Expose API Key to Anything."})}),"\n",(0,r.jsx)(t.h2,{id:"steps-to-obtain-your-api-key",children:"Steps to Obtain Your API Key"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Log into your application."}),"\n",(0,r.jsxs)(t.li,{children:["Go to the ",(0,r.jsx)(t.a,{href:"http://chit-chat.fun/dashboard",children:(0,r.jsx)(t.code,{children:"dashboard"})})," route."]}),"\n",(0,r.jsx)(t.li,{children:"Train AI Model, it requires information file."}),"\n",(0,r.jsx)(t.li,{children:"Copy the API key for use in the next steps."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsx)(t.h3,{id:"1-add-css-cdn",children:"1. Add CSS CDN"}),"\n",(0,r.jsxs)(t.p,{children:["Include the CSS file in the ",(0,r.jsx)(t.code,{children:"<head>"})," of your HTML document:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" href="https://chit-chat.fun/style.css">\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2-add-chatbot-interface",children:"2. Add Chatbot Interface"}),"\n",(0,r.jsxs)(t.p,{children:["Insert the chatbot's container where you want it to appear in ",(0,r.jsx)(t.code,{children:"<Body>"})," :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<div id="chatbot"></div>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-add-javascript-cdn",children:"3. Add JavaScript CDN"}),"\n",(0,r.jsxs)(t.p,{children:["Place the following script before the closing ",(0,r.jsx)(t.code,{children:"</body>"})," tag or between the ",(0,r.jsx)(t.code,{children:"</body>"})," and ",(0,r.jsx)(t.code,{children:"</html>"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script src="https://chit-chat.fun/script.js"><\/script>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"4-configure-the-chatbot",children:"4. Configure the Chatbot"}),"\n",(0,r.jsx)(t.p,{children:"Set up your chatbot using the following script:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'chatbot.setChatBotConfiguration({\r\n    apiKey: "your-api-key-here",  \x3c!-- Replace with your actual API key --\x3e\r\n    chatbotTitle: "Chat Bot",\r\n    LLM: "Gemini",\r\n    initialMessage: "Hello! How Can I Assist You?",\r\n    brandImage: "https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png",\r\n    suggestions: [],\r\n    rateLimitDuration: 5000\r\n});\n'})}),"\n",(0,r.jsx)(t.h2,{id:"html-template",children:"HTML Template"}),"\n",(0,r.jsx)(t.p,{children:"Below is the HTML template you can use to integrate the chatbot into your webpage:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    // highlight-start\r\n    <link rel="stylesheet" href="https://chit-chat.fun/style.css">\r\n    // highlight-end\r\n    <title>Chat Bot</title>\r\n</head>\r\n<body>\r\n    // highlight-start\r\n    <div id="chatbot"></div>\r\n    // highlight-end\r\n</body>\r\n// highlight-start\r\n<script src="https://chit-chat.fun/script.js"><\/script>\r\n<script>\r\nchatbot.setChatBotConfiguration({\r\n    apiKey: "your-api-key-here",  \x3c!-- Replace with your actual API key --\x3e\r\n    chatbotTitle: "Chat Bot",\r\n    LLM: "Gemini",\r\n    initialMessage: "Hello! How Can I Assist You?",\r\n    brandImage: "https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png",\r\n    suggestions: [],\r\n    rateLimitDuration: 5000\r\n});\r\n<\/script>\r\n// highlight-end\r\n</html>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"key-props",children:"Key Props:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"APIKey: Replace it with your actual API key."}),"\n",(0,r.jsx)(t.li,{children:"ChatbotTitle: The title displayed for the chatbot."}),"\n",(0,r.jsx)(t.li,{children:"LLM: The language model to use (e.g., Gemini,OpenAI)."}),"\n",(0,r.jsx)(t.li,{children:"initialMessage: The first message displayed when the chat loads."}),"\n",(0,r.jsx)(t.li,{children:"brandImage: The URL for the chatbot\u2019s brand image (can be a logo)."}),"\n",(0,r.jsx)(t.li,{children:"suggestions: An array of suggested responses (optional)."}),"\n",(0,r.jsx)(t.li,{children:"rateLimitDuration: The rate limit duration to prevent excessive API calls."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);