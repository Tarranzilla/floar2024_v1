import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

export default function Menu() {
	const dispatch = useDispatch();
	const { isMenuOpen } = useSelector((state: RootState) => state.userInterface);

	const handleMenuToggle = () => {
		dispatch(toggleMenu());
	};

	return (
		<>
			{isMenuOpen && (
				<m.div
					variants={basicFade}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className="Menu"
					key="Menu"
				>
					<div className="Menu__overlay">
						<h2 className="Menu_Title">Menu do Site</h2>
					</div>

					<button className="Btn" onClick={handleMenuToggle}>
						Fechar Menu
					</button>
				</m.div>
			)}
		</>
	);
}
