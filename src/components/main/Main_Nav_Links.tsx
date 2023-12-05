import Link from "next/link";
export default function Main_Nav_Links({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
    return (
        <ul className="Main_Nav_Links">
        <li className="Nav_Link_Container">
            <Link
                className="Nav_Link"
                href="/loja"
                title="Ir para a página da Loja"
            >
                Loja
            </Link>
        </li>
        <li className="Nav_Link_Container">
            <Link
                className="Nav_Link"
                href="/sobre"
                title="Ir para a página de Sobre"
            >
                Sobre
            </Link>
        </li>
        <li className="Nav_Link_Container">
            <Link
                className="Nav_Link"
                href="/contato"
                title="Ir para a página de Contato"
            >
                Contato
            </Link>
        </li>
        <li className="Nav_Link_Container">
            <Link
                className="Nav_Link"
                href="/blog"
                title="Ir para a página do Blog"
            >
                Blog
            </Link>
        </li>
    </ul>
    )
}