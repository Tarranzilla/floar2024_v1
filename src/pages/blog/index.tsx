import Link from "next/link";
import Head from "next/head";

import { motion as m } from "framer-motion";

import { basicFade } from "@/lib/animations";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Blog</title>
                <meta name="description" content="Noticias sobre moda sustentável" />
            </Head>

            <m.div className="Main_Blog" variants={basicFade} initial="hidden" animate="visible" exit="hidden" key="Blog">
                <div className="Blog_Construction">
                    <span className="Emoji">🏗️</span> <h1 className="Main_Title">Blog em Construção!</h1>
                    <span className="Emoji Inverted_Emoji">🏗️</span>
                </div>
                <p>Em breve, aqui você terá acesso as notícias mais quentes do universo da moda sustentável.</p>
            </m.div>
        </>
    );
}
