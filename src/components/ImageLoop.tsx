import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import './ImageLoop.css';

const images = [
    './images/August_Junge_Halvorsen_01.jpg',
    './images/August_Junge_Halvorsen_02.jpg',
    './images/August_Junge_Halvorsen_03.jpg'
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
        <div className="imageLoopCont">
            <AnimatePresence>
                <motion.img
                    className="image"
                    key={currentImageIndex}
                    src={images[imageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "ease", duration: .8}}
                />
            </AnimatePresence>
            <div className="imgBackground"></div>
        </div>
    );
};

export default ImageLoop;

