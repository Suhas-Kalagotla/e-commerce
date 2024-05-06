"use client";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Menu, CircleX, ShoppingCart, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/types/globa";

export default function Navbar({ user }: { user: User}) {
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
                  Home
                </Link>
                <Link
                  href="/cart"
                  className="text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
                >
                  <ShoppingCart />
                </Link>
                <div className="text-black hover:bg-slate-400 hover:text-white rounded-lg p-2">
                  <UserProfile user={user} />
                </div>
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
                  Home
                </Link>
                <Link
                  href="/cart"
                  className="block text-black hover:bg-slate-400 hover:text-white rounded-lg p-2"
                >
                  <ShoppingCart />
                </Link>
                <UserProfile user={user} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function UserProfile({ user }: { user: User }) {
  console.log(user?.role);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUser className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/settings">
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          {user && user.role === "ADMIN" && (
            <DropdownMenuItem>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ redirect: true, callbackUrl: "/signin" })}
          className="cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span className="cursor-pointer">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);

  let user = null;
  if (session?.user) {
    user = session.user;
  }

  return {
    props: {
      user,
    },
  };
};
