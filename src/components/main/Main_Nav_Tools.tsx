import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import { useRouter } from "next/router";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function Main_Nav_Tools({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
    const { pathname } = useRouter();
    const isUserOpen = pathname === "/usuario";

    const dispatch = useDispatch();
    const { openElement } = useSelector((state: RootState) => state.userInterface);

    const isCartOpen = openElement === "cart";
    const isSearchOpen = openElement === "search";
    const isMenuOpen = openElement === "menu";

    const { products } = useSelector((state: RootState) => state.cart.cart);
    const quantity = products.length;

    const handleMenuToggle = () => {
        dispatch(toggleElement("menu"));
    };

    const handleCartToggle = () => {
        dispatch(toggleElement("cart"));
    };

    const handleSearchToggle = () => {
        dispatch(toggleElement("search"));
    };

    return (
        <ul className={"Main_Nav_Tools " + (variant === "desktop" ? "Desktop_Nav_Tools" : "Mobile_Nav_Tools")}>
            <li className="Nav_Tool_Container">
                <a
                    className={"Nav_Tool Menu_Btn Icon" + (isCartOpen ? " active " : "")}
                    href="#"
                    title="Abrir o Carrinho de Compras"
                    onClick={handleCartToggle}
                >
                    <p className="Icon_Label Origin_Right">Carrinho</p>
                    {quantity > 0 && <span id="Shopping_Cart_Indicator">{quantity}</span>}

                    <ShoppingCartIcon />
                </a>
            </li>

            <li className="Nav_Tool_Container">
                <a
                    className={"Nav_Tool Menu_Btn Icon" + (isSearchOpen ? " active " : "")}
                    href="#"
                    title="Abrir a Aba de Pesquisa"
                    onClick={handleSearchToggle}
                >
                    <p className="Icon_Label Origin_Right">Busca</p>
                    <SearchIcon />
                </a>
            </li>

            <li className="Nav_Tool_Container">
                <Link className={"Nav_Tool Menu_Btn Icon" + (isUserOpen ? " active " : "")} href="/usuario" title="Abrir a Aba de Usuário">
                    <p className="Icon_Label Origin_Right">Usuário</p>
                    <AccountCircleIcon />
                </Link>
            </li>

            <li className="Menu_Btn_Container">
                <a className={"Nav_Tool Menu_Btn Icon" + (isMenuOpen ? " active " : "")} href="#menu" title="Abrir o Menu" onClick={handleMenuToggle}>
                    <p className="Icon_Label Origin_Right">Menu</p>
                    <MenuBookIcon />
                </a>
            </li>
        </ul>
    );
}
