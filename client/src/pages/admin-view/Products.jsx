import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import CommonForm from "@/components/common/CommonForm";
import { productFormControls } from "@/config";
import ProductImageUpload from "@/components/admin-view/ProductImageUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProductById,
  editProduct,
  getAllProducts,
} from "@/store/product-slice/productSlice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

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
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { data } = useSelector((state) => state.product);
  const utilityFunction = () => {
    setOpen(false);
    setFormData(initialFormData);
    setUploadedImageUrl(null);
  };
  function onSubmit() {
    if (!formData._id) {
      dispatch(addProduct(formData)).then((data) => {
        console.log(data);
        if (data?.payload.success) {
          toast({
            title: data?.payload.message,
          });
        } else if (!data?.payload.success) {
          toast({
            title: data?.payload.message,
          });
        }
      });
    } else  {
      dispatch(editProduct(formData)).then((data) => {
        console.log(data)
        const msg = data.payload.message;
        const bol = data.payload.success;
        if (bol) {
          toast({
            title: msg,
          });
        } else {
          toast({
            title: msg,
          });
        }
      });
    }
    utilityFunction();
  }
  function handleDelete(id) {
    console.log(id);
    dispatch(deleteProductById(id)).then((data) => {
      const msg = data?.payload.message;
      const bol = data?.payload.success;
      if (bol) {
        dispatch(getAllProducts());
        toast({
          title: msg,
        });
      } else if (!bol) {
        toast({
          title: msg,
        });
      }
    });
  }

  function handleEdit(item) {
    setUploadedImageUrl(item.image);
    setFormData(item);
    console.log(formData);
    setOpen(true);
  }
  useEffect(() => {
    setFormData((pre) => {
      return {
        ...pre,
        image: uploadedImageUrl,
      };
    });
    dispatch(getAllProducts());
  }, [uploadedImageUrl, dispatch]);

  return (
    <div>
      <h1>product</h1>
      <div className="flex w-full items-center justify-end  my-4">
        <Button onClick={() => setOpen(true)} variant="secondary">
          Add Product
        </Button>
      </div>
      {console.log(data)}
      {/* {console.log(productData)} */}
      <div className="grid grid-cols-3 gap-3">
        {data?.map((item, id) => {
          console.log(data);

          return (
            <div key={id}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={item.image}></img>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <div className="flex justify-between w-full">
                      <p>TotalStock: {item.totalStock}</p>
                      <div>
                        <p>Price {item.price}</p>
                        <p>Sale price: {item.salePrice}</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        variant="secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          handleEdit(item);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(item._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>

      <Sheet open={open} onOpenChange={utilityFunction} className="w-full">
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
            open={open}
          />
          <div>
            <CommonForm
              formControls={productFormControls}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              buttonText={!formData._id ? "Add product" : "Edit product"}
              className={formClass}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Products;
