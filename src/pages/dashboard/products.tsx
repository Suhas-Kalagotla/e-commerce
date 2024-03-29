import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {useState} from 'react'; 
import { Button,buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        
        </div>
    );
}


