"use client"

import Link from "next/link"
import { IoIosExit } from "react-icons/io"

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 px-4 md:px-24 lg:px-24 ">
            Create Your Own Chatbot API Endpoint In Seconds
          </h1>
          <div className="text-gray-500 font-medium md:text-2xl lg:text-2xl xl:text-3xl mt-4 md:mt-6 ">
            Transform your data into an interactive chatbot with dynamic API endpoints. Seamlessly integrate, engage users, and harness the power of conversational AI. Your one-stop destination for effortlessly bringing intelligent chatbots to your website without any coding hassles in just a few clicks.
          </div>
          <Link href="/dashboard">
            <button className="text-white bg-black px-5 py-3 mt-6 rounded-3xl flex items-center active:bg-gray-500 hover:bg-gray-900 transition duration-300">
              Let's Start <IoIosExit className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
