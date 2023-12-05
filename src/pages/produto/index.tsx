import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Produtos() {
	return (
		<m.div
			variants={basicFade}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="Main_Produtos"
			key={"Produtos"}
		>
			<h1 className="Main_Title">Produtos</h1>
		</m.div>
	);
}
