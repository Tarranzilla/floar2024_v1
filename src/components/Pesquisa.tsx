import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

export default function Pesquisa() {
	const dispatch = useDispatch();
	const { isSearchOpen } = useSelector((state: RootState) => state.userInterface);

	const handleSearchToggle = () => {
		dispatch(toggleSearch());
	};

	return (
		<>
			{isSearchOpen && (
				<m.div
					variants={basicFade}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className="Menu"
					key="Pesquisa"
				>
					<div className="Menu__overlay">
						<h2 className="Menu_Title">Aba de Pesquisa</h2>
					</div>

					<button className="Btn" onClick={handleSearchToggle}>
						Fechar Aba de Pesquisa
					</button>
				</m.div>
			)}
		</>
	);
}
