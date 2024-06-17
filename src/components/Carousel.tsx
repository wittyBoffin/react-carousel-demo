import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card'; // Assuming Card component is in a separate file

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState(35);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setTranslateX((preState) => {
       return preState + 66 - 1; 
    })
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setTranslateX((preState) => {
        return preState - 66 + 1; 
     })
  };

  const carouselStyle = {
    transform: `translateX(-${translateX}%)`,
  };

  const cards = images.map((image, index) => (
    <Card
      key={index}
      image={image}
    />
  ));

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={handlePrevClick} className="carousel-button carousel-prev">
          <span className="material-icons">&lsaquo;</span>
        </button>
        <button onClick={handleNextClick} className="carousel-button carousel-next">
          <span className="material-icons">&#8250;</span>
        </button>
      </div>
      <ul className="carousel" style={carouselStyle}>
        {cards}
      </ul>
    </div>
  );
};

export default Carousel;