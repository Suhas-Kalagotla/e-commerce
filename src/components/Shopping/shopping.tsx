import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mens, Womens } from "@/components";
import { api } from "@/Api";
import { useState, useEffect } from "react";
import { Product,User } from "@/types/globa";

export default function Shopping({ user }: { user: User }) {
  const [isActive, setIsActive] = useState("mens");
  const [mensProducts, setMensProducts] = useState<Product[]>([]);
  const [womensProducts, setWomensProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await api.get("/product/get");
    const allProducts: Product[] = res.data.products;
    const mensFilter = allProducts.filter(
      (product) => product.category === "mens",
    );
    const womensFilter = allProducts.filter(
      (product) => product.category === "womens",
    );
    setMensProducts(mensFilter);
    setWomensProducts(womensFilter);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={"flex flex-col items-center p-10 w-full"}>
      <Tabs defaultValue="mens" className="w-full">
        <TabsList className="w-full flex p-0 m-0 ">
          <TabsTrigger
            value="mens"
            onClick={() => setIsActive("mens")}
            className="w-1/2 relative text-xl semi-bold p-0 m-0"
          >
            Men's Wear
            {isActive === "mens" && (
              <span className="absolute -bottom-1 left-0 w-full mt-4 h-1 bg-gray-500 rounded transform translate-y-0"></span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="womens"
            onClick={() => setIsActive("womens")}
            className="w-1/2 relative text-xl font-semibold-0 p-0 m-0"
          >
            Women's Wear
            {isActive === "womens" && (
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-500 rounded transform translate-y-0"></span>
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mens">
          <Mens pro={mensProducts} user={user} />
        </TabsContent>
        <TabsContent value="womens">
          <Womens pro={womensProducts} user={user} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
