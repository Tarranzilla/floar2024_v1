import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import SearchIcon from "@mui/icons-material/Search";

export default function Pesquisa() {
    const dispatch = useDispatch();
    const { openElement } = useSelector((state: RootState) => state.userInterface);

    const isSearchOpen = openElement === "search";

    const handleSearchToggle = () => {
        dispatch(toggleElement("search"));
    };

    return (
        <>
            {isSearchOpen && (
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu" key="Pesquisa">
                    <div className="Menu__overlay">
                        <h2 className="Menu_Title">Aba de Pesquisa</h2>
                    </div>

                    <div className="Search_Input_Container Pill">
                        <input type="text" className="Search_Input" placeholder="Digite aqui sua pesquisa..." />
                        <SearchIcon className="Search_Icon" />
                    </div>

                    <button className="Btn" onClick={handleSearchToggle}>
                        Fechar Aba de Pesquisa
                    </button>
                </m.div>
            )}
        </>
    );
}
