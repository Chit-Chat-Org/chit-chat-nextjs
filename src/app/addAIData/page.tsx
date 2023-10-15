"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { fetchs } from "../api/apiCall";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Prompt from "../Components/Prompt";

type AiModel = {
  organization: {
    userId:string|any;
    organizationName: string;
  };
  url: string;
  openAIApi:string;
};
const AddAiModel = () => {
  const router = useRouter();
  let UserId: string | null=null;
  if (typeof window !== 'undefined') {
    
    UserId = localStorage.getItem('UserId')
  }
  const [isLoading, setisLoading] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  const [orgData, setOrgData] = useState<any[]>([]);
  const [File, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [openAIApi, setOpenAIApi] = useState<string>("");

  const [AiModel, setAiModel] = useState<AiModel>({
    organization: {
      userId:"",
      organizationName: "",
    },
    url: "",
    openAIApi:""
  });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchs();
      if (result && result.response && result.response.data) {
        setOrgData(result.response.data);
      }
    }

    fetchData();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.item(0);
    if (selectedFile && selectedFile.type === 'text/plain') {
      const file = e.target.files?.item(0);
      if (file) {
        setFile(file);
      }
    }
    else{
      toast.error("Only txt files are allowed!", {
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

  const isValidOpenAIApi = (key: string): boolean => {
    return key.startsWith("sk-") && key.length > 50;
  };

  const handleOpenAIApiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredApi = e.target.value;
    if (!isValidOpenAIApi(enteredApi)) {
      toast.error("Invalid OpenAI API Key", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setOpenAIApi(enteredApi);
};

  useEffect(() => {
    // Update AiModel when selectedOrganization or url changes
    setAiModel({
      organization: {
        organizationName: selectedOrganization,
        userId: UserId
      },
      url: url,
      openAIApi: openAIApi
    });
  }, [selectedOrganization, url, UserId, openAIApi]);

  const fetchFile = async () => {
    if (!File) {
      toast.error("No file selected", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", File);

    try {
      const res = await axios.post(
        "https://chit-chat.tech/api/v1/upload",
        formData
      );
      toast("Successfully, Submitted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUrl(res.data.data.url);
      return true;
    } catch (err) {
      toast.error("oops someting went wrong !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
  };

  const SubmitAiModel = async () => {
    const res = await axios.post(
      "https://chit-chat.tech/api/v1/addAiTrainingModel",
      AiModel
    );
  };
  console.log(AiModel)

  const handleFileSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const success = await fetchFile();
    if (success) {
      toast("File Submmited !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("File not Submitted !", {
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisLoading(true)
    await SubmitAiModel()
      .then((res) => {
        toast("Ai Model Created !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res)
        router.push('/dashboard')
      })
      .catch((err) => {
        toast.error("Failed Training", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(err);
      });
      setisLoading(false)
  };
  const isFormFilled = Boolean(File) && Boolean(selectedOrganization);
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <Navbar />
        {
          UserId?(
            isLoading?(
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
              <AiOutlineLoading3Quarters className="animate-spin text-6xl" />
              </div>
            ):(
              <div className="sm:pt-32 pt-52 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
              <div className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10">
                <h2 className="text-xl mb-4 font-bold">Train Data</h2>
    
                <form>
                  {/* File Upload */}
                  <label className="block text-sm font-medium mb-2">
                    Upload File:
                  </label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="mb-4 p-2 file:bg-pink-300 file:rounded-xl file:active:bg-pink-400 file:shadow-lg file:border-pink-600"
                  />
                  <button
                    onClick={handleFileSubmit}
                    className="bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                  >
                    Add File
                  </button>
                  {/* Organization Selection */}
                  <label className="block text-sm font-medium mb-2">
                    Select Organization:
                  </label>
                  <select
                    value={selectedOrganization}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setSelectedOrganization(e.target.value)
                    }
                    className="mb-4 border p-2 rounded w-full bg-pink-200"
                  >
                    <option disabled value="">
                      -- Select Organization --
                    </option>
                    {orgData &&
                      orgData.map(
                        (
                          value: { OrganizationName: string },
                          index: React.Key | null | undefined
                        ) => (
                          <option key={index} value={value.OrganizationName}>
                            {value.OrganizationName}
                          </option>
                        )
                      )}
                  </select>
                  <div className="mb-4">
              <label className="block text-sm font-medium mb-2">OpenAi ApiKey</label>
              <input
                type="text"
                name="openAIApi"
                required
                onChange={handleOpenAIApiChange}
                className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`bg-pink-700 active:bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ${
                      !isFormFilled && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isFormFilled}
                  >Submit
                  </button>
                </form>
              </div>
            </div>
            )
          ):(
            <Prompt/>
          )
        }
      </div>
    </>
  );
};

export default AddAiModel;
