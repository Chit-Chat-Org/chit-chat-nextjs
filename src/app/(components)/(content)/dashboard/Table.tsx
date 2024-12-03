"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

import { ClipboardCopy, ExternalLink, SquareArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAiModelById } from "@/app/api/apiCall";
import { useEffect, useState } from "react";


export const TableDemo = ({UserId}:any) => {
  const { toast } = useToast();
  const router = useRouter()
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
    });
  };

  const [TrainedData,setTrainedData] = useState<any>([])

  useEffect(() => {
    const fetechData = async() =>{
      try {
        const res = await getAiModelById(UserId);
        console.log(res?.response?.data)
        setTrainedData(res?.response?.data)
      } catch (error) {
        toast({
          title:"Oops! Something Was Wrong ."
        })
      }
    }
    fetechData();
  }, [UserId])

  
  return (
    <div className="px-5">
      {TrainedData.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Organization</TableHead>
              <TableHead>Upload Knowledge</TableHead>
              <TableHead>Embedding Model</TableHead>
              <TableHead>Embedded Knowledge</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Playground</TableHead>
              <TableHead>Preview</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TrainedData.map((item: any, index: any) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {item.organizationName}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="truncate max-w-[150px]">
                      {item.uploadKnowledge}
                    </span>
                    <ClipboardCopy
                      size={16}
                      className="cursor-pointer"
                      onClick={() => copyToClipboard(item.uploadKnowledge)}
                    />
                  </div>
                </TableCell>
                <TableCell>{item.embeddingModel}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="truncate max-w-[150px]">
                      {item.embeddedKnowlege}
                    </span>
                    <ClipboardCopy
                      size={16}
                      className="cursor-pointer"
                      onClick={() => copyToClipboard(item.embeddedKnowlege)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="truncate max-w-[150px]">{item.apiKey}</span>
                    <ClipboardCopy
                      size={16}
                      className="cursor-pointer"
                      onClick={() => copyToClipboard(item.apiKey)}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <ExternalLink
                    size={16}
                    className="cursor-pointer text-gray-400 hover:text-gray-500"
                    onClick={() => router.push(`playground/${item.originalAPIKey}`)}
                  />
                </TableCell>
                <TableCell className="text-center">
                  <SquareArrowUpRight
                    size={16}
                    className="cursor-pointer text-gray-400 hover:text-gray-500"
                    onClick={() => router.push(`chatbotconfig?key=${item.apiKey}`)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No AI Models Found.
        </div>
      )}
    </div>
  );  
}
