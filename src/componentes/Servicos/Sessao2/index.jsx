import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css";

const Sessao2 = () => {
    const retangulos = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [visible, setVisible] = useState(Array(4).fill(false));
    const thresholds = [250, 500, 750, 1000]; // Exemplos de valores para cada retângulo

    useEffect(() => {
        const handleScroll = () => {
            retangulos.forEach((ref, index) => {
                const rect = ref.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (window.scrollY > thresholds[index] && isVisible && !visible[index]) {
                    setTimeout(() => {
                        ref.current.classList.add(styles.visible);
                        setVisible(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                    }, index * 50); // Delay de 300ms para cada retângulo
                } else if (window.scrollY < thresholds[index] && !isVisible && visible[index]) {
                    setTimeout(() => {
                        ref.current.classList.remove(styles.visible);
                        setVisible(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = false;
                            return newVisible;
                        });
                    }, index * 50); // Delay de 300ms para cada retângulo
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visible]);

    return (
        <section className={styles.conteinercontent}>
            <div className={styles.content}>
                <div className={styles.tituloBarra}>
                    <h1 className={styles.titulo}>Programa de Suporte ao Paciente</h1>
                    <div className={styles.roundedRectangle} />
                </div>

                <div className={styles.conteiner1}>
                    <div ref={retangulos[0]} className={`${styles.retangulo1} ${styles.hidden}`}>
                        <p className={styles.paragrafo}>O Programa de Suporte ao Paciente oferece humanização e cuidado ao fornecer assistência personalizada.</p>
                    </div>
                </div>

                <div className={styles.conteiner2}>
                    <div ref={retangulos[1]} className={`${styles.retangulo2} ${styles.hidden}`}>
                        <p className={styles.paragrafo}>Os PSPs não substituem a consulta com o médico.</p>
                    </div>
                    <div ref={retangulos[2]} className={`${styles.retangulo3} ${styles.hidden}`}>
                        <p className={styles.paragrafo}>Os PSPs não incentivam os profissionais de saúde a prescrever ou recomendar produtos.</p>
                    </div>
                    <div ref={retangulos[3]} className={`${styles.retangulo4} ${styles.hidden}`}>
                        <p className={styles.paragrafo}>Os PSPs são elaborados em conformidade com as leis aplicáveis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sessao2;
