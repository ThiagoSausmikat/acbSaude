import React from 'react';
import styles from "./styles.module.css";

import Navbar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';

import banner from '../../assets/quemSomos.jpg'
import SessaoCard from '../../componentes/QuemSomos/Sessao2';
import Sessao1 from '../../componentes/QuemSomos/Sessao1';
import Sessao3 from '../../componentes/QuemSomos/Sessao3';





const QuemSomos = () => {

  return (

    <div className={styles.body} id='inicio'>

      <Navbar />
      

      <section className={styles.conteiner}>

        <img src={banner} className={styles.banner} alt="Logo" />

        <div className={styles.contexto}>
          <Sessao1 />
          <SessaoCard />
          <Sessao3 />
        </div>

      </section>

      <Footer />

    </div>

  );
};

export default QuemSomos;