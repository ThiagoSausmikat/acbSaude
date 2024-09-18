import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import logo from "../../assets/logoDourada.png";
import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Ajuste o valor conforme necessário
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza do evento ao desmontar o componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.contentLogo}>
                <Link to={"/"} onClick={closeMenu}>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </Link>
            </div>

            <div className={styles.hamburger} onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
                <li className={styles.navItem}>
                    <Link className={styles.link} to={"/"} onClick={closeMenu}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.link} to={"/quem-somos"} onClick={closeMenu}>Quem Somos</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.link} to={"/servicos"} onClick={closeMenu}>Serviços</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.link} to={"/trabalheConosco"} onClick={closeMenu}>Trabalhe Conosco</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.link} to={"/faleConosco"} onClick={closeMenu}>Fale Conosco</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
