import { useState } from "react";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useSelector, useDispatch } from "react-redux";
import { toggleElement } from "@/store/slices/uiSlice";
import { RootState } from "@/store/store";

import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";

export default function Pesquisa() {
    const dispatch = useDispatch();
    const { openElement } = useSelector((state: RootState) => state.userInterface);
    const { pages, products, contactInfo, blogPosts } = useSelector((state: RootState) => state.search);
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const isSearchOpen = openElement === "search";

    const handleSearchToggle = () => {
        dispatch(toggleElement("search"));
    };

    const filteredProducts = searchInput ? products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase())) : [];

    return (
        <>
            {isSearchOpen && (
                <m.div variants={basicFade} initial="hidden" animate="visible" exit="hidden" className="Menu" id="Pesquisa" key="Pesquisa">
                    <div className="Search_Header">
                        <h2 className="Menu_Title">Aba de Pesquisa</h2>
                    </div>

                    <div className="Search_Input_Container Pill">
                        <input type="text" className="Search_Input" placeholder="Digite aqui sua pesquisa..." onChange={handleInputChange} />
                        <SearchIcon className="Search_Icon" />
                    </div>

                    {searchInput === "" && (
                        <div className="Search_No_Results">
                            <h3>Nenhuma busca feita.</h3>
                        </div>
                    )}

                    {filteredProducts.length === 0 && searchInput !== "" && (
                        <div className="Search_No_Results">
                            <h3>Nenhum resultado encontrado.</h3>
                        </div>
                    )}

                    {filteredProducts.length > 0 && searchInput !== "" && (
                        <div className="Search_Results_List">
                            {filteredProducts.map((product) => (
                                <div className="Search_Result" key={product.id}>
                                    <Image
                                        className="Search_Result_Image"
                                        src={"https://" + product.icon}
                                        alt={product.name}
                                        width={120}
                                        height={120}
                                    />
                                    <div className="Search_Result_Info">
                                        <h3>{product.name}</h3>
                                        <p>{product.intro}</p>
                                        <Link className="Pill" href={product.url}>
                                            Mais Detalhes
                                        </Link>
                                    </div>
                                    {/* Add more product details here */}
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="Btn" onClick={handleSearchToggle}>
                        Fechar Aba de Pesquisa
                    </button>
                </m.div>
            )}
        </>
    );
}
