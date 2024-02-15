import { useEffect, useState } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';
import CrossfadeImage from "react-crossfade-image";

function Carousel() {
    const images = [
        './images/August_Junge_Halvorsen_01.jpg',
        '/images/August_Junge_Halvorsen_02.jpg',
        '/images/August_Junge_Halvorsen_03.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
      }, [images.length]);

    return (
      <>
        <div className='carousel_desktop'>
            <CrossfadeImage
              src={images[currentImageIndex]}
              style={{aspectRatio: '3/4'}}
            />
        </div>

        <div className='carousel_mobile'>
            <CrossfadeImage
              src={images[currentImageIndex]}
              style={{minHeight: '102vh', objectFit: 'cover' }}
            />
        </div>
      </>
    );
}

export default Carousel;
