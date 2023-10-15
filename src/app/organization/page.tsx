"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { addOrganization } from '../api/apiCall'
import Prompt from "../Components/Prompt";

const Page = () => {

  let UserId: string | null=null;
  if (typeof window !== 'undefined') {
    
    UserId = localStorage.getItem('UserId')
  }

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [Organization, setOrganization] = useState({
    userId:"",
    OrganizationName: "",
    OrganizationWebsite: "",
    organizationEmail: "",
    OrganizationPhone: "",
    isActive: true,
  });

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem('UserId');
    setOrganization(prevState => ({
        ...prevState, 
        userId: userIdFromStorage ? userIdFromStorage : prevState.userId
    }));
}, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization({
      ...Organization,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await addOrganization(Organization);
    setIsLoading(false);
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
      router.push("/dashboard")
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
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <Navbar />
        {
          UserId?(
            <div className="min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div className="mb-4">
              <label className="block text-gray-600">Organization Name</label>
              <input
                type="text"
                name="OrganizationName"
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-opacity-50 bg-pink-50 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">
                Organization Website
              </label>
              <input
                type="url"
                name="OrganizationWebsite"
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Organization Email</label>
              <input
                type="email"
                name="organizationEmail"
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Organization Phone</label>
              <input
                type="number"
                name="OrganizationPhone"
                maxLength={10}
                minLength={10}
                required
                onChange={handleChange}
                title="Please enter a 10-digit mobile number"
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-indigo-500"
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
          ):(
            <Prompt/>
          )
        }
      </div>
    </>
  );
};

export default Page;
