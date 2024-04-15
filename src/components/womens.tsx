import { Product } from "@/types/globa";
import ProductCard from "@/components/Product/productCard";
import { User } from "@/types/globa";

export default function Womens({ pro, user }: { pro: Product[]; user: User }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
      {pro.map((product, idx) => (
        <ProductCard key={idx} product={product} user={user} />
      ))}
    </div>
  );
}
