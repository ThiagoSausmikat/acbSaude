import React from 'react';
import styles from "./styles.module.css";

import foto from "../../assets/emConstrucao.jpg"




const Home = () => {
  
   


  return (
    <div className={styles.body} id='inicio'>
        <img className={styles.foto} src={foto} alt="Logo" />
    </div>
  );
};

export default Home;