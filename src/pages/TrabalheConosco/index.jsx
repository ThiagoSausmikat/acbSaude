import React from 'react';
import styles from "./styles.module.css";

import Navbar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';
import banner from '../../assets/trabalheConosco.jpg'
import Sessao1 from '../../componentes/TrabalheConosco/Sessao1';
import Sessao2 from '../../componentes/TrabalheConosco/Sessao2';


const TrabalheConosco = () => {

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