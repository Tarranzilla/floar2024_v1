import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Link from "next/link";

export default function Menu() {
    const dispatch = useDispatch();
    const { isMenuOpen } = useSelector((state: RootState) => state.userInterface);

    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <>
            {isMenuOpen && (
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu" key="Menu">
                    <div className="Menu__overlay">
                        <h2 className="Menu_Title">Menu do Site</h2>
                    </div>

                    <div className="Menu_List">
                        <Link className="Menu_Link Btn" href="/" onClick={handleMenuToggle}>
                            Início
                        </Link>
                        <Link className="Menu_Link Btn" href="/loja" onClick={handleMenuToggle}>
                            Loja
                        </Link>
                        <Link className="Menu_Link Btn" href="/sobre" onClick={handleMenuToggle}>
                            Sobre
                        </Link>
                        <Link className="Menu_Link Btn" href="/contato" onClick={handleMenuToggle}>
                            Contato
                        </Link>
                    </div>

                    <button className="Btn" onClick={handleMenuToggle}>
                        Fechar Menu
                    </button>
                </m.div>
            )}
        </>
    );
}
