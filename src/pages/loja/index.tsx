import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Link from "next/link";

import { getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful"; // Import the function
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";

import Product_Card from "@/components/shop/Product_Card";

import RoupaFloar from "@/types/RoupaFloar";

interface LojaProps {
    roupaFloar: RoupaFloar[];
}

export default function Loja({ roupaFloar }: LojaProps) {
    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Loja" key="Loja">
            {/* Map over roupaFloar and display each item */}
            {roupaFloar.map((item) => (
                <Product_Card item={item} key={item.sys.id} />
            ))}
        </m.div>
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

/*

                    <div className="Product_Card_Image_Container">
                        {item.fields.images.map((image) => (
                            <img src={image.fields.file.url} alt="" />
                        ))}
                    </div>

*/
