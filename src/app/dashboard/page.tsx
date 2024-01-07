"use client";

import Navbar from "../Components/Navbar";
import OrgTemp from "./OrgTemp";
import AiModel from "./AiModel";
import { getOrganizationById, getAiModelById } from "../api/apiCall";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Prompt from "../Components/Prompt";
import Link from "next/link";

const Page = () => {
  const [UserId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const UserIds: string | null = localStorage.getItem("UserId");
      setUserId(UserIds);
    } else {
      toast.error("Please Login !", {
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
  }, []);
  const [Data, setData] = useState({
    response: {
      data: [],
    },
  });

  const [AI, setAI] = useState({
    response: {
      data: [],
    },
  });

  const value = async () => {
    if (UserId) {
      const data = await getOrganizationById(UserId);
      setData(data);
    }
  };

  useEffect(() => {
    value();
  }, [UserId]); // UserId added to dependency array

  const valueAi = async () => {
    if (UserId) {
      const data = await getAiModelById(UserId);
      setAI(data);
    }
  };

  useEffect(() => {
    valueAi();
  }, [UserId]); // UserId added to dependency array

  return (
    <>
      <Navbar />
      {UserId ? (
        <div className="grid md:grid-cols-7 grid-cols-1 sm:pt-20 pt-52 h-screen shadow-2xl">
          <div className="md:col-span-3 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]">
            <div className="flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl">
              Organizations
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1">
              {Data &&
                Data.response &&
                Data.response.data &&
                Data.response.data.map(
                  (
                    value: {
                      OrganizationName: string;
                      OrganizationPhone: number;
                      OrganizationWebsite: string;
                      createdAt: string;
                    },
                    index: number
                  ) => (
                    <OrgTemp
                      key={index}
                      OrganizationName={value.OrganizationName}
                      OrganizationPhone={value.OrganizationPhone}
                      OrganizationWebsite={value.OrganizationWebsite}
                      createdAt={value.createdAt}
                    />
                  )
                )}
            </div>
          </div>
          <div className="md:col-span-4 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]">
            <div className="flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl">
              Ai Trained Models
            </div>

            <div className="flex p-3">
              <div className="text-start py-2 font-bold font-sans">Name</div>
              <div className="flex-grow text-center py-2 font-bold font-sans">
                API Key
              </div>
            </div>

            <div className="p-4 overflow-y-auto">
              {AI &&
                AI.response &&
                AI.response.data &&
                AI.response.data.map(
                  (
                    value: {
                      organizationName: string;
                      uploadKnowledge: string;
                      embeddedKnowlege: string;
                      apiKey: string;
                      createdAt: string;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <Link href={`/trychatbot`} onClick={
                      ()=>{
                        localStorage.setItem('apiKey', value.apiKey);
                      }
                    } key={index}>
                      <AiModel
                        organizationName={value.organizationName}
                        uploadKnowledge={value.uploadKnowledge}
                        embeddedKnowlege={value.embeddedKnowlege}
                        apiKey={value.apiKey}
                        createdAt={value.createdAt}
                      />
                  </Link>
                  )
                )}
            </div>
          </div>
        </div>
      ) : (
        <Prompt />
      )}
    </>
  );
};

export default Page;
