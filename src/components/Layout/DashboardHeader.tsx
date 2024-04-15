import { useSession } from "next-auth/react";
import { Menu, CircleX, ShoppingCart, CircleUser } from "lucide-react";
import Link from "next/link";

export default function DashBoardHeader() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-10 bg-white p-4 shadow-xl flex justify-between flex-row-reverse items-center w-full h-20 backdrop-blur-sm">
      <div className="w-full h-16 flex gap-2 justify-end ">
        <div className="ml-4 flex items-center space-x-10">
          <Link
            href="/"
            className="text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
          >
            {" "}
            home{" "}
          </Link>
          <Link
            href="/cart"
            className="block text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
          >
            <ShoppingCart />
          </Link>

          <Link
            href="/dashboard/settings"
            className="text-black block hover:bg-slate-400 hover:text-white rounded-lg p-2"
          >
            <CircleUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
