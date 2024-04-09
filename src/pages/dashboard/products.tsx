import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import ProductCard from "@/components/Product/productCard";
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
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/types/globa";
import { api } from "@/Api";
import { constants } from "buffer";
import { constrainedMemory } from "process";
import { accessSync } from "fs";

export default function Products() {
  const [selectFilter, setSelectFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    image: "",
  });

  const handleFilter = (filter: string) => {
    setSelectFilter(filter);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("name", product.name);
      form.append("description", product.description);
      form.append("price", product.price.toString());
      form.append("image", product.image);
      const res = await api.post("/product/create", form);
      if (res.status == 201) {
        setOpen(false);
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productItems: Product[] = [
    {
      id: "1",
      name: "Product A",
      description: "This is product A",
      price: 19.99,
      imageUrl: "/shirt.jpeg",
    },
  ];

  return (
    <div className="w-full  h-screen mt-4 p-2">
      <div className="border-b border-black flex flex-row justify-between gap-4 ">
        <div className="pl-4">
          <Button
            onClick={() => handleFilter("all")}
            className={cn(
              buttonVariants({
                variant: selectFilter === "all" ? "active" : "filter",
              }),
            )}
          >
            All
          </Button>
          <Button
            onClick={() => handleFilter("mens")}
            className={cn(
              buttonVariants({
                variant: selectFilter === "mens" ? "active" : "filter",
              }),
            )}
          >
            Mens
          </Button>
          <Button
            onClick={() => handleFilter("womens")}
            className={cn(
              buttonVariants({
                variant: selectFilter === "womens" ? "active" : "filter",
              }),
            )}
          >
            Womens
          </Button>
        </div>
        <div className="pr-4">
          <Dialog
            open={open}
            onOpenChange={(open) => {
              setOpen(open);
              setProduct({
                id: "",
                name: "",
                description: "",
                price: 0,
                imageUrl: "",
              });
            }}
          >
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="rounded-full cursor-pointer p-2 border bg-gray-300 hover:bg-gray-300/90">
                      <Plus />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="left"
                    className="flex items-center gap-4"
                  >
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
                          price: Number(e.target.value),
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
                      onChange={(e) => {
                        const selectedFile = e.target.files
                          ? e.target.files[0]
                          : null;
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            const imageData = reader.result as string;
                            setProduct({
                              ...product,
                              image: imageData,
                            });
                          };
                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                </div>
                <DialogFooter></DialogFooter>
                <Button type="submit">Create</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        {productItems.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
