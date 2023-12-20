import { forwardRef } from "react";

import Mobile_Nav_Tools from "./Mobile_Nav_Tools";
import Footer_PrivacyAndTerms from "./Footer_PrivacyAndTerms";
import Footer_Social_Media from "./Footer_Social_Media";

const Footer = forwardRef((props, ref) => {
    return (
        <footer className="Footer" key="Footer">
            <Mobile_Nav_Tools variant="mobile" />
            <Footer_PrivacyAndTerms />
            <p className="Footer_Brand">
                © 2024 Atelier Floar &{" "}
                <a href="https:/www.pragmata.ninja" target="_blank" rel="noreferrer">
                    Pragmata
                </a>
            </p>
            <Footer_Social_Media />
        </footer>
    );
});

Footer.displayName = "Footer";

export default Footer;
