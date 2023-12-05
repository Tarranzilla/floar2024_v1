import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWhatsapp,
	faFacebook,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer_Social_Media() {
    return (
        <ul className="Footer_Social_Media">
				<li className="Social_Media_Container">
					<a
						className="Social_Media_Link Icon"
						href="#"
						title="Entre em contato pelo Whatsapp!"
					>
                        <p className="Icon_Label Origin_Right">Whatsapp</p>
						<FontAwesomeIcon icon={faWhatsapp} className="FA_Icons"/>
					</a>
				</li>
				<li className="Social_Media_Container">
					<a
						className="Social_Media_Link Icon"
						href="#"
						title="Visite nossa página do Instragram!"
					>
                        <p className="Icon_Label Origin_Right">Instagram</p>
						<FontAwesomeIcon icon={faInstagram} className="FA_Icons"/>
					</a>
				</li>
				<li className="Social_Media_Container">
					<a
						className="Social_Media_Link Icon"
						href="#"
						title="Visite nossa página do Facebook!"
					>
                        <p className="Icon_Label Origin_Right">Facebook</p>
						<FontAwesomeIcon icon={faFacebook} className="FA_Icons" />
					</a>
				</li>
			</ul>
    )
}