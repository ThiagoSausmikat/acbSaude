
import React from 'react';

import styles from "./styles.module.css";


import desktop from '../../assets/manutencao.jpg'
import mobile from '../../assets/manutencaoMobile.jpg'

const Home = () => {

  return (
    <div className={styles.body} id='inicio'>
    
 
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
