import { Plus } from 'lucide-react';
import {useState} from 'react'; 
import { Button,buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import ProductCard from "@/components/productCard.tsx"; 

export default function Products(){
    const [selectFilter, setSelectFilter] = useState('all'); 
    
    const handleFilter = (filter: string)=>{
        setSelectFilter(filter); 
    }

    const productItems:Product[] =[
         {
           "id": "1",
           "name": "Product A",
           "description": "This is product A",
           "price": 19.99,
           "imageUrl": "/shirt.jpeg",
         },
         {
           "id": "2",
           "name": "Product B",
           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "price": 29.99,
           "imageUrl": "https://example.com/product-b.jpg"
         }
        ];

    return (
        <div className="w-full  h-screen mt-4 p-2">
        <div className="border-b border-black flex flex-row justify-between gap-4 " >
            <div className="pl-4">
                 <Button onClick={() =>handleFilter('all')} className={cn(buttonVariants({variant:selectFilter === 'all'? "active" : "filter"}))}>All</Button>
                 <Button onClick={() =>handleFilter('mens')} className={cn(buttonVariants({variant:selectFilter === 'mens'? "active" : "filter"}))}>Mens</Button>
                 <Button onClick={() =>handleFilter('womens')} className={cn(buttonVariants({variant:selectFilter === 'womens'? "active" : "filter"}))}>Womens</Button>
            </div>
            <div className="pr-4">
                 <TooltipProvider>
                 <Tooltip delayDuration={0}>
                 <TooltipTrigger asChild>
                    <div className="rounded-full cursor-pointer p-2 border bg-gray-300 hover:bg-gray-300/90">
                     <Plus/> 
                    </div>
                 </TooltipTrigger>
                 <TooltipContent side="left" className="flex items-center gap-4">
                         Add Product
                 </TooltipContent>
                 </Tooltip>
                 </TooltipProvider>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
            {productItems.map((product) =>(
                <ProductCard key={product.id} product ={product}/>
            ))}
        </div>
        </div>
    );
}


