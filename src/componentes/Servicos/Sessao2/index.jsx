import React from 'react';
import styles from "./styles.module.css";

const Sessao2 = () => {

    return (
        <section className={styles.conteinercontent}>
            <div className={styles.content}>
                <div className={styles.tituloBarra}>
                    <h1 className={styles.titulo}>Programa de Suporte ao Paciente</h1>
                    <div className={styles.roundedRectangle} />
                </div>

                <div className={styles.conteiner1}>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>O Programa de Suporte ao Paciente oferece humanização e cuidado ao fornecer assistência personalizada.</p>
                    </div>
                </div>

                <div className={styles.conteiner2}>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs não substituem a consulta com o médico.</p>
                    </div>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs não incentivam os profissionais de saúde a prescrever ou recomendar produtos.</p>
                    </div>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs são elaborados em conformidade com as leis aplicáveis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sessao2;
