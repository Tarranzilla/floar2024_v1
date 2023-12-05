import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import RoupaFloar from "@/types/RoupaFloar";
import Link from "next/link";
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";
import CTFL_RichText from "@/components/contentful/CTFL_RichText";

import { useState } from "react";

const Product_Detail = ({ item }: { item: RoupaFloar }) => {
    const [imageFocus, setImageFocus] = useState(true);

    const handleImageFocus = () => {
        setImageFocus(!imageFocus);
    };

    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" key={item.fields.slug} className="Product_Card">
            {imageFocus && (
                <>
                    <h2 className="Product_Card_Title">{item.fields.name}</h2>
                    <div className="Product_Card_Content">
                        <p className="Product_Card_Intro Desktop_Only">{item.fields.intro}</p>
                    </div>
                </>
            )}

            <button className="Btn Product_Card_Visibility_Btn" onClick={handleImageFocus}>
                {imageFocus ? (
                    <span className="material-symbols-outlined">visibility_off</span>
                ) : (
                    <span className="material-symbols-outlined">visibility</span>
                )}
            </button>

            {imageFocus && (
                <>
                    <m.h3 variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Product_Card_Price">
                        R$<span className="priceTag">{item.fields.price},00</span>
                    </m.h3>
                    <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Product_Card_Footer">
                        <button className="Btn">Comprar Agora</button>
                        <button className="Btn">Adicionar ao Carrinho</button>
                        <Link className="Btn" href={"/loja"}>
                            Voltar para Loja
                        </Link>
                    </m.div>
                </>
            )}
            <div className="Product_Card_Image_Container">
                {imageFocus && (
                    <m.div
                        variants={basicFade}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="Image_Container_Gradient Top_Gradient"
                    ></m.div>
                )}
                <CTFL_Img_Loader
                    src={item.fields.images[0].fields.file.url}
                    alt={item.fields.images[0].fields.description}
                    width={1600}
                    height={800}
                />
            </div>
        </m.div>
    );
};

export default Product_Detail;
