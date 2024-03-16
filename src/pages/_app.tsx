import Navbar from "@/components/Layout/Navbar";

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
  return (
      <>
            <Navbar/>
              <main className=" p-4 md:p-6 bg-gray-300">
                  <Component {...pageProps} />
              </main>
      </>
  );
}

