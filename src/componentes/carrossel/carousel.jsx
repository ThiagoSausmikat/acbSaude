import React from 'react';
import Slider from 'react-slick';
import styles from "./styles.module.css";


const Carousel = () => {
  const settings = {
    dots: true, // Se você quer mostrar os pontos de navegação
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.carrosselContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src="../../assets/slide1.jpg" alt="Slide 1" className={styles.slideImage} />
          <h2>Slide 1</h2>
          <p>Texto para o slide 1</p>
          <button>Botão 1</button>
        </div>
        <div className={styles.slide}>
          <img src="../../assets/slide2.jpg" alt="Slide 2" className={styles.slideImage} />
          <h2>Slide 2</h2>
          <p>Texto para o slide 2</p>
          <button>Botão 2</button>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
