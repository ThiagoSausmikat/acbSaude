import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Corrigir importação
import styles from "./styles.module.css";
import logo from "../../assets/logoDourada.png";

import '@fontsource-variable/jost'; // Verifique se o pacote está instalado corretamente

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.contentLogo}>
                <Link to={"/home"} onClick={closeMenu}>
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
                    <Link  to={"/"} onClick={closeMenu}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link  to={"/quem-somos"} onClick={closeMenu}>Quem Somos</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to={"/home"} onClick={closeMenu}>Skills</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to={"/home"} onClick={closeMenu}>Contato</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
