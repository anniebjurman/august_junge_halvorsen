import { useEffect, useState } from 'react';
import './Carousel.css';
import { motion } from 'framer-motion';

function Carousel() {
    const images = [
        './images/img2.jpeg',
        '/images/img3.jpeg',
        '/images/img1.jpeg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
      }, []);

    return (
        <div className='carousel'>
            <img src={images[currentImageIndex]} />
        </div>
    );
}

export default Carousel;
