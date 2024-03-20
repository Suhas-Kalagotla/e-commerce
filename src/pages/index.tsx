import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import  {Slider,Footer} from  "@/components"

export default function Home(){
    return (
        <>
        <Head> 
        </Head>
        <main> 
            <Slider/>
            <Footer/>
        </main>
        </>
    ) 
}


