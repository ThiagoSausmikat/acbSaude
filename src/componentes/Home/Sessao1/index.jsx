import React from 'react';
import styles from "./styles.module.css";

import coracao from '../../../assets/coracao.png';
import logo from '../../../assets/logo.png';

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Sessao1 = () => {
  
  return (
    
      <section  className={styles.conteiner}>
        <div className={styles.conteinercontent}>
          
        <div className={styles.contentImg}>
          <img src={coracao} className={styles.coracao} />
        </div>

        <div className={styles.contentImgTxtBarra}>
          <div className={styles.content1}>
            <img src={logo} className={styles.logo} />
            <h1 className={styles.titulo}>ACB SAÚDE</h1>
          </div>

          <div className={styles.content2}>
            <div className={styles.roundedRectangle} />
            <p className={styles.paragrafo1}>
            A ACB Saúde se dedica a oferecer um cuidado humanizado e de alta qualidade no ambiente domiciliar, com uma equipe multidisciplinar qualificada e comprometida com o bem-estar e a segurança dos pacientes com abrangência nacional.</p>
            <div className={styles.roundedRectangle} />
            <h2 className={styles.subTitulo}>Transformando Vidas com Cuidado Holístico e Humanizado</h2>
            <p className={styles.paragrafo2}>Na nossa empresa, oferecemos um cuidado humanizado e holístico, atendendo às necessidades individuais de cada paciente. Nosso objetivo é proporcionar qualidade de vida promovendo o bem-estar e adesão ao tratamento</p>
          </div>
        </div>
          </div>
      </section>

  );
};

export default Sessao1;