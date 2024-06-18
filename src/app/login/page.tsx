"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Auth } from "../api/apiCall";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [User, setUser] = useState({
    UserName: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (event) => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await Auth(User);
    setIsLoading(false);
    if (res.data?.status !== "Failed") {
      localStorage.setItem('UserId', res.data.response.data._id);
      toast("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/dashboard");
    } else {
      toast.error("Failed to Login!", {
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="text-gray-950 flex justify-center text-2xl">
            Log In
          </div>
          <div className="mb-4 required">
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
          <div className="mb-4 required">
            <label className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="Password"
                required
                minLength={6}
                maxLength={12}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-pink-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
                ) : (
                  <AiFillEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
          {isLoading ? (
            <button
              disabled
              className="w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700"
            >
              <AiOutlineLoading3Quarters className="animate-spin" />
            </button>
          ) : (
            <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700">
              Submit
            </button>
          )}
          <p className="font-sans font-normal flex justify-center p-2">
            Create An Account{" "}
            <Link href="/sign-up" className="text-sky-500 underline italic pl-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Page;
