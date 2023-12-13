import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import Head from "next/head";

export default function Politicas_de_Privacidade() {
    return (
        <>
            <Head>
                <title>Atelier Floar | Políticas de Privacidade</title>
                <meta name="description" content="Políticas de Privacidade do Website." />
            </Head>

            <m.div
                variants={basicFade}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="Main_Privacidade_e_Termos"
                key={"Privacidade_e_Termos"}
            >
                <h1 className="Main_Title">Políticas de Privacidade</h1>
                <div className="privacidade">
                    <p>
                        <strong>1. Informações Coletadas:</strong> O Atelier Floar pode coletar informações pessoais, como nome, e-mail e endereço,
                        apenas com o consentimento do usuário.
                    </p>
                    <p>
                        <strong>2. Uso das Informações:</strong> As informações coletadas serão utilizadas para processar pedidos, responder a
                        mensagens e melhorar a experiência do usuário no site.
                    </p>
                    <p>
                        <strong>3. Cookies:</strong> O site pode utilizar cookies para melhorar a experiência do usuário. Os usuários podem controlar
                        o uso de cookies nas configurações do navegador.
                    </p>
                    <p>
                        <strong>4. Segurança:</strong> Medidas de segurança serão implementadas para proteger as informações pessoais dos usuários.
                    </p>
                    <p>
                        <strong>5. Compartilhamento de Informações:</strong> As informações pessoais dos usuários não serão compartilhadas com
                        terceiros sem consentimento, exceto quando exigido por lei.
                    </p>
                </div>
            </m.div>
        </>
    );
}
