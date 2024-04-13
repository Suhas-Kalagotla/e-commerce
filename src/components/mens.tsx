import { useState, useEffect } from "react";
import { api } from "@/Api";
import { Product, Category } from "@/types/globa";
import ProductCard from "@/components/Product/productCard";

export default function Mens() {
  const [pro, setPros] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = await api.get("/product/get");
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
