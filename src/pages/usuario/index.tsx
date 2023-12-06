import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useState } from "react";

import UserTab from "@/components/user/UserTab";

export default function Usuario() {
    return (
        <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Main_Usuario" key={"Usuario"}>
            <h1 className="Main_Title">Perfil do Cliente</h1>
            <UserTab />
        </m.div>
    );
}
