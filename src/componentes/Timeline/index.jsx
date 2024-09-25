import React, { useEffect, useState, useRef } from 'react';
import 'animate.css';
import styles from "./styles.module.css";

const Timeline = () => {
    const [isVisible, setIsVisible] = useState([]);
    const refs = useRef([]);

    const timelineData = [
        {
            
            subTitle: "Início no Home Care",
            paragraph: "Cristiane é enfermeira, com uma trajetória marcada pelo cuidado e pela dedicação à saúde dos pacientes. Sua jornada começou no Home Care, onde teve a oportunidade de acompanhar de perto as necessidades dos pacientes no conforto de suas casas. Nesse ambiente, ela desenvolveu uma visão holística da importância do cuidado individualizado e humanizado."
        },
        {
            
            subTitle: "Experiência com Medicamentos Biológicos",
            paragraph: "Ao longo dos anos, ela expandiu sua experiência ao atuar com medicamentos biológicos, especialmente voltados para pacientes com doenças crônicas. Nesse cenário, ela não apenas administrava o tratamento, mas também apoiava os pacientes durante toda a jornada, oferecendo suporte técnico e emocional. Esse acompanhamento constante permitiu observar o impacto que o tratamento adequado e o cuidado humanizado podem ter na vida de quem lida com doenças crônicas."
        },
        {
            
            subTitle: "Empreendendo com Propósito",
            paragraph: "Motivada por sua paixão por ajudar as pessoas a viverem melhor, ela deu um passo adiante e montou sua própria empresa de suporte a pacientes. Oferecendo qualidade de vida e orientação contínua para quem precisa conviver com tratamentos complexos."
        },
        {
            
            subTitle: "Uma História de Amor e Empatia",
            paragraph: "Sua história é construída com muito amor, empatia e sensibilidade no propósito de cuidar com o objetivo de transformar vidas."
        }
    ];

    const handleScroll = () => {
        const updatedVisibility = refs.current.map(ref => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return rect.top <= viewHeight && rect.bottom >= 0;
            }
            return false;
        });
        setIsVisible(updatedVisibility);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.body} id='inicio'>
            <section className={styles.timeline}>
                <div className={styles.timelineRow}>
                    <div className={styles.timelineColumn}>
                        <h2 className={styles.title}>A Trajetória de Cristiane na Enfermagem<span className={styles.animate} style={{ '--i': 1 }}></span></h2>
                        <div className={styles.timelineBox}>
                            {timelineData.map((item, index) => (
                                <div className={styles.timelineContent} key={index}>
                                    <div 
                                        ref={el => refs.current[index] = el} 
                                        className={`animate__animated ${isVisible[index] ? 'animate__backInLeft' : ''} ${styles.content}`} 
                                        style={{ 
                                            animationDuration: '1.5s', // Duração da animação
                                            animationDelay: `${index * 0.15}s` // Atraso baseado no índice
                                        }} 
                                    >
                                        
                                        <h3 className={styles.subTitulo}>{item.subTitle}</h3>
                                        <p className={styles.paragrafo}>{item.paragraph}</p>
                                    </div>
                                </div>
                            ))}
                            <span className={styles.animate} style={{ '--i': 2 }}></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Timeline;
