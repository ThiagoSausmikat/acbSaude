import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import maoDir from "../../../assets/maoDir.png";
import maoEsq from "../../../assets/maoEsq.png";

const FaleConosco = () => {
    const maoEsqRef = useRef(null);
    const maoDirRef = useRef(null);

    useEffect(() => {
        const maoEsq = maoEsqRef.current;
        const maoDir = maoDirRef.current;

        // Resetar estados iniciais
        maoEsq.style.opacity = '0';
        maoEsq.style.transform = 'translateX(-300px)';
        maoDir.style.opacity = '0';
        maoDir.style.transform = 'translateX(300px)';

        // Função para iniciar a animação
        const animate = () => {
            maoEsq.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            maoDir.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            requestAnimationFrame(() => {
                maoEsq.style.opacity = '1';
                maoEsq.style.transform = 'translateX(0)';
                maoDir.style.opacity = '1';
                maoDir.style.transform = 'translateX(0)';
            });
        };

        animate();

        return () => {
            // Resetar antes de sair
            maoEsq.style.opacity = '0';
            maoEsq.style.transform = 'translateX(-300px)';
            maoDir.style.opacity = '0';
            maoDir.style.transform = 'translateX(300px)';
        };
    }, []); // Executa apenas na montagem

    return (
        <section className={styles.conteinercontent}>
            <section className={styles.content}>
                <section className={styles.conteinerEsq}>
                    <img src={maoEsq} ref={maoEsqRef} className={styles.maoEsq} alt="Mão Esquerda" />
                </section>
                <div className={styles.tituloBarra}>
                    <h1 className={styles.titulo}>FALE CONOSCO</h1>
                    <div className={styles.roundedRectangle} />
                </div>
                <div className={styles.conteinerDir}>
                    <img src={maoDir} ref={maoDirRef} className={styles.maoDir} alt="Mão Direita" />
                </div>
            </section>
        </section>
    );
};

export default FaleConosco;
