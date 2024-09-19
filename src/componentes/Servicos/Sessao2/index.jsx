import React from 'react';
import styles from "./styles.module.css";

import maoDir from "../../../assets/maoDir.png"
import maoEsq from "../../../assets/maoEsq.png"


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
                        <p className={styles.paragrafo}>O Programa de Suporte ao Paciente oferece humanização e cuidado ao fornecer assistência personalizada,
                            incluindo a aplicação de medicamentos em domicílio e o monitoramento de pacientes. Seu objetivo é melhorar
                            a adesão ao tratamento e a qualidade de vida, com foco na jornada de tratamento.</p>
                    </div>
                </div>


                <div className={styles.conteiner2}>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs não substituem a consulta com o médico.</p>
                    </div>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs não incentivam os profissionais de saúde a prescrever, administrar,
                            adquirir, fornecer ou recomendar produtos e não devem ser promovidos como um recurso adicional para os
                            médicos.</p>
                    </div>
                    <div className={styles.retangulo}>
                        <p className={styles.paragrafo}>Os PSPs são elaborados em conformidade com as leis, regulamentos,
                            códigos e políticas locaisaplicáveis.</p>
                    </div>
                </div>

            </div>
        </section>

        

        

        

    );
};

export default Sessao2;