import React from 'react';
import styles from "./styles.module.css";
import FaleConosco from '../../FormFaleConosco';


const Sessao2 = () => {

    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.conteinercontent}>
                    <div className={styles.roundedRectangleEsq} />
                    <div className={styles.textoContainer}>
                        <h2 className={styles.subTitulo1}>
                            Estamos a sua disposição para tirar dúvidas, encontrar respostas integradas e simplificar sua vida!
                        </h2>
                    </div>
                    <div className={styles.roundedRectangleDir} />
                </div>
            </div>

            <div>
                <FaleConosco />
            </div>

        </section>

    );
};

export default Sessao2;