import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import  Slider from  "@/components/Carousel/slider.tsx"

export default function Home(){
    return (
        <>
        <Head> 
        </Head>
        <main> 
            <Slider/>
        </main>
        </>
    ) 
}


