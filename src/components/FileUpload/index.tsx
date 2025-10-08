"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Download, Upload } from "lucide-react";

interface UploadedFile {
  file: File;
  preview: string;
}

export default function FileUpload({ onFileSelect }: { onFileSelect: (file: File | null) => void }) {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be under 10MB");
        return;
      }
      setUploadedFile({ file, preview: URL.createObjectURL(file) });
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div>
      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-8 w-8 text-gray-500" />
          <p className="mt-2 text-gray-600">
            {isDragActive ? "Drop the file here ..." : "Drag & drop or click to choose files"}
          </p>
          <p className="text-sm text-gray-400">Max file size: 10 MB</p>
        </div>
      ) : (
        <Card className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">{uploadedFile.file.name}</p>
            <p className="text-sm text-gray-500">
              {(uploadedFile.file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={uploadedFile.preview}
              download={uploadedFile.file.name}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Download className="w-5 h-5" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setUploadedFile(null);
                onFileSelect(null);
              }}
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
