import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import  {Slider,Footer,Shopping} from  "@/components"
import { getSession, useSession } from "next-auth/react";

export default function Home(){
    return (
        <>
        <Head> 
        </Head>
        <main> 
            <Slider/>
            <Shopping/>
            <Footer/>
        </main>
        </>
    ) 
}

export const getServerSideProps: GetServerSideProps = async (req:any) => {
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

