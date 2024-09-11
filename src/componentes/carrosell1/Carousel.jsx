import React, { useState } from 'react';
import './Carousel.css'; // Para adicionar estilos

const slides = [
  {
    image: '/src/assets/slide1.jpg',
    text: 'Texto do Slide 1',
    buttonText: 'Botão 1',
    className: 'slide1',
  },
  {
    image: '/src/assets/slide2.jpg',
    text: 'Texto do Slide 2',
    buttonText: 'Botão 2',
    className: 'slide2',
  },
  {
    image: '/src/assets/slide3.jpg',
    text: 'Texto do Slide 3',
    buttonText: 'Botão 3',
    className: 'slide3',
  },
];

const Carousel = () => {
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
        &#10094;
      </button>
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={slides[currentIndex].className} // Aplicar classe específica
        />
        <div className="carousel-text">
          <h2>{slides[currentIndex].text}</h2>
          <button>{slides[currentIndex].buttonText}</button>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
