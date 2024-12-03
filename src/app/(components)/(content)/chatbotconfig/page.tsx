"use client";

import React, { useEffect, useState } from "react";
import ChatBotComponent from "./ChatBotComponent";
import DocsModal from "./Docs/DocsModal";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/inputs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@clerk/nextjs";
import { getAiModelById } from "@/app/api/apiCall";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const { toast } = useToast();
  const [trainedData, setTrainedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedLLM, setSelectedLLM] = useState<string>("Gemini");

  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

  const [config, setConfig] = useState<{
    apiKey: string;
    initialMessage: string;
    chatbotTitle: string;
    brandImage: string;
    suggestions: string[];
    rateLimitDuration: number;
  }>({
    apiKey: "",
    initialMessage: "Hello! How Can I Assist You?",
    chatbotTitle: "Chat bot",
    brandImage:
      "https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png",
    suggestions: [],
    rateLimitDuration: 5000,
  });

  const [Value, setValue] = useState(config);

  useEffect(() => {
    // Update the config with the API key from the query string
    if (key) {
      setConfig((prev) => ({ ...prev, apiKey: key }));
    }
  }, [key]);

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      const fetchData = async () => {
        try {
          const res = await getAiModelById(user?.id);
          setTrainedData(res?.response?.data || []);
        } catch (error) {
          toast({
            title: "Oops! Something went wrong.",
            description: "Unable to fetch AI models.",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [isSignedIn, isLoaded, user?.id, router, toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedLLM) {
      toast({
        title: "Validation Error",
        description: "Please select an LLM before proceeding.",
        variant: "destructive",
      });
      return;
    }

    setIsModalVisible(true);
    setValue(config);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  return (
    <>
      {key === null ? (
        <div className="flex justify-center items-center h-full">
          <Select
            onValueChange={(value) =>
              router.push(`/chatbotconfig?key=${value}`)
            }
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>AI Models</SelectLabel>
                {trainedData.length > 0 ? (
                  trainedData.map((data: any) => (
                    <SelectItem value={data.apiKey} key={data.apiKey}>
                      {data.organizationName}
                    </SelectItem>
                  ))
                ) : (
                  <Select onValueChange={() => router.push(`/dashboard`)}>
                    <SelectItem value="dashboard">Create AI Model.</SelectItem>
                  </Select>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div className="sm:pt-10 pt-44 overflow-y-auto flex items-center justify-center">
          {isModalVisible && (
            <DocsModal LLM={selectedLLM} onClick={closeModal} {...Value} />
          )}
          <div className="bg-background border border-border rounded p-8 w-96">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Label>
                <div className="font-sans font-semibold text-md p-2">
                  Chatbot Title:
                </div>
                <Input
                  className="block bg-gray-900 rounded p-2 w-full"
                  placeholder="Chatbot Title"
                  value={config.chatbotTitle}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      chatbotTitle: e.target.value,
                    }))
                  }
                />
              </Label>
              <Label>
                <div className="font-sans font-semibold text-md p-2">
                  Brand Image URL:
                </div>
                <Input
                  className="block bg-gray-900 rounded p-2 w-full"
                  placeholder="Brand Image URL"
                  value={config.brandImage}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      brandImage: e.target.value,
                    }))
                  }
                />
              </Label>
              <Label>
                <div className="font-sans font-semibold text-md p-2">
                  Suggestions:
                </div>
                <Textarea
                  className="block bg-gray-900 rounded p-2 w-full"
                  placeholder="Enter suggestions (one per line)"
                  value={config.suggestions.join("\n")}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      suggestions: e.target.value.split("\n"),
                    }))
                  }
                />
              </Label>
              <Label>
                <div className="font-sans font-semibold text-md p-2">
                  Rate Limit Duration (in MS):
                </div>
                <Input
                  className="block bg-gray-900 rounded p-2 w-full"
                  placeholder="Rate Limit Duration"
                  type="number"
                  value={config.rateLimitDuration}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      rateLimitDuration: Number(e.target.value),
                    }))
                  }
                />
              </Label>
              <Label>
                <div className="font-sans font-semibold text-md p-2">
                  Select LLM:
                </div>
                <Select onValueChange={setSelectedLLM} value={selectedLLM}>
                  <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select LLM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>AI Models</SelectLabel>
                      <SelectItem value="Gemini">Gemini</SelectItem>
                      <SelectItem value="OpenAI">OpenAI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Label>
              <div className="flex justify-between">
                <Link href={'/docs'} className="text-end mt-4 bg-gray-800 text-white rounded p-2">Docs</Link>
                <button
                type="submit"
                className="text-end mt-4 bg-gray-800 text-white rounded p-2"
              >
                Quick Integrate
              </button>
              </div>
            </form>
          </div>
          <ChatBotComponent {...config} />
        </div>
      )}
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default Page;
