import React from 'react';
import styles from "./styles.module.css";

import diagrama from '../../../assets/diagrama.png'

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Sessao2 = () => {
  
  return (
    
      <section className={styles.conteiner}>
        <div className={styles.conteinercontent}>
            <h1 className={styles.titulo}>PROGRAMA DE SUPORTE AO PACIENTE</h1>
            <div className={styles.roundedRectangle} />
            <h2 className={styles.subTitulo}>Programa efetivo que apoia o paciente em todas as etapas.</h2>
            <img className={styles.diagrama} src={diagrama}></img>            
        </div>
      </section>

  );
};

export default Sessao2;