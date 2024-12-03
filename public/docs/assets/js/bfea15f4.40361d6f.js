"use strict";(self.webpackChunkchit_chat_docs=self.webpackChunkchit_chat_docs||[]).push([[245],{2845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Integration/next","title":"Next Integration Guide","description":"This guide demonstrates how to integrate the Chit-Chat bot into your React application.","source":"@site/docs/Integration/next.md","sourceDirName":"Integration","slug":"/Integration/next","permalink":"/docs/Integration/next","draft":false,"unlisted":false,"editUrl":"https://github.com/Chit-Chat-Org/docs-chit-chat/edit/main/docs/Integration/next.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"API Integration Guide","permalink":"/docs/Integration/api"},"next":{"title":"React Integration Guide","permalink":"/docs/Integration/react"}}');var a=n(4848),r=n(8453);const o={},s="Next Integration Guide",l={},c=[{value:"Steps to Obtain Your API Key",id:"steps-to-obtain-your-api-key",level:2},{value:"1. Install the Dependency",id:"1-install-the-dependency",level:2},{value:"2. Configuration &amp; Usage",id:"2-configuration--usage",level:2},{value:"Key Props:",id:"key-props",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"next-integration-guide",children:"Next Integration Guide"})}),"\n",(0,a.jsxs)(t.p,{children:["This guide demonstrates how to integrate the ",(0,a.jsx)(t.strong,{children:"Chit-Chat"})," bot into your React application."]}),"\n",(0,a.jsx)(t.admonition,{title:"Api KEY",type:"danger",children:(0,a.jsx)(t.p,{children:"Don't Expose API Key to Anything."})}),"\n",(0,a.jsx)(t.h2,{id:"steps-to-obtain-your-api-key",children:"Steps to Obtain Your API Key"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Log into your application."}),"\n",(0,a.jsxs)(t.li,{children:["Go to the ",(0,a.jsx)(t.a,{href:"http://chit-chat.fun/dashboard",children:(0,a.jsx)(t.code,{children:"dashboard"})})," route."]}),"\n",(0,a.jsx)(t.li,{children:"Train AI Model, it requires information file."}),"\n",(0,a.jsx)(t.li,{children:"Copy the API key for use in the next steps."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"1-install-the-dependency",children:"1. Install the Dependency"}),"\n",(0,a.jsxs)(t.p,{children:["To get started, you need to install the ",(0,a.jsx)(t.code,{children:"chit-chat-react"})," package. Run the following command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install chit-chat-react\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will install the required library to integrate the chatbot into your React app."}),"\n",(0,a.jsx)(t.h2,{id:"2-configuration--usage",children:"2. Configuration & Usage"}),"\n",(0,a.jsx)(t.p,{children:"Once the dependency is installed, you can use the ChatBot component in your React app."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-JSX",metastring:'title="src/app/Chatbot/page.jsx"',children:'import React from \'react\';\r\nimport ChatBot from \'chit-chat-react\';\r\n\r\nconst page = () => {\r\n    return (\r\n        <ChatBot\r\n            apiKey="YOUR_API_KEY"  // Replace with your actual API key\r\n            chatbotTitle="Chat bot"\r\n            LLM="Gemini"\r\n            initialMessage="Hello! How Can I Assist You?"\r\n            brandImage="https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png"\r\n            suggestions={[]}  // Add any suggestions if needed\r\n            rateLimitDuration={5000}  // Set the rate limit duration\r\n        />\r\n    );\r\n}\r\nexport default page;\n'})}),"\n",(0,a.jsx)(t.h3,{id:"key-props",children:"Key Props:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"APIKey: Replace it with your actual API key."}),"\n",(0,a.jsx)(t.li,{children:"ChatbotTitle: The title displayed for the chatbot."}),"\n",(0,a.jsx)(t.li,{children:"LLM: The language model to use (e.g., Gemini,OpenAI)."}),"\n",(0,a.jsx)(t.li,{children:"initialMessage: The first message displayed when the chat loads."}),"\n",(0,a.jsx)(t.li,{children:"brandImage: The URL for the chatbot\u2019s brand image (can be a logo)."}),"\n",(0,a.jsx)(t.li,{children:"suggestions: An array of suggested responses (optional)."}),"\n",(0,a.jsx)(t.li,{children:"rateLimitDuration: The rate limit duration to prevent excessive API calls."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);