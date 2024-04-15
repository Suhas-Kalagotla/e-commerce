import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CartItem, Cart, User, Product } from "@/types/globa";
import ProductCard from "@/components/Product/productCard";
import { Button } from "@/components/ui/button";
import { api } from "@/Api";

export default function CartPage({ user }: { user: User }) {
  const [items, setItems] = useState<CartItem[] | null>(null);

  const calculateTotal = () => {
    if (!items) return 0;
    return items.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.product.price;
    }, 0);
  };

  const fetchProducts = async () => {
    if (user) {
      const res = await api.get("/cart/get", {
        params: {
          cartId: user.cartId,
        },
      });
      if (res.status == 200) {
        setItems(res.data.cart.items);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <div className="w-2/3 border-r-[1px] h-full overflow-y-auto">
        {items && items.length > 0 ? (
          <div className="grid m-2 md:grid-cols-3 gap-4 grid-cols-1">
            {items.map((cartItem: CartItem, idx: number) => (
              <ProductCard
                key={idx}
                product={cartItem.product}
                user={user}
                cartItemId={cartItem.id}
                fetchProducts={fetchProducts}
              />
            ))}
          </div>
        ) : (
          <div className="text-center h-full">Cart is Empty</div>
        )}
      </div>
      <div className="w-1/3 sticky top-0 right-0 flex flex-col">
        <h2 className="bg-gray-50 items-center justify-center text-center p-2 text-xl">
          Cart
        </h2>
        <div>
          <div className="grid md:grid-cols-2 gap-4 m-4 grid-cols-1">
            <p>Total No of Items:</p>
            <p> {items ? items.length : 0}</p>

            <p>Total:</p>
            <p> ${calculateTotal()}</p>
            <div></div>
            <Button variant="primary">Place Order</Button>
          </div>
        </div>
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
    props: {
      user: session.user,
    },
  };
};
