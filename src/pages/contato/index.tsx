import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Contato() {
	return (
		<m.div
			variants={basicFade}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="Main_Contato"
			key="Contato"
		>
			<h1 className="Main_Title">Pagina de Contato</h1>
		</m.div>
	);
}
