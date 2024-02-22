import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const images = [
    './images/August_Junge_Halvorsen_01.jpg',
    '/images/August_Junge_Halvorsen_02.jpg',
    '/images/August_Junge_Halvorsen_03.jpg'
];

function ImageLoop() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageIndex = wrap(0, images.length, currentImageIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <AnimatePresence>
                <motion.img
                    style={{ height: 500, width: 350, position:"absolute" }}
                    key={currentImageIndex}
                    src={images[imageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "linear", duration: .8}}
                />
            </AnimatePresence>
        </>
    );
};

export default ImageLoop;

