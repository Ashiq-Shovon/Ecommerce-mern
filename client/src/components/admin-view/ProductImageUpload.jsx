import React, { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CloudUpload, File, X } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";

import axios from "axios";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  open,
}) => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  function handleImageFileChange(e) {
    // console.log(e.target.files);
    const selectedFile = e.target?.files[0];
    console.log(selectedFile);
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleImageRemove(e) {
    // inputRef.current.value = "";
    setImageFile(null);
    setUploadedImageUrl(null)
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    setImageFile(droppedFile);
  }

  async function uploadedImageToCloudinary() {
    // setLoading(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/product/upload-image",
        data
      );
      console.log(res.data);
      if (res?.data.success) {
        setLoading(false);
      }
      if (res) setUploadedImageUrl(res.data.result.url);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (imageFile != null) uploadedImageToCloudinary();
    if (imageFile && !open) setImageFile(null);
  }, [imageFile, open]);

  return (
    <>
      <div className="grid grid-cols-4 mb-3">
        <Label className="flex items-center justify-centertext-lg font-semibold mb-2">
          Upload Image
        </Label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-dashed border-2 rounded-md  py-6 col-span-3"
        >
          <Input
            id="image-upload"
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleImageFileChange}
          />
          {!imageFile ? (
            <div>
              <img src={uploadedImageUrl} />
              <Label
                htmlFor="image-upload"
                className="flex flex-col justify-center items-center"
              >
                <div className="content-center font-semibold">
                  <CloudUpload />
                </div>
                <span>Drag and drop or click to upload image file</span>
              </Label>
            </div>
          ) : loading ? (
            <Skeleton className="w-full h-[20px] rounded-full" />
          ) : (
            <div className="flex justify-between items-center">
              {/* <div> */}
              <File />
              <img src={uploadedImageUrl} />
              {/* </div> */}

              <Button variant="secondary" onClick={handleImageRemove}>
                <X />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductImageUpload;
