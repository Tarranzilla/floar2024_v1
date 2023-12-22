import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import Product_Cart_Item from "./shop/Product_Cart_Item";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";

export default function Carrinho() {
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(toggleElement("cart"));
    };

    const cartItems = useSelector((state: RootState) => state.cart.cart.products);
    const cartTotal = useSelector((state: RootState) => state.cart.cart.total);

    const redirectToWhatsApp = () => {
        if (cartItems.length === 0) return;
        const phoneNumber = "+5541999977955"; // Replace with the actual phone number
        const productLines = cartItems.map((item) => `${item.fields.name} - Quantidade: ${item.quantity}`).join("\n");
        const message = `Olá Joice! Tenho interesse em comprar:\n${productLines}\nSubtotal: ${cartTotal}`; // Replace with the actual message
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    return (
        <>
            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu Carrinho" key="Carrinho">
                <div className="Carrinho_Layout">
                    <div className="Carrinho_Header">
                        <h2 className="Carrinho_Title">Carrinho</h2>
                        <button className="Btn Round" onClick={handleCartToggle}>
                            <CancelIcon />
                        </button>
                    </div>

                    {cartItems.length === 0 && (
                        <div className="Carrinho_Empty">
                            <p>Seu carrinho está vazio no momento...</p>
                            <p>Que tal adicionar alguns itens da nossa Loja? 😊</p>
                        </div>
                    )}

                    {cartItems.length > 0 && (
                        <ul className="Carrinho_List">
                            {cartItems.map((item, index) => (
                                <Product_Cart_Item key={index} item={item} />
                            ))}
                        </ul>
                    )}
                    <div className="Carrinho_Total_Price_Container">
                        <p>Valor Total:</p>
                        <h3>{cartTotal + ",00"}</h3>
                    </div>

                    <button className="Btn" onClick={redirectToWhatsApp}>
                        Finalizar Pedido
                    </button>

                    {cartItems.length === 0 && (
                        <p className="Dark_Pill Checkout_Waring">Adicione algum item ao carrinho para poder finalizar o pedido!</p>
                    )}
                </div>
            </m.div>
        </>
    );
}
