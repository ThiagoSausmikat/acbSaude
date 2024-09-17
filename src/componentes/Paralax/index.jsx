import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './styles.module.css'; // Certifique-se de que o caminho para o arquivo CSS está correto
import Paralax from '../../assets/paralax.jpg'; // Atualize o caminho da imagem conforme necessário

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const ParallaxSection = () => {
    console.log('ParallaxSection renderizado');
    return (
        <div id='home' className={styles.parallaxContainer}>
            <Parallax strength={300} blur={{ min: -3, max: 3 }} bgImage={Paralax}>
                <div className={styles.content}>
                    <h1 className={styles.titulo}>Sustentabilidade</h1>
                    <h2 className={styles.subTitulo}>Cuidado que Faz a Diferença</h2>
                    <p className={styles.paragrafo}>
                        Nosso objetivo é estender o cuidado a todos: desde colaboradores e pacientes até os profissionais de saúde.
                        Buscamos oferecer soluções completas, eficazes e sustentáveis. Esse é o nosso compromisso com cada vida, de
                        maneira direta e dedicada.
                    </p>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxSection;
