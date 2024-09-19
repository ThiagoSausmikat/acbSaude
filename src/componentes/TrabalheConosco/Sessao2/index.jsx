import React from 'react';
import styles from "./styles.module.css";
import TrabalheConosco from '../../FormTrabalhe';


const Sessao2 = () => {

    return (
        <section>
            <div className={styles.conteiner}>
                <div className={styles.conteinercontent}>
                    <div className={styles.roundedRectangleEsq} />
                    <div className={styles.textoContainer}>
                        <h2 className={styles.subTitulo}>
                            Enfermeiro se você tem paixão em cuidar de pessoas e deseja fazer a diferença na vida dos pacientes que
                            enfrentam doenças crônicas, trabalhar com atendimento humanizado nessa área pode ser uma escolha
                            extremamente recompensadora.
                        </h2>
                    </div>
                    <div className={styles.roundedRectangleDir} />
                </div>
            </div>

            <div className={styles.contentParagrafo}>
                <h2 className={styles.subTitulo}>Necessário ter carteira de habilitação e automóvel.</h2>
            </div>

            <div>
                <TrabalheConosco />
            </div>

        </section>

    );
};

export default Sessao2;