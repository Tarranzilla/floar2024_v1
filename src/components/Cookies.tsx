import { useState } from "react";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import CookieIcon from "@mui/icons-material/Cookie";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

export default function Cookies() {
    const dispatch = useDispatch();

    const handleCookieToggle = () => {
        dispatch(toggleElement("cookie"));
    };

    return (
        <>
            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu Cookies" key="Cookies">
                <div className="Cookies_Container">
                    <CookieIcon className="CookieIcon" />
                    <p>Este site utiliza cookies para oferecer a melhor experiência possível. </p>
                    <p>
                        Ao continuar a navegação, você concorda com o uso de cookies. Para mais informações, consulte nossos{" "}
                        <a href="#termosDeServico">Termos de Serviço</a> e <a href="#politicaDePrivacidade">Política de Privacidade</a>.
                    </p>
                </div>

                <button className="Btn Cookies_Btn" onClick={handleCookieToggle}>
                    Entendi
                    <CloudDoneIcon className="CloudDoneIcon" />
                </button>
            </m.div>
        </>
    );
}
