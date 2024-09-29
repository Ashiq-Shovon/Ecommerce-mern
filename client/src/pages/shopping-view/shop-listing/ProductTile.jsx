import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categoryOptionsMap, brandOptionsMap } from "@/config";
import { Button } from "@/components/ui/button";
const ProductTile = ({ product }) => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <img src={product.image} />
            <div>
              <p>In Stock{product.totalStock}</p>
              <div className="flex justify-between">
                <p>{categoryOptionsMap[product.category]}</p>
                <p>{brandOptionsMap[product.brand]}</p>
              </div>
              <div className="flex justify-between">
                <p className="underline">{product.price}</p>
                <p className="font-semibold">{product.salePrice}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductTile;
