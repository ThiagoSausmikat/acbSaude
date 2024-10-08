import React from 'react';
import styles from "./styles.module.css";

import logo from '../../../assets/logoDourada.png'


const Sessao1 = () => {

  return (



    <section className={styles.conteinercontent}>

      <div className={styles.content1}>
           
        <img src={logo} className={styles.logoTablesSmart} />
        <div className={styles.tituloRetangulo}>
        <h1 className={styles.titulo}>ACB SAÚDE</h1>
        <div className={styles.roundedRectangle} />
        </div>
        
      </div>

      <div>

        <div className={styles.content2LogoTxt}>
          <img src={logo} className={styles.logo} />
          <p className={styles.paragrafo1}>A ACB Saúde se dedica a oferecer um cuidado humanizado e de alta qualidade no ambiente domiciliar, com uma equipe multidisciplinar qualificada e comprometida com o bem-estar e a segurança dos pacientes com abrangência nacional.</p>
        </div>

      </div>

    </section>



  );
};

export default Sessao1;