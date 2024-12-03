import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Chit Chat - AI Powered chatbot Builder",
        template: `%s | Chit Chat`
    },
    description: "Chit Chat is an AI powered chatbot builder that helps you create a chatbot in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Chit Chat - AI Powered chatbot Builder",
        description: "Chit Chat is an AI powered chatbot builder that helps you create a chatbot in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Chit Chat - AI Powered chatbot Builder",
        description: "Chit Chat is an AI powered chatbot builder that helps you create a chatbot in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://chit-chat.fun"),
};
