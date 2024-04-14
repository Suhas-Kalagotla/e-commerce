import React from "react";
import { EllipsisVertical } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/globa.d";
import Image from "next/image";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex bg-white m-2 rounded-xl h-auto shadow-2lg">
      <Card className="w-full bg-white">
        <CardHeader className="w-full flex relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/${product.imageUrl}`}
            alt="product image"
            className="h-64 w-auto object-cover"
            width={200}
            height={200}
          />
          {
            //<DropdownMenu>
            //<DropdownMenuTrigger
            //asChild
            //className="bg-gray-300 rounded-full p-1 cursor-pointer absolute top-1 right-2"
            //>
            //<EllipsisVertical />
            //</DropdownMenuTrigger>
            //<DropdownMenuContent className="w-36">
            //<DropdownMenuSeparator />
            //<DropdownMenuCheckboxItem className="cursor-pointer m-1">
            //Delete
            //</DropdownMenuCheckboxItem>
            //<DropdownMenuCheckboxItem className="cursor-pointer m-2">
            //Change
            //</DropdownMenuCheckboxItem>
            //</DropdownMenuContent>
            //</DropdownMenu>
          }
        </CardHeader>
        <CardContent className="flex h-24 flex-col items-center justify-center ">
          <p>{product.name}</p>
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
