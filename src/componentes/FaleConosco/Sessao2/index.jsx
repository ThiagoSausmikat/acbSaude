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
                        <h2 className={styles.subTitulo}>
                            Enfermeiro se você tem paixão em cuidar de pessoas e deseja fazer a diferença na vida dos pacientes que
                            enfrentam doenças crônicas, trabalhar com atendimento humanizado nessa área pode ser uma escolha
                            extremamente recompensadora.
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