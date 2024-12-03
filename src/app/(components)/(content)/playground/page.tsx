"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAiModelById } from "@/app/api/apiCall";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
  const [trainedData, setTrainedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

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

  if (!isLoaded || loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Select onValueChange={(value) => router.push(`/playground/${value}`)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select AI Model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>AI Models</SelectLabel>
            {trainedData.length > 0 ? (
              trainedData.map((data: any) => (
                <SelectItem value={data.originalAPIKey} key={data.originalAPIKey}>
                  {data.organizationName}
                </SelectItem>
              ))
            ) : (
              <Select onValueChange={() => router.push(`/dashboard`)}>
                <SelectItem value="dashboaord">Create AI Model.</SelectItem>
              </Select>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Page;
