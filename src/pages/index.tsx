import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { basicFade } from "@/lib/animations";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const phoneNumber = "5541999977955";

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
                <Image className="Image_Home" src="/idv/marca/Marca_Floar_Preto.png" alt="Floar Logo" width={420} height={420} priority />
                <div className="Home_Content_Wrapper">
                    <h2 className="Home_Welcome">Boas Vindas ao Atelier Floar!</h2>
                    <p>Somos um Atelier de Moda Autoral, Independente e Sustentável.</p>
                    <p>
                        <Link className="Inline_Link" href={"/sobre"}>
                            Clique Aqui
                        </Link>{" "}
                        para saber mais sobre nossa história.
                    </p>
                    <p className="Home_Text">
                        Todas as nossas roupas são confecionadas sob demanda e terão suas medidas feitas especialmente para você!
                    </p>
                    <h3 className="Home_Question">Como eu encomendo uma roupa?</h3>
                    <div className="Home_Choice_Container">
                        <div className="Home_Choice">
                            <p>
                                <strong>Encomende peças exclusivas e feitas sob medida diretamente com a Joice!</strong>
                            </p>
                            <p>Descreva a idéia básica da roupa que você imagina e criaremos conjuntamente uma peça única!</p>
                            <Link className="Dark_Pill Home_Btn" href={`https://wa.me/${phoneNumber}`}>
                                <ContentCutIcon className="Home_Btn_Icon" />
                                Encomenda Especial
                            </Link>
                        </div>
                        <div className="Home_Choice">
                            <p>
                                <strong>Acesse a Loja Online e conheça nossas coleções de peças existentes!</strong>
                            </p>
                            <p>Escolha a que mais lhe interessa e caso deseje mais de uma peça - finalize o pedido no carrinho!</p>
                            <Link className="Dark_Pill Home_Btn" href="/loja">
                                <CheckroomIcon className="Home_Btn_Icon" />
                                Acessar a Loja
                            </Link>
                        </div>
                    </div>
                </div>
            </m.div>
        </>
    );
}
