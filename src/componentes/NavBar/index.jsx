import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./styles.module.css";
import logo from "../../assets/logoDourada.png";
import '@fontsource-variable/jost';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.contentLogo}>
                <NavLink to={"/"} onClick={closeMenu}>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </NavLink>
            </div>

            <div className={styles.hamburger} onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
                <li className={styles.navItem}>
                    <NavLink
                        to={"/"}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={"/quem-somos"}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Quem Somos
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={"/servicos"}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Serviços
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={"/trabalheConosco"}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Trabalhe Conosco
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={"/faleConosco"}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                    >
                        Fale Conosco
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
