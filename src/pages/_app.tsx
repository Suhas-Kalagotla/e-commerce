import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar" ; 

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const showSidebar = router.pathname ==="/dashboard"; 
  const showNavbar = !showSidebar; 
  return (
      <>
      <div className="flex h-screen overflow-hidden">
      <SessionProvider session={session}>
      {router.pathname !== "/signin" && router.pathname !== "/signup" ? (
          <>
          {showSidebar && <Sidebar />}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">

          {showNavbar && <Navbar />}
          <main className="p-0 md:p-0">
          <Component {...pageProps} />
          </main>
          </div>
          </>        
      ):(
      <Component {...pageProps} />
      )}
      </SessionProvider>
      </div>
      </>
  );
}

