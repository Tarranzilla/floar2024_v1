import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Image from "next/image";
import Head from "next/head";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Sobre</title>
                <meta name="description" content="Sobre o Atelier e sua Criadora" />
            </Head>
            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Sobre" key="Sobre">
                <Image
                    src="/Joice/Joice_3.jpg"
                    alt="Joice Fregapane, Designer e Artista"
                    width={420}
                    height={840}
                    className="Sobre_Image Joice_Image"
                />

                <div className="Sobre_Text_Content">
                    <h1 className="Main_Title Sobre_Main_Title">Sobre a Joice e seu Atelier</h1>
                    <p className="Sobre_Paragrafo">Oi, eu sou a Joice!</p>
                    <p className="Sobre_Paragrafo">
                        Minha paixão por criar é o que me move desde sempre, e agora tenho o prazer de apresentar a você o Ateliê Floar!
                    </p>
                    <p className="Sobre_Paragrafo">
                        Viver em meio a uma natureza exuberante me inspira todos os dias a criar e vestir roupas mais leves e confortáveis, que são ao
                        mesmo tempo elegantes e versáteis, para que você se sinta livre em qualquer ocasião.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Todo o processo é feito por mim com muito carinho. Os tecidos, geralmente de malha, são selecionados a partir do descarte de
                        outras marcas, e as peças muitas vezes surgem do formato dos retalhos e das particularidades dos tecidos. Por isso, são
                        exclusivas, únicas e produzidas em quantidade limitada.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Pensando em um descarte responsável, criei o Brechó Floar, onde você pode dar um destino adequado para aquelas roupas Floar
                        que não servem mais, seja pelo tamanho ou por não representarem mais você. Ao doar uma peça Floar em boas condições, você
                        ganha 50% de desconto em uma nova peça Floar de sua escolha.
                    </p>
                    <p className="Sobre_Paragrafo">O valor arrecadado com o Brechó será destinado a causas sociais regionais.</p>
                    <p className="Sobre_Paragrafo">
                        Além das roupas, a Floar oferece também bolsters para Yoga e almofadas de meditação, preenchidos com restos de tecidos que
                        seriam descartados.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Vestir é um ato político, uma maneira de você se expressar no mundo, portanto lembre-se sempre de comprar somente o que você
                        realmente precisa. Busque conhecer o ciclo de produção do que você consome e não esqueça de incentivar a produção local,
                        autoral e independente.
                    </p>
                    <p className="Sobre_Paragrafo">Preços especiais estão disponíveis para estudantes e artistas.</p>
                    <p className="Sobre_Paragrafo">Obrigada por escolher a Floar</p>
                    <p className="Sobre_Paragrafo">Eu me divirto fazendo e espero que você se divirta usando!</p>
                </div>
            </m.div>
        </>
    );
}
