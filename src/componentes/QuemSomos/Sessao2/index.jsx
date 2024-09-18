import React from 'react';
import styles from "./styles.module.css";

import missao from '../../../assets/missao.png'
import visao from '../../../assets/visao.png'
import valores from '../../../assets/valores.png'


const SessaoCard = () => {

  return (




    <section className={styles.card}>

      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <div className={styles.cardImageContent}>
            <img src={missao} className={styles.img} alt="missao" />
          </div>
        </div>
        <div className={styles.Content}>
          <h2 className={styles.subTitulo}>MISSÃO</h2>
          <p className={styles.paragrafo2}>Proporcionar cuidado humanizado, de alta qualidade no ambiente domiciliar,
            com equipe qualificada e comprometida com o bem-estar e a segurança dos pacientes.</p>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <div className={styles.cardImageContent}>
            <img src={visao} className={styles.img} alt="visao" />
          </div>
        </div>
        <div className={styles.Content}>
          <h2 className={styles.subTitulo}>VISÃO</h2>
          <p className={styles.paragrafo2}>Ser reconhecida pela excelência e segurança na prestação de serviços domiciliares
            para pacientes com doenças crônicas, com equipe de profissionais especializados e comprometidos com a qualidade de
            vida dos pacientes.</p>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <div className={styles.cardImageContent}>
            <img src={valores} className={styles.img} alt="valores" />
          </div>
        </div>
        <div className={styles.Content}>
          <h2 className={styles.subTitulo}>VALORES</h2>
          <p className={styles.paragrafo2}>O paciente no centro do cuidado. Colocamos o paciente como foco principal
            de todas as nossas ações, personalizando o atendimento de acordo com suas necessidades e promovendo qualidade de vida.</p>
        </div>
      </div>

    </section>

  );
};

export default SessaoCard;