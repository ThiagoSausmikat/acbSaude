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
              Nossa missão é levar cuidados personalizados diretamente para a sua casa.
              Ampliamos o acesso e a adesão à saúde, focando nas necessidades reais dos pacientes.
              Utilizando tecnologia avançada e um atendimento humanizado, construímos ofertas de valor
               efetivas que garantem um alto nível de desfecho clínico e um cuidado genuíno.</p>
            <div className={styles.roundedRectangle} />
            <h2 className={styles.subTitulo}>Transformando Vidas com Cuidado Holístico e Humanizado</h2>
            <p className={styles.paragrafo2}>Na nossa empresa, oferecemos um cuidado humanizado e holístico,
              atendendo às necessidades individuais de cada paciente com carinho e atenção. Nosso objetivo é
              melhorar tanto o bem-estar físico quanto psicológico, fazendo a diferença com um suporte emocional significativo.</p>
          </div>
        </div>
          </div>
      </section>

  );
};

export default Sessao1;