import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import RoupaFloar from "@/types/RoupaFloar";
import Link from "next/link";
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";

import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/store/slices/cartSlice";
import { selectCartItemQuantity } from "@/store/selectors/cartSelectors";

import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

interface ProductCardProps {
    item: RoupaFloar;
}

const Product_Card = ({ item }: ProductCardProps) => {
    const [imageFocus, setImageFocus] = useState(false);
    const [contentFocus, setContentFocus] = useState(false);

    const handleContentFocus = () => {
        setContentFocus(!contentFocus);
    };

    const handleImageFocus = () => {
        setImageFocus(!imageFocus);
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    const quantity = useSelector((state: RootState) => selectCartItemQuantity(state, item));

    const redirectToWhatsApp = () => {
        const phoneNumber = "+5541999977955"; // Replace with the actual phone number
        const message = `Olá Joice! Tenho interesse em comprar a peça: ${item.fields.name}`; // Replace with the actual message
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    return (
        <m.div
            variants={basicFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={item.fields.slug}
            className={contentFocus ? "Product_Card active" : "Product_Card"}
        >
            {imageFocus && (
                <>
                    <h2 className="Product_Card_Title">{item.fields.name}</h2>
                    <div className="Product_Card_Content">
                        <p className="Product_Card_Intro Desktop_Only">{item.fields.intro}</p>
                    </div>
                </>
            )}

            <button className="Btn Product_Card_Visibility_Btn Full_Screen_Btn Desktop_Only" onClick={handleContentFocus}>
                {contentFocus ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </button>

            <button className="Btn Product_Card_Visibility_Btn" onClick={handleImageFocus}>
                {imageFocus ? <VisibilityIcon /> : <InfoIcon />}
            </button>

            {imageFocus && (
                <>
                    <m.h3 variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Product_Card_Price">
                        R$<span className="priceTag">{item.fields.price},00</span>
                    </m.h3>
                    <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Product_Card_Footer">
                        <button className="Btn" onClick={redirectToWhatsApp}>
                            Comprar Agora
                        </button>
                        <button className="Btn" onClick={handleAddToCart}>
                            Adicionar ao Carrinho {quantity > 0 ? "(" + quantity + ")" : null}
                        </button>
                        <Link className="Btn" href={"loja/produto/" + item.fields.slug}>
                            Ver Detalhes
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
                    width={800}
                    height={400}
                />
            </div>
        </m.div>
    );
};

export default Product_Card;
