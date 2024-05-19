This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Chit-Chat: Effortless Chatbot Integration

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
#### Chit-Chat allows you to quickly integrate a chatbot into your application by simply uploading a configuration file. This bot uses the power of OpenAI's API to generate responses. By using our provided CDN and API endpoint, you can get started in just a few minutes.-

![Chatbot Demo](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)


## Project Demo
[![Alt text](https://img.youtube.com/vi/MnmEB7ZGAXU/0.jpg)](https://www.youtube.com/watch?v=MnmEB7ZGAXU)

## Docker
```sh
docker pull apurvjha123/chit-chat

🚀 How to Integrate
1. 🎨 CDN Integration

Step 1: Add the provided CSS and JS CDN to your project.
CSS CDN:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css">

Step 2: Embed the chatbot interface into your desired location within the HTML body:
<div id="chatbot"></div>

Step 3: Before the closing '</body>' tag, add the following
JavaScript CDN:
<script src="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js"></script>

Step 4: Configure the chatbot using the following code:
chatbot.setChatBotConfiguration({
    apiKey: "Your API Key",
    chatbotTitle: "Chat Bot",
    initialMessage: "Hello! How can I assist you?",
    brandImage: "https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",
});


2. 🔌 API Integration
After uploading your file and providing the OpenAI API key, you can make use of our 'generateAnswer' function to retrieve the chatbot's responses:
async function generateAnswer(userQuestion, apiKey) {
    const chatAPIUrl = `https://chit-chat.tech/api/v1/QnARetrieval?key=${apiKey}`;

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
    return jsonData.answer;
}

📘 API Reference
Retrieve a Chatbot Answer
POST https://chit-chat.tech/api/v1/QnARetrieval?key=${apiKey}

Request Example
{
  "prompt": "What is Chit-Chat?"
}

Response Example
{
  "answer": "Chit-Chat is a service that allows you to integrate a chatbot into your application using OpenAI's API."
}

🛠 Prerequisites

   - Active OpenAI API Key
   -Configuration file uploaded to Chit-Chat

💌 Support

If you encounter any issues or require further assistance, please reach out to our support team at apurvjha123@gmail.com.

Thank you for choosing Chit-Chat for your chatbot needs. We hope to make your integration process as smooth as possible.🚀
!
