"use client";

import React, { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { BsEyeFill } from "react-icons/bs";
import {toast} from "react-toastify"

type Props = {
  organizationName: string;
  uploadKnowledge: string;
  embeddedKnowlege: string;
  apiKey: string;
  createdAt: string;
};

const AiModel = ({
  organizationName,
  uploadKnowledge,
  embeddedKnowlege,
  apiKey,
  createdAt,
}: Props) => {
  type DetailsType = {
    organizationName: string;
    uploadKnowledge: string;
    embeddedKnowlege: string;
    apiKey: string;
    createdAt: string;
  };
  const [Details, setDetails] = useState<DetailsType>({
    organizationName: "",
    uploadKnowledge: "",
    embeddedKnowlege: "",
    apiKey: "",
    createdAt: "",
  });
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = (): void => {
    navigator.clipboard
      .writeText(apiKey.toString())
      .then((): void => {
        toast("API Key copied to clipboard!",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((err: any): void => {
        toast.error("Failed to copy API Key!",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };

  const handleClick = () => {
    setDetails({
      organizationName,
      uploadKnowledge,
      embeddedKnowlege,
      apiKey,
      createdAt,
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="rounded-xl p-2 shadow-xl w-full">
          <div className="flex justify-between items-center">
            <div className="flex-none rounded-md mr-2">{organizationName}</div>

            <div className="flex-grow text-center rounded-md">
              {apiKey.substring(0, 4)}...{apiKey.slice(-5)}
              <button
                onClick={copyToClipboard}
                className="p-2 border text-white rounded active:bg-white"
              >
                <div className="flex">
                  <BiSolidCopy className="text-lime-500" />
                </div>
              </button>
            </div>
            <div>
              <button
                className="flex-none rounded-md underline pt-3 text-blue-900"
                onClick={handleClick}
              >
                <BsEyeFill />
              </button>
              {showModal && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50"
                  onClick={() => setShowModal(false)}
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-50 backdrop-blur-md"></div>

                  <div
                    className="relative p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-md max-w-screen-lg mx-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-4 right-4  text-gray-500 rounded-full p-2 hover:bg-gray-600 focus:outline-none"
                    >
                      <IoIosCloseCircle />
                    </button>

                    <h2 className="text-2xl mb-4">Details</h2>

                    <p>
                      <strong>Organization Name:</strong>{" "}
                      {Details.organizationName}
                    </p>
                    <p className="flex">
                      <strong>Upload Knowledge:</strong>{" "}
                      <div className="text-sky-500 underline">
                        {Details.uploadKnowledge}
                      </div>
                    </p>
                    <p className="flex">
                      <strong>Embedded Knowledge:</strong>{" "}
                      <div className="text-sky-500 underline">
                        {Details.embeddedKnowlege}
                      </div>
                    </p>
                    <p>
                      <strong>API Key:</strong> {Details.apiKey}
                    </p>
                    <p>
                      <strong>Created At:</strong>{" "}
                      {new Date(Details.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiModel;
