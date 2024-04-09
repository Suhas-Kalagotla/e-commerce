import React from "react";
import { Input, InputProps } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/globa.d";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex bg-white m-2 rounded-xl h-auto shadow-2lg">
      <Card className="w-full bg-white">
        <CardHeader className="w-full flex">
          <Image
            src={product.imageUrl}
            alt="product image"
            className="h-64 w-auto object-cover"
            width={250}
            height={250}
          />
        </CardHeader>
        <CardContent className="flex h-24 flex-col items-center justify-center ">
          <p>shirt</p>
          <p className="text-xs">{product.description}</p>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <p>$: {product.price}</p>
          <Button variant="secondary">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
