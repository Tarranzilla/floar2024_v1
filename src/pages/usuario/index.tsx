import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useState } from "react";

import SignInButton from "@/components/user/SingInButton";

export default function Usuario() {
    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Usuario" key={"Usuario"}>
            <h1 className="Main_Title">Página do Usuário</h1>
            <SignInButton />
        </m.div>
    );
}
