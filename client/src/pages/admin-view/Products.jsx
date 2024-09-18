import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CommonForm from "@/components/common/CommonForm";
import { productFormControls } from "@/config";
import ProductImageUpload from "@/components/admin-view/ProductImageUpload";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const formClass = {
  parent: "grid grid-cols-4 justify-center items-center",
  child: "col-span-3",
  button: "w-[200px] mx-auto mt-2",
};
const Products = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <h1>product</h1>
      <div className="flex w-full items-center justify-end  mt-4">
        <Button onClick={() => setOpen(true)} variant="secondary">
          Add Product
        </Button>
      </div>
      <Sheet open={open} onOpenChange={() => setOpen(false)} className="w-full">
        <SheetContent
          side="right"
          className="lg:min-w-[800px] min-w-[500px] overflow-y-scroll"
        >
          <SheetHeader>
            <SheetTitle>Add Product</SheetTitle>
            <SheetDescription>this is description</SheetDescription>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />
          <div>
            <CommonForm
              formControls={productFormControls}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              buttonText="Add product"
              className={formClass}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Products;
