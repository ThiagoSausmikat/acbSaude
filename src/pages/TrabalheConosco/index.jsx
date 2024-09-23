import React, { useEffect } from 'react';
import styles from "./styles.module.css";

import Navbar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';
import banner from '../../assets/trabalheConosco.jpg'
import Sessao1 from '../../componentes/TrabalheConosco/Sessao1';
import Sessao2 from '../../componentes/TrabalheConosco/Sessao2';
import { useLocation } from 'react-router-dom';


const TrabalheConosco = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Rolar para o topo sempre que a localização mudar


  return (

    <div className={styles.body} id='inicio'>

      <Navbar />

      <section className={styles.conteiner}>

        <img src={banner} className={styles.banner} alt="Logo" />

      </section>
      
      <Sessao1 />

      <Sessao2 />

      

      <Footer />

    </div>

  );
};

export default TrabalheConosco;