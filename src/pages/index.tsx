import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { basicFade } from "@/lib/animations";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const phoneNumber = "5541999977955";

const message = `Olá Joice! Tenho interesse em projetar uma encomenda especial com você!`;
const encodedMessage = encodeURIComponent(message);
const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Início</title>
                <meta name="description" content="Moda Fluida e Atemporal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#fff" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.div className="Main_Home" variants={basicFade} initial="hidden" animate="visible" exit="hidden">
                <Image className="Image_Home" src="/idv/marca/Logo_Floar_Bordo.png" alt="Floar Logo" width={800} height={800} priority />
                <div className="Home_Content_Wrapper">
                    <h2 className="Home_Welcome">Boas Vindas ao Atelier Floar!</h2>
                    <h3 className="Home_Text">Aqui produzimos Moda Autoral, Independente e Sustentável.</h3>
                    <div className="Home_Choice_Container">
                        <div className="Home_Choice">
                            <p className="Home_Choice_Title">
                                <strong>Encomende peças exclusivas e feitas sob medida diretamente com a Joice!</strong>
                            </p>
                            <p>Descreva a idéia básica da roupa que você imagina e criaremos conjuntamente uma peça única!</p>
                            <Link className="Dark_Pill Home_Btn" href={url} target="_blank" rel="noreferrer">
                                <ContentCutIcon className="Home_Btn_Icon" />
                                Encomenda Especial
                            </Link>
                        </div>
                        <div className="Home_Choice">
                            <p className="Home_Choice_Title">
                                <strong>Acesse a Loja Online e conheça nossas coleções de peças existentes!</strong>
                            </p>
                            <p>Escolha a que mais lhe interessa e caso deseje mais de uma peça - finalize o pedido no carrinho!</p>
                            <Link className="Dark_Pill Home_Btn" href="/loja">
                                <StorefrontIcon className="Home_Btn_Icon" />
                                Acesse a Loja
                            </Link>
                        </div>
                    </div>
                    <Link className="Dark_Pill Home_Sobre_Btn" href={"/sobre"}>
                        <HistoryEduIcon className="Home_Btn_Icon" />
                        Saiba mais sobre nossa história!
                    </Link>{" "}
                </div>
            </m.div>
            <Image width={1600} height={800} priority className="Home_Bg_Image" src="/idv/fundos/fundo_floresta_3.jpg" alt="Fundo Floresta" />
        </>
    );
}
