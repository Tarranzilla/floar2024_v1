import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Politicas_de_Privacidade() {
    return (
        <m.div
            variants={basicFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="Main_Privacidade_e_Termos"
            key={"Privacidade_e_Termos"}
        >
            <h1 className="Main_Title">Políticas de Privacidade</h1>
        </m.div>
    );
}
