import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import RoupaFloar from "@/types/RoupaFloar";
import Link from "next/link";
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";
import CTFL_RichText from "@/components/contentful/CTFL_RichText";

import { useState } from "react";

const Product_Detail = ({ item }: { item: RoupaFloar }) => {
    const [imageFocus, setImageFocus] = useState(false);

    const handleImageFocus = () => {
        setImageFocus(!imageFocus);
    };

    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" key={item.fields.slug} className="Product_Card Product_Detail">
            <div className="Product_Detail_Image_Container">
                {item.fields.images.map((image, index) => {
                    return (
                        <CTFL_Img_Loader
                            src={image.fields.file.url}
                            key={image.fields.file.url + index}
                            alt={image.fields.description}
                            width={1600}
                            height={800}
                            onClick={handleImageFocus}
                        />
                    );
                })}
            </div>

            {!imageFocus && (
                <div className="Product_Detail_Information">
                    <h2 className="Product_Card_Title Title">{item.fields.name}</h2>
                    <div className="Product_Card_Content Content">
                        <CTFL_RichText document={item.fields.description} />
                    </div>
                    <p className="Dark_Pill">Feita sob medida</p>

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
                </div>
            )}

            {imageFocus && (
                <button className="Btn Product_Card_Visibility_Btn" onClick={handleImageFocus}>
                    {imageFocus ? (
                        <span className="material-symbols-outlined">visibility_off</span>
                    ) : (
                        <span className="material-symbols-outlined">visibility</span>
                    )}
                </button>
            )}
        </m.div>
    );
};

export default Product_Detail;
