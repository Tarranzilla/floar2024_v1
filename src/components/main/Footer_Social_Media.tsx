import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const phoneNumber = "5541999977955";
const email = "floar@gmail.com";
const facebook = "https://www.facebook.com/floar";
const instagram = "https://www.instagram.com/floar";
const address = "Rua das Flores, 123 - Florianópolis-SC";

export default function Footer_Social_Media() {
    return (
        <ul className="Footer_Social_Media">
            <li className="Social_Media_Container">
                <a
                    className="Social_Media_Link Icon"
                    href={`https://wa.me/${phoneNumber}`}
                    title="Entre em contato pelo Whatsapp!"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="Icon_Label Origin_Right">Whatsapp</p>
                    <FontAwesomeIcon icon={faWhatsapp} className="FA_Icons" />
                </a>
            </li>
            <li className="Social_Media_Container">
                <a className="Social_Media_Link Icon" href={instagram} title="Visite nossa página do Instragram!" target="_blank" rel="noreferrer">
                    <p className="Icon_Label Origin_Right">Instagram</p>
                    <FontAwesomeIcon icon={faInstagram} className="FA_Icons" />
                </a>
            </li>
            <li className="Social_Media_Container">
                <a className="Social_Media_Link Icon" href={facebook} title="Visite nossa página do Facebook!" target="_blank" rel="noreferrer">
                    <p className="Icon_Label Origin_Right">Facebook</p>
                    <FontAwesomeIcon icon={faFacebook} className="FA_Icons" />
                </a>
            </li>
        </ul>
    );
}
