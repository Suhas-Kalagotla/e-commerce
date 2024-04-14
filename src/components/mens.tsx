import { useState, useEffect } from "react";
import { api } from "@/Api";
import { Product } from "@/types/globa";
import ProductCard from "@/components/Product/productCard";

export default function Mens({ pro }: { pro: Product[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
      {pro.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
