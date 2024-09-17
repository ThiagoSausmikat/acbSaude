import React from 'react';
import styles from "./styles.module.css";

import Navbar from '../../componentes/NavBar';
import Sessao1 from '../../componentes/Home/Sessao1';
import Sessao2 from '../../componentes/Home/Sessao2';
import Footer from '../../componentes/Footer';


const QuemSomos = () => {
  
  return (
    
    <div className={styles.body} id='inicio'>
      
      <Navbar />
      
      <Sessao1 />

      <Sessao2 />
     
     <Footer />

    </div>

  );
};

export default QuemSomos;