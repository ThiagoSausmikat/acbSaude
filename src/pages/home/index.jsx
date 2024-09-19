import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./styles.module.css";

import Carousel1 from '../../componentes/NovoCarrossel';
import Navbar from '../../componentes/NavBar';
import ParallaxSection from '../../componentes/Paralax';
import Sessao1 from '../../componentes/Home/Sessao1';
import Sessao2 from '../../componentes/Home/Sessao2';
import Footer from '../../componentes/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Rolar para o topo sempre que a localização mudar

  return (
    <div className={styles.body} id='inicio'>
      <Navbar />
      <Carousel1 />
      <Sessao1 />
      <ParallaxSection />
      <Sessao2 />
      <Footer />
    </div>
  );
};

export default Home;
