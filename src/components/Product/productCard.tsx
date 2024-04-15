import React from "react";
import { ToastAction } from "../ui/toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartItem, Product } from "@/types/globa.d";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/Api";
import { Link } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { User } from "@/types/globa.d";

export default function ProductCard({
  product,
  user,
  cartItemId,
  fetchProducts,
}: {
  product: Product;
  user: User;
  cartItemId?: string;
  fetchProducts?: () => void;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const navToCart = () => {
    router.push("/cart");
  };

  const removeCart = async () => {
    try {
      const res = await api.post("/cart/delete", { cartItemId });
      if (res.status == 200) fetchProducts?.();
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async () => {
    try {
      const res = await api.post("/cart/add", {
        product: product,
        user: user,
      });
      if (res.status == 200) {
        toast({
          variant: "success",
          description: res.data.message,
          action: (
            <ToastAction
              altText="View Cart"
              onClick={navToCart}
              className="hover:text-black"
            >
              View Cart
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          description: res.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {router.pathname !== "/cart" ? (
            <Button variant="secondary" onClick={addCart}>
              Add to Cart
            </Button>
          ) : (
            <Button variant="destructive" onClick={removeCart}>
              Remove
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
