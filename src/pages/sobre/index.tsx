import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Sobre() {
	return (
		<m.div
			variants={basicFade}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="Main_Sobre"
			key="Sobre"
		>
			<h1 className="Main_Title">Página que conta Sobre Nós</h1>
		</m.div>
	);
}
