import React from 'react';
import styles from "./styles.module.css";

import maoDir from "../../../assets/maoDir.png"
import maoEsq from "../../../assets/maoEsq.png"
import CardSlider from '../../CardSlider';



const Sessao3 = () => {

    return (

        <section className={styles.conteinercontent}>
            <div className={styles.content}>
                
                <div className={styles.tituloBarra}>
                    <h2 className={styles.subTitulo}>Suporte na Jornada do Tratamento</h2>
                    <div className={styles.roundedRectangle} />
                </div>

                
            <CardSlider />


            </div>
        </section>


    );
};

export default Sessao3;