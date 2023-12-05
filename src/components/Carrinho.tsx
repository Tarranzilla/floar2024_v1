import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

export default function Carrinho() {
    const dispatch = useDispatch();
    const { isCartOpen } = useSelector((state: RootState) => state.userInterface);

    const handleCartToggle = () => {
        dispatch(toggleCart());
    };

    return (
        <>
            {isCartOpen && (
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu Carrinho" key="Carrinho">
                    <div className="Menu__overlay">
                        <h2 className="Menu_Title">Carrinho</h2>
                    </div>

                    <button className="Btn" onClick={handleCartToggle}>
                        Fechar Carrinho
                    </button>
                </m.div>
            )}
        </>
    );
}
