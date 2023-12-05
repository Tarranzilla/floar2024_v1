import Link from "next/link";

export default function Footer_PrivacyAndTerms() {
    return (
        <ul className="Footer_PrivacyAndTerms">
        <li className="Social_Media_Container">
            <Link className="Social_Media_Link Icon" href="/privacidade-e-termos">
                <span className="material-symbols-outlined Google_Material_Icons">privacy_tip</span>
                <p className="Icon_Label">Privacidade</p>
            </Link>
        </li>
        <li className="Social_Media_Container">
            <Link className="Social_Media_Link Icon" href="/privacidade-e-termos">
                <span className="material-symbols-outlined Google_Material_Icons">assignment</span>
                <p className="Icon_Label">Termos de Uso</p>
            </Link>
        </li>
    </ul>
    )
}