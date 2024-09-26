import React, { useState } from 'react';
import styles from "./styles.module.css";
import slide1 from "../../assets/slide1.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CardNovo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, name: 'Gestão do Inicio de Tratamento para o Paciente ', title: '1°' },
    { id: 2, name: 'Monitoramento dos Sintomas', title: '2°' },
    { id: 3, name: 'Adesão ao<br />Tratamento', title: '3°'  },
  ];

  const cardsToShow = window.innerWidth < 600 ? 1 : 2;
  const maxIndex = Math.ceil(cards.length / cardsToShow) - 1;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <div className={styles.body}>

      <div className={styles.tituloBarra}>
        <h1 className={styles.titulo}>Suporte na jornada do tratamento</h1>
        <div className={styles.roundedRectangle1} />
      </div>

      <div className={styles.wrapper}>
        <IoIosArrowBack className={styles.icon} onClick={prevCard} disabled={currentIndex === 0} />
        <div className={styles.carouselContainer}>
          <ul className={styles.carousel} style={{ transform: `translateX(-${(currentIndex * (100 / cardsToShow))}%)`, transition: 'transform 0.5s ease' }}>
            {cards.map((card) => (
              <li key={card.id} className={styles.card}>
                <div className={styles.img}><div className={styles.circulo}><span className={styles.span}>{card.title}</span></div></div>
                <h2 className={styles.subTitulo} dangerouslySetInnerHTML={{ __html: card.name }} />
                
              </li>
            ))}
          </ul>
        </div>
        <IoIosArrowForward className={styles.icon} onClick={nextCard} disabled={currentIndex === maxIndex} />
      </div>
<div className={styles.roundedRectangleBody}>
      <div className={styles.roundedRectangle2} />
      </div>

    </div>
  );
};

export default CardNovo;
