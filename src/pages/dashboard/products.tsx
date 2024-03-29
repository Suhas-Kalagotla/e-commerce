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


export default function Products(){
    const [selectFilter, setSelectFilter] = useState('all'); 
    
    const handleFilter = (filter: string)=>{
        setSelectFilter(filter); 
    }

    return (
        <div className="w-full  h-screen mt-4 p-2">
        <div className="border-b border-black flex flex-row gap-4" >
            <Button onClick={() =>handleFilter('all')} className={cn(buttonVariants({variant:selectFilter === 'all'? "active" : "filter"}))}>All</Button>
            <Button onClick={() =>handleFilter('mens')} className={cn(buttonVariants({variant:selectFilter === 'mens'? "active" : "filter"}))}>Mens</Button>
            <Button onClick={() =>handleFilter('womens')} className={cn(buttonVariants({variant:selectFilter === 'womens'? "active" : "filter"}))}>Womens</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="flex w-2/3 h-72 bg-sky-100 border rounded-lg border-black m-4 justify-center items-center">
            <TooltipProvider>
            <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
               <div className="rounded-full p-2 border bg-gray-300 hover:bg-gray-300/90">
                <Plus/> 
               </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
                    Add Product
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>
        </div>
        </div>
    );
}


