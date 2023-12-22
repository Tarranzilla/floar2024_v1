import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
config.autoAddCss = false;

import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface MyAppProps extends AppProps {
    session: Session;
}

import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Menu from "@/components/Menu";

import Carrinho from "@/components/Carrinho";
import Cookies from "@/components/Cookies";
import Detalhe_Imagem from "@/components/Detalhe_Imagem";
import Pesquisa from "@/components/Pesquisa";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

function ConditionalComponents() {
    const { openElement } = useSelector((state: RootState) => state.userInterface);
    const isSearchOpen = openElement === "search";
    const isCookieOpen = openElement === "cookie";
    const isCartOpen = openElement === "cart";
    const isMenuOpen = openElement === "menu";

    return (
        <>
            <AnimatePresence mode="wait">
                {isCookieOpen && <Cookies key={"Cookies_Master"} />}
                {isSearchOpen && <Pesquisa key={"Pesquisa_Master"} />}
                {isMenuOpen && <Menu key={"Menu_Master"} />}
                {isCartOpen && <Carrinho key={"Carrinho_Master"} />}
            </AnimatePresence>
        </>
    );
}

export default function App({ Component, pageProps, session }: MyAppProps) {
    const router = useRouter();
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <AnimatePresence mode="sync">
                    <Navbar key={"Navbar_Master"} />
                    <m.main
                        variants={basicFade}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="Content_Viewer"
                        key="Main_Content_Viewer"
                    >
                        <ConditionalComponents />
                        <AnimatePresence mode="wait">
                            <Component {...pageProps} key={router.pathname} />
                        </AnimatePresence>
                    </m.main>
                    <Footer key={"Footer_Master"} />
                </AnimatePresence>
            </Provider>
        </SessionProvider>
    );
}
