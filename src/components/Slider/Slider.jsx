import React, { useState, useEffect  } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // автоматическое перелистывание
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }, [images]);
  
    // переход на следующий слайд
    const nextSlide = () => {
      setCurrentSlide((currentSlide) =>
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    };
  
    // переход на предыдущий слайд
    const prevSlide = () => {
      setCurrentSlide((currentSlide) =>
        currentSlide === 0 ? images.length - 1 : currentSlide - 1
      );
    };
  
    // переход на выбранный слайд
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
  
    function handleTouchStart(event) {
      setStartX(event.touches[0].clientX);
    }
    function handleTouchEnd(event) {
      setEndX(event.changedTouches[0].clientX);
      if (endX < startX) {
        setCurrentSlide((currentSlide) =>
          currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
      } else if (endX > startX) {
        setCurrentSlide((currentSlide) =>
          currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
      }
    }
  
    return (
      <div className="slider">
        <div className="slides" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${ "http://45.12.237.227:3001" + image.slide_patch})` }}
            ></div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={prevSlide} className='button-left'>
            <FiArrowLeftCircle  className="arrow-left"></FiArrowLeftCircle>
          </button>
          <button onClick={nextSlide} className='button-right'>
            <FiArrowRightCircle  className="arrow-right"></FiArrowRightCircle>
          </button>
        </div>
        <div className="dots">
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
}

export default Slider;