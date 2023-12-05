import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleCookie } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

export default function Cookies() {
	const dispatch = useDispatch();
	const { isCookieOpen } = useSelector((state: RootState) => state.userInterface);

	const handleCookieToggle = () => {
		dispatch(toggleCookie());
	};

	return (
		<>
			{isCookieOpen && (
				<m.div
					variants={basicFade}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className="Menu Cookies"
					key="Cookies"
				>
					<div className="Menu__overlay">
						<h2 className="Menu_Title">Este site Utiliza Cookies</h2>
					</div>

					<button className="Btn" onClick={handleCookieToggle}>
						Concordo com os termos
					</button>
				</m.div>
			)}
		</>
	);
}
