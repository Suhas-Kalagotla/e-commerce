"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, CircleX, ShoppingCart, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar({}: Props) {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-navColor w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-g">
          <div className="flex items-center justify-between h-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-black">
                  <Image src="/1.png" alt="Logo" width={200} height={200} />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
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
                  className="text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
                >
                  <ShoppingCart />
                </Link>
                <Link
                  href="/dashboard"
                  className="text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
                >
                  <CircleUser />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              {!isClick ? (
                <Button variant="outline" size="icon" onClick={toggleNavbar}>
                  <Menu />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={toggleNavbar}
                >
                  <CircleX />
                </Button>
              )}
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
              <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="block text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
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
                  href="/"
                  className="block text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
                >
                  <CircleUser />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
