import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.css';
import missao from '../../assets/missao.png';

// Definindo os pontos de interrupção para responsividade
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 820 }, items: 1 },
  mobile: { breakpoint: { max: 820, min: 0 }, items: 1 },
};

// Dados dos cartões
const cardsData = [
  { id: 1, title: 'Gestão do Inicio de Tratamento para o Paciente', image: missao },
  { id: 2, title: 'Monitoramento do Sintomas', image: missao },
  { id: 3, title: 'Adesão ao Tratamento', image: missao },
];

// Componente do cartão
const Card = ({ title, image }) => (
  <div className={styles.cardContent}>
    <div className={styles.cardImage}>
      <div className={styles.cardImageContent}>
        <img src={image} className={styles.img} alt={title} />
      </div>
    </div>
    <div className={styles.Content}>
      <h2 className={styles.subTitulo}>{title}</h2>
    </div>
  </div>
);

// Componente do slider de cartões
const CardSlider = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel 
        responsive={responsive} 
        swipeable={true} 
        draggable={false} 
        showDots={true} // Ativa os pontos
        infinite={true} // Permite rotação infinita
      >
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
