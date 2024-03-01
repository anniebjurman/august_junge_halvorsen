import React from 'react';
import './Slideshow.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg'
];
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<any>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((index) => (index + 1) % images.length),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className='container'>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((imagePath, index) => (
                        <img
                            className='slide'
                            key={index}
                            src={imagePath}
                            alt='hej'
                        ></img>

                        // <div
                        //     className='slide'
                        //     key={index}
                        //     style={{ backgroundImage: `url(${imagePath})`, backgroundColor: colors[index]}}
                        // ></div>

                    ))}
                </div>
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
