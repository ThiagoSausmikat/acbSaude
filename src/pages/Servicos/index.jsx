import React from 'react';
import styles from "./styles.module.css";

import Navbar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';

import banner from '../../assets/servicos.jpg'
import Sessao1 from '../../componentes/Servicos/Sessao1';


const Servicos = () => {

  return (

    <div className={styles.body} id='inicio'>

      <Navbar />
      

      <section className={styles.conteiner}>

        <img src={banner} className={styles.banner} alt="Logo" />

      </section>

      

      <section className={styles.conteiner}>

        <img src={banner} className={styles.banner} alt="Logo" />

      </section>
      <Sessao1 />

      <Footer />

      

    </div>

  );
};

export default Servicos;