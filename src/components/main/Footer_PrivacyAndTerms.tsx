import Link from "next/link";

import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Footer_PrivacyAndTerms() {
    return (
        <ul className="Footer_PrivacyAndTerms">
            <li className="Social_Media_Container">
                <Link className="Social_Media_Link Icon" href="/politicas-de-privacidade">
                    <PrivacyTipIcon className="Google_Material_Icons" />
                    <p className="Icon_Label">Privacidade</p>
                </Link>
            </li>
            <li className="Social_Media_Container">
                <Link className="Social_Media_Link Icon" href="/termos-de-uso">
                    <AssignmentIcon className="Google_Material_Icons" />
                    <p className="Icon_Label">Termos de Uso</p>
                </Link>
            </li>
        </ul>
    );
}
