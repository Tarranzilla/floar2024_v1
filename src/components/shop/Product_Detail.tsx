import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import RoupaFloar from "@/types/RoupaFloar";
import Link from "next/link";
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";
import CTFL_RichText from "@/components/contentful/CTFL_RichText";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/slices/cartSlice";
import { selectCartItemQuantity } from "@/store/selectors/cartSelectors";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Image_ScrollGrab from "../general/Image_ScrollGrab";
import Image from "next/image";

/*
<div className="Product_Detail_Image_Container"></div>

*/

const Product_Detail = ({ item }: { item: RoupaFloar }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    const redirectToWhatsApp = () => {
        const phoneNumber = "+5541999977955"; // Replace with the actual phone number
        const message = `Olá Joice! Tenho interesse em comprar a peça: ${item.fields.name}`; // Replace with the actual message
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    const quantity = useSelector((state: RootState) => selectCartItemQuantity(state, item));

    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" key={item.fields.slug} className="Product_Card Product_Detail">
            <div className="Product_Detail_Image_Container">
                <Image_ScrollGrab mobileRow={true}>
                    {item.fields.images.map((image, index) => {
                        return (
                            <CTFL_Img_Loader
                                src={image.fields.file.url}
                                key={image.fields.file.url + index}
                                alt={image.fields.description}
                                width={1600}
                                height={800}
                            />
                        );
                    })}
                    {item.fields.images.length === 1 && (
                        <CTFL_Img_Loader
                            src={item.fields.images[0].fields.file.url}
                            alt={item.fields.images[0].fields.description}
                            width={1600}
                            height={800}
                        />
                    )}
                </Image_ScrollGrab>
            </div>

            <div className="Product_Detail_Information">
                <h2 className="Product_Card_Title Title">{item.fields.name}</h2>
                <div className="Product_Card_Content Content">
                    <CTFL_RichText document={item.fields.description} />
                </div>
                <p className="Dark_Pill">Feita sob medida</p>

                <m.h3 variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Dark_Pill">
                    R$<span className="priceTag">{item.fields.price},00</span>
                </m.h3>
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Product_Card_Footer">
                    <a className="Btn Origin_Left" onClick={redirectToWhatsApp} target="_blank" rel="noreferrer">
                        Comprar Agora
                    </a>
                    <button className="Btn Origin_Left" onClick={handleAddToCart}>
                        Adicionar ao Carrinho {quantity > 0 ? "(" + quantity + ")" : null}
                    </button>
                    <Link className="Btn Origin_Left" href={"/loja"}>
                        Voltar para Loja
                    </Link>
                </m.div>
            </div>
        </m.div>
    );
};

export default Product_Detail;
