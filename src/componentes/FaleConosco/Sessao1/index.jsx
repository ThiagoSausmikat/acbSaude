import React, { useLayoutEffect, useRef } from 'react';
import styles from "./styles.module.css";
import maoDir from "../../../assets/maoDir.png"
import maoEsq from "../../../assets/maoEsq.png"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Sessao1 = () => {
    const maoEsqRef = useRef(null);
    const maoDirRef = useRef(null); // Referência para a mão direita

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const maosAnimation = gsap.to(maoEsqRef.current, {
            x: 0,
            opacity: 0.3,
            duration: 30,
            scrollTrigger: {
                trigger: `.${styles.conteinerEsq}`,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: true,
                onLeave: () => gsap.set(maoEsqRef.current, { opacity: 0.3 }),
                onEnterBack: () => gsap.set(maoEsqRef.current, { opacity: 0.3 }),
            },
        });

        // Animação para a mão direita
        const maoDirAnimation = gsap.to(maoDirRef.current, {
            x: 0,
            opacity: 0.3,
            duration: 30,
            scrollTrigger: {
                trigger: `.${styles.conteinerEsq}`,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: true,
                onLeave: () => gsap.set(maoDirRef.current, { opacity: 0.3 }),
                onEnterBack: () => gsap.set(maoDirRef.current, { opacity: 0.3 }),
            },
        });

        return () => {
            maosAnimation.kill();
            maoDirAnimation.kill(); // Certifique-se de limpar a animação da mão direita
        };
    }, []);

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

export default Sessao1;