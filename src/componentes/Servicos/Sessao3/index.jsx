import React from 'react';
import styles from "./styles.module.css";

import CardSlider from '../../CardSlider';
import CardNovo from '../../Card';



const Sessao3 = () => {

    return (

        <section className={styles.conteinercontent}>
            <div className={styles.content}>
                
                <div className={styles.tituloBarra}>
                    <h2 className={styles.subTitulo1}>Suporte na Jornada do Tratamento</h2>
                    <div className={styles.roundedRectangle} />
                </div>

            <CardNovo />


            </div>
        </section>


    );
};

export default Sessao3;