import { useState, useRef } from "react";
import Button from "../Buttons/Button";
import uploadIcon from "../../assets/icons/upload.svg";

function FileGetter() {
  const [fileName, setFileName] = useState("Drop your file here");
  const fileInputRef = useRef();
  const [fileURL, setFileURL] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dropZoneRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setFileURL(url);
    }
  };



  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      const file = files[0];
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setFileURL(url);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-5 flex items-center justify-center">
        <div
          className={`h-lg flex w-md items-center justify-between rounded-4xl ring-1 ${isDragging ? "ring-brand-pink bg-pink-50" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          ref={dropZoneRef}
        >
          <div className="px-6 text-sm font-light">{fileName}</div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="application/pdf"
          />
          <a href="https://app.docsid.io" target="_blank" rel="noopener noreferrer">
            <Button
              className="mx-2 my-2 h-12 items-center rounded-4xl"
              imgSrc={uploadIcon}
            >
              Upload File
            </Button>
          </a>
        </div>
      </div>
      <div className="shadow-brand-pink h-[700px] w-[700px] rounded-2xl bg-white shadow-md ring-1 ring-black ring-inset">
        {fileURL ? (
          <embed
            src={`${fileURL}#toolbar=0`}
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-2xl"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Upload a PDF to view it here
          </div>
        )}
      </div>
    </div>
  );
}

export default FileGetter;
