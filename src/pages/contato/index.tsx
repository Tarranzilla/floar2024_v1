import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Contato() {
    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Contato" key="Contato">
            <iframe
                className="Contato_Map"
                width="420"
                height="420"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAq8gx1mbenjZlhA9oqRMfQGunNyYSt_JM&q=Florianopolis,Brasil&zoom=15"
                allowFullScreen
            ></iframe>

            <div className="Contato_Text_Content">
                <h1 className="Main_Title">Fale com a Joice</h1>
                <p>
                    Sinta-se a vontade para entrar em contato, estou à disposição para atender a pedidos, sanar dúvidas e desenvolver novas parcerias!
                </p>
                <p className="Dark_Pill">atelierfloar@gmail.com</p>
                <p className="Dark_Pill">+55 48 999 999 999</p>
                <p className="Dark_Pill">Rua das Flores nº666 - Florianópolis</p>
            </div>
        </m.div>
    );
}