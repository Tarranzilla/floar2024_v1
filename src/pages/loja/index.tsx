import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useEffect } from "react";

import Head from "next/head";

import { getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful"; // Import the function

import Product_Card from "@/components/shop/Product_Card";

import RoupaFloar from "@/types/RoupaFloar";
import { SearchResult } from "@/store/slices/searchSlice";
import { setProducts } from "@/store/slices/searchSlice";

import { useDispatch } from "react-redux";

import Image_ScrollGrab from "@/components/general/Image_ScrollGrab";

interface LojaProps {
    roupaFloar: RoupaFloar[];
}

export default function Loja({ roupaFloar }: LojaProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        const SearchProducts: SearchResult[] = roupaFloar.map((item: RoupaFloar) => ({
            id: item.sys.id,
            name: item.fields.name,
            intro: item.fields.intro,
            type: "product",
            class: item.fields.category,
            url: "/loja/produto/" + item.fields.slug,
            icon: item.fields.images[0].fields.file.url,
            results: [],
        }));

        dispatch(setProducts(SearchProducts));
    }, []);

    return (
        <>
            <Head>
                <title>Atelier Floar | Loja</title>
                <meta name="description" content="Todas as Peças Disponíveis | Moda Fluida e Atemporal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className={"Main_Loja"} key="Loja">
                <Image_ScrollGrab mobileRow={false}>
                    {roupaFloar.map((item) => (
                        <Product_Card item={item} key={item.sys.id} />
                    ))}
                </Image_ScrollGrab>
            </m.div>
        </>
    );
}

// This function runs at build time and fetches data from Contentful
export async function getStaticProps() {
    const roupaFloar = await getEntriesByContentTypeAndPreviewMode("roupaFloar");

    return {
        props: {
            roupaFloar, // Pass roupaFloar as a prop to the page
        },
    };
}
