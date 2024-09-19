import React from 'react';
import styles from "./styles.module.css";

import maoDir from "../../../assets/maoDir.png"
import maoEsq from "../../../assets/maoEsq.png"


const Sessao1 = () => {

    return (

        <section className={styles.conteinercontent}>
            <div className={styles.content}>
                
                <div className={styles.conteinerEsq}>
                    <img src={maoEsq} className={styles.maoEsq} alt="Logo" />
                </div>

                <div className={styles.tituloBarra}>
                    <h1 className={styles.titulo}>FALE CONOSCO</h1>
                    <div className={styles.roundedRectangle} />
                </div>

                <div className={styles.conteinerDir}>
                    <img src={maoDir} className={styles.maoDir} alt="Logo" />
                </div>

            </div>
        </section>

    );
};

export default Sessao1;