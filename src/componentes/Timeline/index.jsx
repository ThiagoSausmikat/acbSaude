import React from 'react';
import styles from "./styles.module.css";


const Timeline = () => {
 
  return (

    <div className={styles.body} id='inicio'>

      

     <section className={styles.timeline}>
        <div className={styles.timelineRow}>
            <div className={styles.timelineColumn}>
                <h2 className={styles.title}>Como Nasceu a ACB Saúde?</h2>

                <div className={styles.timelineBox}>
                    <div className={styles.timelineContent}>
                        <div className={styles.content}>
                            <h3 className={styles.subTitulo}>Início no Home Care</h3>
                            <p className={styles.paragrafo}>Cristiane é enfermeira, com uma trajetória marcada pelo cuidado e pela dedicação à saúde dos pacientes. Sua jornada começou no Home Care, onde teve a oportunidade de acompanhar de perto as necessidades dos pacientes no conforto de suas casas. Nesse ambiente, ela desenvolveu uma visão holística da importância do cuidado individualizado e humanizado.</p>
                        </div>
                    </div>

                    <div className={styles.timelineContent}>
                        <div className={styles.content}>
                            <h3 className={styles.subTitulo}>Experiência com Medicamentos Biológico</h3>
                            <p className={styles.paragrafo}>Ao longo dos anos, ela expandiu sua experiência ao atuar com medicamentos biológicos, especialmente voltados para pacientes com doenças crônicas. Nesse cenário, ela não apenas administrava o tratamento, mas também apoiava os pacientes durante toda a jornada, oferecendo suporte técnico e emocional. Esse acompanhamento constante permitiu observar o impacto que o tratamento adequado e o cuidado humanizado podem ter na vida de quem lida com doenças crônicas.</p>
                        </div>
                    </div>

                    <div className={styles.timelineContent}>
                        <div className={styles.content}>
                            <h3 className={styles.subTitulo}>Empreendendo com Propósito</h3>
                            <p className={styles.paragrafo}>Motivada por sua paixão por ajudar as pessoas a viverem melhor, ela deu um passo adiante e montou sua própria empresa de suporte a pacientes. Oferecendo qualidade de vida e orientação contínua para quem precisa conviver com tratamentos complexos.</p>
                        </div>
                    </div>

                    <div className={styles.timelineContent}>
                        <div className={styles.content}>
                            <h3 className={styles.subTitulo}>Uma História de Amor e Empatia</h3>
                            <p className={styles.paragrafo}>Sua história é construída com muito amor, empatia e sensibilidade no propósito de cuidar com o objetivo de transformar vidas.</p>
                        </div>
                    </div>
                    
                    

      
                </div>

            </div>


        </div>

     </section>

    </div>

  );
};

export default Timeline;