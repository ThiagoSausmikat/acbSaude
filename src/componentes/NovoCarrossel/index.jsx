// Carousel.js
import React, { useState } from 'react';
import styles from './styles.module.css'; // Importando o módulo CSS
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importando ícones de setas
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import slide1 from '../../assets/slide1.jpg'; 
import slide2 from '../../assets/slide2.jpg'; 

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const slides = [
    { title: 'ACB Saúde', text: 'Soluções Humanizadas', button:'Nossos Serviços', image: slide1 },
    
    { title: 'ACB Saúde', text: 'Onde o cuidado e a tecnologia se\nencontram. Nosso programa de\nsuporte ao paciente oferece cuidado\npersonalizado para o bem-estar\nde cada paciente.', button:'Saiba Mais',  image: slide2 }
  ];
  


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
      <IoIosArrowBack className={styles.icon}/>
      </button>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div className={styles.overlay}>
              <h1 className={styles.titulo}>{slide.title}</h1>
              <p className={styles.texto}>{slide.text}</p>
              <button className={styles.botao}>{slide.button} {slide.id}</button>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
      <IoIosArrowForward className={styles.icon} />
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
