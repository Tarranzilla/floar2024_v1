import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, toggleCart, toggleSearch } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import { useRouter } from "next/router";

export default function Main_Nav_Tools({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
    const { pathname } = useRouter();
    const isUserOpen = pathname === "/usuario";
    const isStoreOpen = pathname === "/loja";

    const dispatch = useDispatch();
    const { isMenuOpen, isCartOpen, isSearchOpen } = useSelector((state: RootState) => state.userInterface);

    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    };

    const handleCartToggle = () => {
        dispatch(toggleCart());
    };

    const handleSearchToggle = () => {
        dispatch(toggleSearch());
    };

    return (
        <ul className={"Main_Nav_Tools " + (variant === "desktop" ? "Desktop_Nav_Tools" : "Mobile_Nav_Tools")}>
            <li className="Menu_Btn_Container">
                <a className={"Nav_Tool Menu_Btn Icon" + (isMenuOpen ? " active " : "")} href="#menu" title="Abrir o Menu" onClick={handleMenuToggle}>
                    <p className="Icon_Label Origin_Right">Menu</p>
                    <span className="material-symbols-outlined">menu_book</span>
                </a>
            </li>

            <li className="Nav_Tool_Container">
                <Link className={"Nav_Tool Menu_Btn Icon" + (isUserOpen ? " active " : "")} href="/usuario" title="Abrir a Aba de Usuário">
                    <p className="Icon_Label Origin_Right">Usuário</p>
                    <span className="material-symbols-outlined">account_circle</span>
                </Link>
            </li>

            <li className="Nav_Tool_Container">
                <a
                    className={"Nav_Tool Menu_Btn Icon" + (isSearchOpen ? " active " : "")}
                    href="#"
                    title="Abrir a Aba de Pesquisa"
                    onClick={handleSearchToggle}
                >
                    <p className="Icon_Label Origin_Right">Busca</p>
                    <span className="material-symbols-outlined">search</span>
                </a>
            </li>

            <li className="Nav_Tool_Container">
                <a
                    className={"Nav_Tool Menu_Btn Icon" + (isCartOpen ? " active " : "")}
                    href="#"
                    title="Abrir o Carrinho de Compras"
                    onClick={handleCartToggle}
                >
                    <p className="Icon_Label Origin_Right">Carrinho</p>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </a>
            </li>

            <li className="Nav_Tool_Container">
                <Link className={"Nav_Tool Menu_Btn Icon" + (isStoreOpen ? " active " : "")} href="/loja" title="Abrir a Página da Loja">
                    <p className="Icon_Label Origin_Right">Loja</p>
                    <span className="material-symbols-outlined">storefront</span>
                </Link>
            </li>
        </ul>
    );
}
