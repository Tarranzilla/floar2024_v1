import Image from "next/image";
import Link from "next/link";

import { forwardRef } from "react";

import Main_Nav_Links from "./Main_Nav_Links";
import Main_Nav_Tools from "./Main_Nav_Tools";

import MenuBookIcon from "@mui/icons-material/MenuBook";

import { toggleElement } from "@/store/slices/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { openElement } = useSelector((state: RootState) => state.userInterface);

    const isMenuOpen = openElement === "menu";

    const handleMenuToggle = () => {
        dispatch(toggleElement("menu"));
    };

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
            <div className="Menu_Btn_Container Mobile_Only">
                <a className={"Nav_Tool Menu_Btn Icon" + (isMenuOpen ? " active " : "")} href="#menu" title="Abrir o Menu" onClick={handleMenuToggle}>
                    <p className="Icon_Label Origin_Right">Menu</p>
                    <MenuBookIcon />
                </a>
            </div>
        </nav>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;
