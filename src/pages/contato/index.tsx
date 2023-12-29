import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";
import { useState } from "react";
import Head from "next/head";

const mapsAPIKey = process.env.GOOGLE_MAPS_API_KEY;
const phoneNumber = "5541999977955";

const redirectToWhatsApp = () => {
    const phoneNumber = "+5541999977955"; // Replace with the actual phone number
    const message = `Olá Joice!`; // Replace with the actual message
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
};

const redirectToWhatsApp2 = () => {
    const phoneNumber = "+5541999977955"; // Replace with the actual phone number
    const message = `Olá Joice tudo bem? Eu gostaria de agendar uma visita!`; // Replace with the actual message
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
};
export default function Contato() {
    const [mapError, setMapError] = useState(false);

    const handleMapError = () => {
        setMapError(true);
    };

    return (
        <>
            <Head>
                <title>Atelier Floar | Contato</title>
                <meta name="description" content="Entre em contato com a Joice Fregapane, criadora do Atelier Floar." />
            </Head>

            <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Contato" key="Contato">
                {mapError ? (
                    <div className="Contato_Map Error">Erro ao carregar o mapa 😢</div>
                ) : (
                    <iframe
                        className="Contato_Map"
                        width="420"
                        height="420"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${mapsAPIKey}&q=RuaLaurindoJanuario,2340,Florianopolis,Brasil&zoom=15`}
                        allowFullScreen
                        onError={handleMapError}
                    ></iframe>
                )}

                <div className="Contato_Text_Content">
                    <h1 className="Main_Title">Fale com a Joice</h1>
                    <p>
                        Sinta-se a vontade para entrar em contato, estou à disposição para atender a pedidos, sanar dúvidas e desenvolver novas
                        parcerias!
                    </p>
                    <p className="Dark_Pill" title="Envie um e-mail">
                        atelierfloar@gmail.com
                    </p>
                    <a className="Dark_Pill clickable" onClick={redirectToWhatsApp} title="Fale com a Joice diretamente pelo WhatsApp">
                        +55 48 996 467 848
                    </a>
                    <p className="Dark_Pill">Rua Laurindo Januário nº 2340 - Florianópolis</p>
                    <p className="Dark_Pill clickable" onClick={redirectToWhatsApp2} title="Agende uma visita pelo WhatsApp">
                        Agende uma Visita!
                    </p>
                </div>
            </m.div>
        </>
    );
}
