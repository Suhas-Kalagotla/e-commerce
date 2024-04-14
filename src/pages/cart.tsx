import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { CartItem, Cart } from "@/types/globa";

//export default function InvoiceForm(props: {
//  invoice:
//    | (Invoice & {
//        items: InvoiceItem[];
//      })
//    | null;
//  settings: Setting;
//  clients: Client[];
//  values: DefaultValues;
//  invoiceId: number;
//}) {

export default function cartPage(props: {
  cart:
    | (Cart & {
        items: CartItem[];
      })
    | null;
}) {
  //  const calculateTotal = () => {
  //return cartItems.reduce(
  //  (total, item: CartItem) => total + item.product.price * item.quantity,
  //  0,
  //);
  // };

  return (
    <div className="flex">
      <div className="w-2/3">
        <h2>Cart Items</h2>
        {
      //          {pro.map((product, idx) => (
      //            <ProductCard key={idx} product={product} />
      //          ))}
        }
      </div>
      <div className="w-1/3">
        <h2>Total</h2>
        {
          //<p>Total: ${calculateTotal()}</p>
        }
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
