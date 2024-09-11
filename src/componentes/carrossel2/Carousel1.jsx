// Carousel.js
import React, { useState } from 'react';
import './Carousel1.css'; // Para adicionar estilos

const slides = [
  {
    image: '/src/assets/slide1.jpg',
  },
  {
    image: '/src/assets/slide2.jpg',
  },
  {
    image: '/src/assets/slide3.jpg',
  },
];

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Código para a seta esquerda */}
      </button>
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={slides[currentIndex].className} // Aplicar classe específica
        />
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Código para a seta direita */}
      </button>
    </div>
  );
};

export default Carousel1;
