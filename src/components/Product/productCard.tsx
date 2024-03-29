import React from 'react';
import { Input, InputProps } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/globa.d"

export default function ProductCard({product}:Product){
    return(
       <div className="flex bg-white m-2 rounded-xl h-auto shadow-2lg"> 
            <Card className="w-full bg-white">
            <CardHeader className="w-full flex">
                <img src={product.imageUrl} className="h-64 w-auto object-cover"/>
            </CardHeader>
            <CardContent className="flex h-24 flex-col items-center justify-center ">
                <p>shirt</p>
                <p className="text-xs">{product.description}</p>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
               <p>$: {product.price}</p>
               <Button variants="secondary">Add to Cart</Button>
            </CardFooter>
            </Card>
       </div> 
    ); 
}
