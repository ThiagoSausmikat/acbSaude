// Carousel.js
import React, { useState } from 'react';
import styles from './styles.module.css'; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'; // Importando Link

import slide1 from '../../assets/slide1.jpg'; 
import slide2 from '../../assets/slide2.jpg'; 

import '@fontsource-variable/jost';

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: 'ACB Saúde', text: 'Soluções Humanizadas', button: 'Nossos Serviços', link: '/servicos', image: slide1 },
    {
      title: 'ACB Saúde',
      text: (
        <>
          Onde o cuidado e a tecnologia se encontram.<br />
          Nosso programa de suporte ao paciente oferece<br />
          cuidado personalizado para o bem-estar de cada paciente.
        </>
      ),
      button: 'Saiba Mais',
      link: '/quem-somos',
      image: slide2,
    },
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
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div className={styles.overlay}>
              <h1 className={styles.titulo}>{slide.title}</h1>
              <p className={styles.texto}>{slide.text}</p>
              <Link to={slide.link} className={styles.botao}>{slide.button}</Link> {/* Modificação aqui */}
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
