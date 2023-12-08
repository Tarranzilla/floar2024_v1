import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

import { useMediaQuery } from "react-responsive";

import { useState, useRef, useEffect, createRef } from "react";

import Link from "next/link";

import { getEntriesByContentTypeAndPreviewMode } from "@/lib/contentful/contentful"; // Import the function
import CTFL_Img_Loader from "@/components/contentful/CTFL_Img_Loader";

import Product_Card from "@/components/shop/Product_Card";

import RoupaFloar from "@/types/RoupaFloar";

interface LojaProps {
    roupaFloar: RoupaFloar[];
}

export default function Loja({ roupaFloar }: LojaProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [buttonRefs, setButtonRefs] = useState<HTMLButtonElement[]>([]);

    const addButtonRef = (ref: HTMLButtonElement | null) => {
        if (ref && !buttonRefs.includes(ref)) {
            setButtonRefs((prevRefs) => [...prevRefs, ref]);
        }
    };

    const [buttonClicked, setButtonClicked] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [shouldShrink, setShouldShrink] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

    const onMouseDown = (e: any) => {
        if (!isDesktop || !ref.current || buttonRefs.some((buttonRef) => buttonRef.contains(e.target))) return;
        setIsDown(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);

        setTimeout(() => {
            setShouldShrink(!shouldShrink); // Toggle shouldShrink
        }, 250);
    };

    const onMouseLeave = () => {
        setIsDown(false);
        setShouldShrink(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
        setShouldShrink(false);
    };

    const onMouseMove = (e: any) => {
        if (!isDown || !isDesktop || !ref.current) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        requestAnimationFrame(() => {
            if (ref.current) {
                ref.current.scrollLeft = scrollLeft - walk;
            }
        });
    };

    useEffect(() => {
        const handleMouseUp = () => {
            setButtonClicked(false);
        };

        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <m.div
            variants={basicFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={"Main_Loja"}
            key="Loja"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            ref={ref}
        >
            {/* Map over roupaFloar and display each item */}
            {roupaFloar.map((item) => (
                <Product_Card
                    setButtonRef={addButtonRef}
                    setButtonClicked={setButtonClicked}
                    item={item}
                    isUserClicking={shouldShrink}
                    key={item.sys.id}
                />
            ))}
        </m.div>
    );
}

// This function runs at build time and fetches data from Contentful
export async function getStaticProps() {
    const roupaFloar = await getEntriesByContentTypeAndPreviewMode("roupaFloar");

    return {
        props: {
            roupaFloar, // Pass roupaFloar as a prop to the page
        },
    };
}

/*

                    <div className="Product_Card_Image_Container">
                        {item.fields.images.map((image) => (
                            <img src={image.fields.file.url} alt="" />
                        ))}
                    </div>

*/
