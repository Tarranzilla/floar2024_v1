import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { basicFade } from "@/lib/animations";

export default function Home() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Início</title>
                <meta name="description" content="Moda Fluida e Atemporal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.div className="Main_Home" variants={basicFade} initial="hidden" animate="visible" exit="hidden">
                <Image className="Image_Home" src="/idv/marca/Marca_Floar_Preto.png" alt="Floar Logo" width={420} height={420} priority />
            </m.div>
        </>
    );
}
