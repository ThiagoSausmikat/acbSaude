import React, { useRef, useEffect } from 'react';
import styles from "./styles.module.css";
import paralax from "../../assets/paralax.jpg"
import Lottie from 'lottie-react';
import Scroll from "../../assets/scroll.json"


import { Link } from 'react-scroll'; // Importa o Link da react-scroll

const BemVindoSection = () => {
   
    return (
    
    <section className={styles.conteiner} id='home'>
      <div className={styles.textContent}>Seja bem vindo ao meu Site</div>
      <div className={styles.lottieContainer}>
      <Link to="sobre" spy={true} smooth={true} offset={0} duration={600} className={styles.lottieLink}>
      <Lottie animationData={Scroll} loop={true} className={styles.lottie} />
    </Link>
      </div>
    </section>

  );
};

export default BemVindoSection;