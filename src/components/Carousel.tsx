import { useEffect, useState } from 'react';
import './Carousel.css';

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
        }, 3000);

        return () => clearInterval(interval);
      }, [images.length]);

    return (
        <div className='carousel'>
            <img src={images[currentImageIndex]} alt='design of houses' />
        </div>
    );
}

export default Carousel;
