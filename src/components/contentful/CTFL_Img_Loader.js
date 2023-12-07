import Image from "next/image";
import { Suspense, useState } from "react";
import { motion as m } from "framer-motion";
import { basicFade } from "@/lib/animations";

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

export default function CTFL_Img_Loader(props) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <Suspense fallback={null}>
            <Image className={`CLTF_Image ${isLoading ? "" : "fade-in"}`} alt={props.alt} loader={imageLoader} onLoad={handleImageLoad} {...props} />
        </Suspense>
    );
}
