import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleImageDetail } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

export default function Detalhe_Imagem() {
    const dispatch = useDispatch();
    const { isImageDetailOpen } = useSelector((state: RootState) => state.userInterface);

    const handleImageDetailToggle = () => {
        dispatch(toggleImageDetail());
    };

    return (
        <>
            {isImageDetailOpen && (
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu Detalhe_Imagem" key="Detalhe_Imagem">
                    <div className="Menu__overlay">
                        <h2 className="Menu_Title">Detalhe da Imagem</h2>
                    </div>

                    <button className="Btn" onClick={handleImageDetailToggle}>
                        Fechar Detalhe de Imagem
                    </button>
                </m.div>
            )}
        </>
    );
}
