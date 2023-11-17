import { Metadata } from "next"

export function constructMetadata({
    title = "Chit Chat - A chatbot Intregation using ChatGPT",
    description = "Transform your data into an interactive chatbot with dynamic API endpoints. Seamlessly integrate, engage users, and harness the power of conversational AI. You are one-stop destination for effortlessly bringing intelligent chatbots to your website without any coding hassles in just a few clicks.",
    image = "https://cdn.jsdelivr.net/gh/apurvjha123/chit-chat-nextjs/public/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@Apurvjha_eth"
      },
      icons,
      metadataBase: new URL('https://chit-chat.tech/'),
      themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }