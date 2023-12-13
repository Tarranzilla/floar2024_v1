import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Head from "next/head";

export default function Termos_de_Uso() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Termos de Uso</title>
                <meta name="description" content="Termos de Uso do Website." />
            </Head>

            <m.div
                variants={basicFade}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="Main_Privacidade_e_Termos"
                key={"Privacidade_e_Termos"}
            >
                <h1 className="Main_Title">Termos de Uso</h1>
                <p>
                    <strong>1. Aceitação dos Termos:</strong> Ao acessar e utilizar o website Atelier Floar, você concorda com os seguintes termos e
                    condições.
                </p>
                <p>
                    <strong>2. Uso do Conteúdo:</strong> Todo o conteúdo exibido no site, incluindo textos, imagens e designs, são propriedade do
                    Atelier Floar. O uso não autorizado do conteúdo pode violar direitos autorais e outras leis.
                </p>
                <p>
                    <strong>3. Loja Online:</strong> A página da loja destina-se a fornecer informações sobre produtos disponíveis para compra. Ao
                    efetuar uma compra, o usuário concorda em fornecer informações precisas e atualizadas.
                </p>
                <p>
                    <strong>4. Contato:</strong> A página de contato contém informações para se comunicar conosco. As mensagens enviadas através do
                    formulário de contato serão tratadas com confidencialidade.
                </p>
                <p>
                    <strong>5. Página da Criadora:</strong> A página sobre a criadora do conteúdo fornece informações sobre a pessoa por trás do
                    Atelier Floar. As informações pessoais serão tratadas com respeito e não serão compartilhadas sem consentimento.
                </p>
                <p>
                    <strong>6. Blog (em construção):</strong> A futura página do blog será dedicada a compartilhar conteúdo relacionado ao Atelier
                    Floar. Os usuários serão informados quando o blog estiver disponível.
                </p>
            </m.div>
        </>
    );
}
