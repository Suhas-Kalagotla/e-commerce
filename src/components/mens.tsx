import { useState, useEffect } from "react";
import { api } from "@/Api";
import { Product } from "@/types/globa";
import ProductCard from "@/components/Product/productCard";

enum Category {
  mens = "mens",
  womens = "womens",
}
export default function Mens() {
  const [pro, setPros] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = await api.get("/product/get", {
      params: {
        category: Category.mens,
      },
    });
    setPros(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [pro]);
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
      {pro.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
