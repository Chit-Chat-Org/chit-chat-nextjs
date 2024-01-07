"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { SignUp } from '../api/apiCall'
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [User, setUser] = useState({
    UserName: "",
    UserEmail:"",
    Password:""
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisLoading(true);
    const res = await SignUp(User);
    setisLoading(false);
    console.log(res)
    if (res.data?.status == "Success") {
      localStorage.setItem('UserId',res.data.response.data)
      toast("Organization Submitted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/organization")
    } else {
      toast.error("User Already Exist!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
    <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div className="text-gray-950 flex justify-center text-2xl">Sign Up</div>
            <div className="mb-4">
              <label className="block text-gray-600">UserName</label>
              <input
                type="text"
                name="UserName"
                required
                minLength={6}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="UserEmail"
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="Password"
                required
                minLength={6}
                maxLength={12}
                onChange={handleChange}
                title="Please enter a 10-digit mobile number"
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-pink-500"
              />
            </div>
            {isLoading ? (
              <button disabled className="w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                <AiOutlineLoading3Quarters className="animate-spin" />
              </button>
            ) : (
              <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                Submit
              </button>
            )}
            <p className="font-sans font-normal flex justify-center p-2">Already Have Account  <Link href="/login" className="text-sky-500 underline italic pl-2">Login</Link></p>
          </form>
        </div>
    </>
  );
};

export default Page;
