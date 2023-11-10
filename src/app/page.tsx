"use client"

import Link from "next/link"
import { IoIosExit } from "react-icons/io"

export default function Home() {

  return (
    <>
    <div className='w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
          <h1 className="mr-3 text-5xl font-semibold text-gray-800">Create Your Own Chatbot API Endpoint In Seconds</h1>
          </div>
          <div  className="text-gray-500 font-medium m-3">Transform your data into an interactive chatbot with dynamic API endpoints. Seamlessly integrate, engage users, and harness the power of conversational AI. You are one-stop destination for effortlessly bringing intelligent chatbots to your website without any coding hassles in just a few clicks.</div>
          <Link href="/dashboard">
          <button className="text-white bg-black px-5 py-3 rounded-3xl flex active:bg-gray-500 hover:bg-gray-900">Lets Start<IoIosExit className="m-1"/></button>
          </Link>
        </div>
      </div>
    </>
  )
}
