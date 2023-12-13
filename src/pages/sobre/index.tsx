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
                    <h1 className="Main_Title">Sobre a Joice e seu Atelier</h1>
                    <p className="Sobre_Paragrafo">
                        Olá! Meu nome é Joice, moro em Florianópolis desde 2007, num lugar encantador que é o Canto da Lagoa em meio a uma natureza
                        exuberante que me inspira muito e é onde eu tenho meu ateliê de costura.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Tenho uma filha, a Sophia, tenho gatos, cachorros, gosto de cantar, dançar, faço yoga, cerâmica e adoro costurar.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Sou feminista, artista e acredito num mundo melhor, com mais respeito às diversidades e mais justiça social.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Aprendi a costurar com minha mãe aos 10 anos de idade. Fiz cursos de modelagem e costura mas onde aprendi mesmo foi convivendo
                        e tendo aulas práticas de alta costura com uma mulher incrível, Dona Nadir, com quem aprendi muito sobre costura e sobre a
                        vida. Desde então segui fazendo roupas para a família e para amigos.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Fiz alguns figurinos para amigos artistas, sempre me divertindo muito e com muito encantamento pela transformação de um
                        simples pedaço de tecido em roupas que fazem com que as pessoas sintam-se bonitas e confortáveis.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Hoje a paixão por costurar fez com que eu criasse a Floar, onde me realizo fazendo roupas com muito cuidado, amor e
                        consciência, entendendo que vestir é um ato político e que as pessoas não usam roupas só para cobrir o corpo ou se protegerem
                        e, sim para expressarem-se de forma livre e autêntica.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Trabalho com tecidos de malha e todo o processo é feito por mim, desde a compra de tecidos, em lojas que vendem descartes da
                        indústria da moda, a criação dos modelos, a execução dos moldes e a confecção das peças.
                    </p>
                    <p className="Sobre_Paragrafo">
                        As roupas são feitas sob demanda mas sempre serão apresentadas como peças únicas que poderão ser adquiridas ou replicadas
                        adequando-se ao tamanho e gosto de cada pessoa dependendo da disponibilidade dos tecidos.
                    </p>
                    <p className="Sobre_Paragrafo">
                        Espero que todos nós, tenhamos mais consciência em relação ao consumo, comprando somente o que é realmente necessário e também
                        espero que o descarte daquilo que não nos serve mais seja feito de modo responsável na tentativa de diminuir os danos à
                        natureza
                    </p>
                    <p className="Sobre_Paragrafo">Me divirto fazendo estas roupas e espero que você também se divirta muito as usando!</p>
                </div>
            </m.div>
        </>
    );
}
