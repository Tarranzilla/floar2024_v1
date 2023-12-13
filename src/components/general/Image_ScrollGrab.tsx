import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

interface ImageScrollGrabProps {
    children: any;
    mobileRow: boolean;
}

const Image_ScrollGrab = ({ children, mobileRow }: ImageScrollGrabProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [buttonClicked, setButtonClicked] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

    const onMouseDown = (e: any) => {
        if (!isDesktop || !ref.current) return;
        setIsDown(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDown(false);
    };

    const onMouseUp = () => {
        setIsDown(false);
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
            className={`Image_ScrollGrab ${mobileRow ? "mobile-row" : ""}`}
            key="Image_ScrollGrab"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            ref={ref}
        >
            {children}
        </m.div>
    );
};

export default Image_ScrollGrab;
