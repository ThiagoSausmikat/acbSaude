import React, { useState } from 'react';
import styles from "./styles.module.css";
import slide1 from "../../assets/slide1.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    { id: 1, name: 'Blanche Pearson', title: 'Sales Manager', img: slide1 },
    { id: 2, name: 'John Doe', title: 'Developer', img: slide1 },
    { id: 3, name: 'Jane Smith', title: 'Designer', img: slide1 },
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
      <div className={styles.wrapper}>
        <IoIosArrowBack className={styles.icon} onClick={prevCard} disabled={currentIndex === 0} />
        
        <div className={styles.carouselContainer}>
          <ul className={styles.carousel} style={{ transform: `translateX(-${(currentIndex * (100 / cardsToShow))}%)`, transition: 'transform 0.5s ease' }}>
            {cards.map((card) => (
              <li key={card.id} className={styles.card}>
                <div className={styles.img}><img src={card.img} alt={card.name} /></div>
                <h2>{card.name}</h2>
                <span>{card.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <IoIosArrowForward className={styles.icon} onClick={nextCard} disabled={currentIndex === maxIndex} />
      </div>
    </div>
  );
};

export default Card;
