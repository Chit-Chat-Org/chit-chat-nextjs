"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { Auth } from '../api/apiCall'

const page = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [User, setUser] = useState({
    UserName: "",
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
    const res = await Auth(User);
    setisLoading(false);
    localStorage.setItem('UserId',res.data.response.data._id)
    if (res.status == 200) {
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
      toast.error("Failed to Submit !", {
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
      <div className="w-screen min-h-screen bg-gradient-to-r from-pink-200 via-red-200 to-yellow-100">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div className="text-gray-950 flex justify-center text-2xl">Sign In</div>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
