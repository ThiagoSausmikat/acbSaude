import React from 'react';
import styles from "./styles.module.css";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Footer = () => {

    return (

        <section className={styles.conteiner}>
            <div className={styles.conteinercontent1}>
                <div className={styles.content}>
                    <h3 className={styles.subTitutlo3}>ACB Saúde</h3>
                    <p className={styles.paragrafo}>
                        A ACB Saúde oferece cuidado domiciliar humanizado e de alta qualidade,
                        com equipe qualificada, focada na segurança e bem-estar dos pacientes.
                    </p>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.subTitutlo3}>Contatos</h3>
                    <p className={styles.paragrafo}>
                        A ACB Saúde oferece cuidado domiciliar humanizado e de alta qualidade,
                        com equipe qualificada, focada na segurança e bem-estar dos pacientes.
                    </p>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.subTitutlo3}>Contatos</h3>
                    <div className={styles.icon}>
                    <a className={styles.link} href="https://meu-site-seven-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.iconContente} />
                    </a>
                    <a className={styles.link} href="https://meu-site-seven-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.iconContente} />
                    </a>   
                    <a className={styles.link} href="https://meu-site-seven-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.iconContente} />
                    </a>
                    </div>
                    
                </div>
            </div>

            <div className={styles.conteinercontent2}>
                <p className={styles.subTitutlo4}>Copyright@2024 | Todos os direitos reservados a ACB Saúde</p>
                <a className={styles.link} href="https://meu-site-seven-ashen.vercel.app/" target="_blank" rel="noopener noreferrer">By: thiagomouradev.com.br</a>
            </div>
        </section>

    );
};

export default Footer;