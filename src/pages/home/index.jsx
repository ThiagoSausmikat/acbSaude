import React from 'react';
import styles from "./styles.module.css";

import Carousel1 from '../../componentes/NovoCarrossel';
import Navbar from '../../componentes/NavBar';
import ParallaxSection from '../../componentes/Paralax';
import Sessao1 from '../../componentes/Home/Sessao1';
import Sessao2 from '../../componentes/Home/Sessao2';
import Footer from '../../componentes/Footer';

import desktop from '../../assets/manutencao.jpg'
import mobile from '../../assets/manutencaoMobile.jpg'






const Home = () => {
  
  return (
    
    <div className={styles.body} id='inicio'>
      
      <Navbar />
      
      <Carousel1 />
      
      <Sessao1 />

      <ParallaxSection />

      <Sessao2 />
     
     <Footer />

     <div className={styles.desktopOnly}>
      <img className={styles.foto} src={desktop} alt="Logo" />
      </div>
      <div className={styles.mobileOnly}>
      <img className={styles.foto} src={mobile} alt="Logo" />
      </div>

    </div>

  );
};

export default Home;