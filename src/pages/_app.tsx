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

export default function App({ Component, pageProps, session }: MyAppProps) {
    const router = useRouter();

    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <AnimatePresence mode="popLayout">
                    <Navbar key={"Navbar_Master"} />
                    <main className="Content_Viewer" key="Main_Content_Viewer">
                        <Cookies key={"Cookies_Master"} />
                        <Pesquisa key={"Pesquisa_Master"} />
                        <Menu key={"Menu_Master"} />
                        <Detalhe_Imagem key={"Detalhe_Master"} />
                        <Carrinho key={"Carrinho_Master"} />
                        <Component {...pageProps} key={router.pathname} />
                    </main>
                    <Footer key={"Footer_Master"} />
                </AnimatePresence>
            </Provider>
        </SessionProvider>
    );
}
