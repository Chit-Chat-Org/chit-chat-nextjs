"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

interface FileUploadDemoProps {
  onFileSelect?: (files: File[]) => void;
}

export function FileUploadDemo({ onFileSelect }: FileUploadDemoProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    console.log("Files uploaded:", uploadedFiles);

    // Notify parent component
    if (onFileSelect) {
      onFileSelect(uploadedFiles);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black border border-border rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
