import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Link from "next/link";

export default function Menu() {
    const dispatch = useDispatch();

    const handleMenuToggle = () => {
        dispatch(toggleElement("menu"));
    };

    return (
        <>
            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu" key="Menu">
                <div className="Menu__overlay">
                    <h2 className="Menu_Title">Menu do Site</h2>
                </div>

                <div className="Menu_List">
                    <Link className="Menu_Link Btn" href="/" title="Ir para a Página de Início" onClick={handleMenuToggle}>
                        Início
                    </Link>
                    <Link className="Menu_Link Btn" href="/loja" title="Ir para a Página da Loja" onClick={handleMenuToggle}>
                        Loja
                    </Link>
                    <Link className="Menu_Link Btn" href="/sobre" title="Ir para a Página de Sobre" onClick={handleMenuToggle}>
                        Sobre
                    </Link>
                    <Link className="Menu_Link Btn" href="/contato" title="Ir para a Página de Contato" onClick={handleMenuToggle}>
                        Contato
                    </Link>
                    <Link className="Menu_Link Btn" href="/blog" title="Ir para a Página do Blog" onClick={handleMenuToggle}>
                        Blog
                    </Link>
                    <Link
                        className="Menu_Link Btn"
                        href="/politicas-de-privacidade"
                        title="Ir para a Página de Políticas de Privacidade"
                        onClick={handleMenuToggle}
                    >
                        Políticas de Privacidade
                    </Link>
                    <Link className="Menu_Link Btn" href="/termos-de-uso" title="Ir para a Página de Termos de Uso" onClick={handleMenuToggle}>
                        Termos de Uso
                    </Link>
                </div>

                <button className="Btn" title="Fechar o Menu" onClick={handleMenuToggle}>
                    Fechar Menu
                </button>
            </m.div>
        </>
    );
}
