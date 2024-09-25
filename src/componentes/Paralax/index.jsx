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
                    <h1 className={styles.titulo}>Cuidado que Faz a Diferença</h1>
                    <p className={styles.paragrafo}>
                    Nossa essência é estender o cuidado a todos. Oferecendo soluções completas e eficazes. Esse é o nosso compromisso com cada vida, de maneira direta e dedicada.
                    </p>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxSection;
