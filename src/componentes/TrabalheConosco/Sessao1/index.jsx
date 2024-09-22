import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import maoDir from "../../../assets/maoDir.png";
import maoEsq from "../../../assets/maoEsq.png";

const FaleConosco = () => {
    const maoEsqRef = useRef(null);
    const maoDirRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const width = window.innerWidth;

            // Definindo os thresholds com base na largura da tela
            let scrollThreshold;
            if (width <= 768) {
                scrollThreshold = 80; // Mobile
            } else if (width <= 1024) {
                scrollThreshold = 100; // Para tablets
            } else {
                scrollThreshold = 600; // Desktop
            }

            if (scrollY > scrollThreshold) {
                maoEsqRef.current.classList.add(styles.visible);
                maoDirRef.current.classList.add(styles.visible);
            } else {
                maoEsqRef.current.classList.remove(styles.visible);
                maoDirRef.current.classList.remove(styles.visible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.conteinercontent}>
            <section className={styles.content}>
                <section className={styles.conteinerEsq}>
                    <img src={maoEsq} ref={maoEsqRef} className={`${styles.maoEsq} ${styles.hidden}`} alt="Mão Esquerda" />
                </section>
                <div className={styles.tituloBarra}>
                    <h1 className={styles.titulo}>TRABALHE CONOSCO</h1>
                    <div className={styles.roundedRectangle} />
                </div>
                <div className={styles.conteinerDir}>
                    <img src={maoDir} ref={maoDirRef} className={`${styles.maoDir} ${styles.hidden}`} alt="Mão Direita" />
                </div>
            </section>
        </section>
    );
};

export default FaleConosco;
