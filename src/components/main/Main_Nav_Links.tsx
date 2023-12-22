import Link from "next/link";
import { useRouter } from "next/router";
import { closeElement } from "@/store/slices/uiSlice";
import { useDispatch } from "react-redux";

export default function Main_Nav_Links({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
    const dispatch = useDispatch();
    const { pathname } = useRouter();
    const isInicioOpen = pathname === "/";
    const isLojaOpen = pathname === "/loja";
    const isSobreOpen = pathname === "/sobre";
    const isContatoOpen = pathname === "/contato";
    const isBlogOpen = pathname === "/blog";

    const handleCloseOverlay = () => {
        dispatch(closeElement());
    };

    return (
        <ul className="Main_Nav_Links">
            <li className="Nav_Link_Container">
                <Link
                    className={isInicioOpen ? "Nav_Link active" : "Nav_Link"}
                    onClick={handleCloseOverlay}
                    href="/"
                    title="Ir para a página de Início"
                >
                    Início
                </Link>
            </li>
            <li className="Nav_Link_Container">
                <Link
                    className={isLojaOpen ? "Nav_Link active" : "Nav_Link"}
                    onClick={handleCloseOverlay}
                    href="/loja"
                    title="Ir para a página da Loja"
                >
                    Loja
                </Link>
            </li>
            <li className="Nav_Link_Container">
                <Link
                    className={isSobreOpen ? "Nav_Link active" : "Nav_Link"}
                    onClick={handleCloseOverlay}
                    href="/sobre"
                    title="Ir para a página de Sobre"
                >
                    Sobre
                </Link>
            </li>
            <li className="Nav_Link_Container">
                <Link
                    className={isContatoOpen ? "Nav_Link active" : "Nav_Link"}
                    onClick={handleCloseOverlay}
                    href="/contato"
                    title="Ir para a página de Contato"
                >
                    Contato
                </Link>
            </li>
            <li className="Nav_Link_Container">
                <Link
                    className={isBlogOpen ? "Nav_Link active" : "Nav_Link"}
                    onClick={handleCloseOverlay}
                    href="/blog"
                    title="Ir para a página do Blog"
                >
                    Blog
                </Link>
            </li>
        </ul>
    );
}
