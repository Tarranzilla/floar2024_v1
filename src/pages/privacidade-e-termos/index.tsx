import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Privacidade_e_Termos() {
	return (
		<m.div
			variants={basicFade}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="Main_Privacidade_e_Termos"
			key={"Privacidade_e_Termos"}
		>
			<h1 className="Main_Title">Privacidade e Termos</h1>
		</m.div>
	);
}
