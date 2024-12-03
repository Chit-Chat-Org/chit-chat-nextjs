"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChevronRight, Loader, Navigation, Plus } from "lucide-react";
import { Input } from "@/components/ui/inputs";
import { Label } from "@/components/ui/label";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";
import { TableDemo } from "./Table";
import { FileUploadDemo } from "./File";
import { useToast } from "@/hooks/use-toast";
import {
  addAIModel,
  fileUpload,
  fileUploadUrl,
  IaddAIModel,
} from "@/app/api/apiCall";
import { getOrganizationById } from "@/app/api/apiCall"; // Ensure this function is imported
import Link from "next/link";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

  const [selectedOrganization, setSelectedOrganization] = useState<string>("");
  const [OrgData, setOrgData] = useState([]);
  const [s3Url, sets3Url] = useState<string>("");
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [modelName, setModelName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [tableKey, setTableKey] = useState(0);
  const [orgDataLoading, setOrgDataLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setOrgDataLoading(true);
      try {
        const result = await getOrganizationById(user?.id);
        if (result && result.response && result.response.data) {
          setOrgData(result.response.data);
        }
      } catch (error) {
        console.error("Error fetching organization data:", error);
      } finally {
        setOrgDataLoading(false);
      }
    }

    if (user?.id) {
      fetchData();
    }
  }, [user?.id]);

  if (!isSignedIn) {
    router.push("/sign-in");
  }
  if (!isLoaded) {
    return <div>Loading.....</div>;
  }
  if (orgDataLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div>Loading...</div>
      </div>
    );
  }
  if (OrgData.length < 1) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="p-6 border border-border rounded-md text-center space-y-4">
          <div className="text-gray-200">
            Please create an organization before proceeding with AI model
            training.
          </div>
          <Link
            href="/organization"
            className="inline-flex items-center justify-center mt-4 bg-gray-700 text-gray-100 text-sm px-6 py-2 rounded-md shadow-md transition hover:bg-primary-dark"
          >
            Go to Organization
            <Navigation className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = async (event: FormEvent) => {
    event.preventDefault();
    if (!file && !url) {
      toast({ title: "Please provide either a file or a URL." });
      return;
    }

    setLoading(true);
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fileUpload(formData);

        if (res.data?.status === "Success") {
          sets3Url(res.data?.data?.url);
          toast({ title: "File uploaded successfully!" });
          setStep(2);
        } else {
          toast({ title: "Failed to upload file." });
        }
      } else if (url) {
        const res = await fileUploadUrl(url);

        if (res.data?.status === "Success") {
          sets3Url(res.data?.data?.url);
          toast({ title: "URL uploaded successfully!" });
          setStep(2);
        } else {
          toast({ title: "Failed to upload URL." });
        }
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Oops! Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedOrganization || !modelName) {
      toast({ title: "Please select an organization and a model type." });
      return;
    }

    setLoading(true); // Start loading
    try {
      const payload: IaddAIModel = {
        organization: {
          userId: user?.id || "",
          organizationName: selectedOrganization,
        },
        url: s3Url,
        embeddingModel: modelName,
      };

      const response = await addAIModel(payload);

      if (response?.status === "Success") {
        toast({ title: "Model added successfully!" });
        setTableKey((prevKey) => prevKey + 1); // Trigger table re-render
        setStep(1); // Reset modal
      }
    } catch (error) {
      console.error("Error adding model:", error);
      toast({ title: "Failed to add model. Please try again." });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="flex justify-between px-5 py-2 pt-4">
        <div className="text-lg font-medium">Dashboard</div>
        <Modal>
          <ModalTrigger>
            <button
              className="relative grid items-center overflow-hidden rounded-full px-3 py-1.5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-transform duration-200"
              style={{ width: "fit-content", height: "fit-content" }}
            >
              <span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40 blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1.5 px-2 text-sm text-neutral-100">
                <Plus className="w-4 h-4" />
                Train Data
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-gray-850">
                <h2 className="font-bold text-xl text-neutral-200">
                  {step === 1 ? "Step 1: Upload Data" : "Step 2: Model Details"}
                </h2>
                {step === 1 ? (
                  <form className="my-2" onSubmit={handleNext}>
                    <FileUploadDemo
                      onFileSelect={(selectedFiles: File[]) => {
                        if (selectedFiles.length > 0) {
                          setFile(selectedFiles[0]);
                        }
                      }}
                    />
                    <div className="text-gray-500 text-center mt-2">
                      ---OR---
                    </div>
                    <LabelInputContainer className="mt-2">
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        placeholder="https://example.com"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        disabled={!!file}
                      />
                    </LabelInputContainer>
                    <button
                      type="submit"
                      className="mt-2 bg-background text-gray-100 border border-border text-sm px-4 py-2 rounded-md w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex justify-center items-center">
                          <Loader className="animate-spin w-4 h-4" />
                        </div>
                      ) : (
                        "Add File"
                      )}
                    </button>
                  </form>
                ) : (
                  <form className="my-2" onSubmit={handleSubmit}>
                    {/* Organization Selection */}
                    <LabelInputContainer>
                      <Label htmlFor="orgName">Select Organization Name</Label>
                      <select
                        id="orgName"
                        value={selectedOrganization}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          setSelectedOrganization(e.target.value)
                        }
                        className="mb-4 border border-border p-2 rounded w-full bg-background"
                      >
                        <option disabled selected value="">
                          -- Select Organization --
                        </option>
                        {OrgData &&
                          OrgData.map(
                            (
                              value: { OrganizationName: string },
                              index: React.Key | null | undefined
                            ) => (
                              <option
                                key={index}
                                value={value.OrganizationName}
                              >
                                {value.OrganizationName}
                              </option>
                            )
                          )}
                      </select>
                    </LabelInputContainer>

                    {/* Model Selection */}
                    <LabelInputContainer className="mt-5">
                      <Label htmlFor="modelName">Select Model</Label>
                      <select
                        id="modelName"
                        className="border border-border rounded-md p-2 bg-background text-gray-100 w-full"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                      >
                        <option disabled selected value="">
                          Select Model
                        </option>
                        <option value="Gemini">Gemini</option>
                        <option value="OpenAI">OpenAI</option>
                      </select>
                    </LabelInputContainer>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-5 bg-background border border-border text-gray-100 text-sm px-4 py-2 rounded-md w-full"
                      disabled={!selectedOrganization || !modelName || loading}
                    >
                      {loading ? (
                        <div className="flex justify-center items-center">
                          <Loader className="animate-spin w-4 h-4" />
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ModalContent>
            <ModalFooter className="gap-2">
              {step === 1 && (
                <button
                  onClick={() => setStep(2)}
                  className="bg-background text-gray-100 text-sm px-2 py-2 rounded-md border border-border w-28"
                >
                  Next →
                </button>
              )}
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className="bg-background text-gray-100 text-sm px-2 py-2 rounded-md border border-border w-28"
                >
                  Back
                </button>
              )}
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      {/* Table with refreshed key */}
      <TableDemo key={tableKey} UserId={user?.id} />
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page;
