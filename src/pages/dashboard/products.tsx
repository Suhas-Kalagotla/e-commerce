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
import ProductCard from "@/components/Product/productCard.tsx"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Product } from "@/types/globa";
import { api } from "@/Api";


export default function Products(){
    const [selectFilter, setSelectFilter] = useState('all'); 
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState<Product>({
        id: "",
        name: "",
        description:"",
        price: "",
        image:"",
    });

    const handleFilter = (filter: string)=>{
        setSelectFilter(filter); 
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            console.log("hell0"); 
            e.preventDefault(); 
            const res = await api.post("/product/create", product);
        }catch(error){
            console.log(error); 
        }
    }

    const productItems:Product[] =[
         {
           "id": "1",
           "name": "Product A",
           "description": "This is product A",
           "price": 19.99,
           "image": "/shirt.jpeg",
         },
         {
           "id": "2",
           "name": "Product B",
           "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "price": 29.99,
           "image": "https://example.com/product-b.jpg"
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
            <Dialog
                open={open}
                onOpenChange={(open) => {
                    setOpen(open);
                    setProduct({
                        id: "",
                        name: "",
                        description:"",
                        price: "",
                        imageUrl:"",
                    });
                }}
            >
            <DialogTrigger >
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Product</DialogTitle>
            </DialogHeader>
            <div className="border border-border "></div>
                <form onSubmit={handleSubmit}>
                <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                id="name"
                placeholder="Enter Product Name"
                required
                value={product.name}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        name: e.target.value,
                    })
                }
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="description">Product Description</Label>
                <Textarea 
                id="description"
                placeholder="Enter Product Description"
                required
                value={product.description}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        description: e.target.value,
                    })
                }
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                id="price"
                placeholder="Enter Product price"
                required
                value={product.price}
                onChange={(e) =>
                    setProduct({
                        ...product,
                        price: e.target.value,
                    })
                }
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="photo">Product Image</Label>
                <Input
                type="file"
                id="image"
                accept=""
                required
                onChange={(e)=>
                    setProduct({
                        ...product,
                        image:e.target.files[0],
                    })
                }
                />
                </div>
                </div>
            <DialogFooter>
            </DialogFooter>
                <Button type="submit" onClick={handleSubmit}>Create</Button>

            </form>
            </DialogContent>
            </Dialog>
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


