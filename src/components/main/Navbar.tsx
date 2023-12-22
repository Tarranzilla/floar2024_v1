import Image from "next/image";
import Link from "next/link";

import { forwardRef } from "react";

import Main_Nav_Links from "./Main_Nav_Links";
import Main_Nav_Tools from "./Main_Nav_Tools";

const Navbar = forwardRef((props, ref) => {
    return (
        <nav className="Navbar" key="Navbar">
            <Link className="Nav_Logo" href="/#" title="Voltar ao topo">
                <Image className="Nav_Logo_Img" src="/idv/marca/LogoTipo_Floar_Bordo_Final.png" alt="Floar Logo" width={58} height={72} priority />

                {/*<div className="Nav_Logo_Text">
                    <h1 className="Nav_Logo_Title">Atelier Floar</h1>
                    <h2 className="Nav_Logo_Subtitle">Roupas Fluidas e Atemporais</h2>
                </div>*/}
            </Link>
            <Main_Nav_Links variant="desktop" />
            <Main_Nav_Tools variant="desktop" />
        </nav>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;
