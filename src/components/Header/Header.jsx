import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

const setActive = ({isActive}) => isActive ? "active-link" : "";

export default function Header({}){
    return(
        <header>
            <span className={styles.link}><NavLink to="/" className={setActive}>Все фильмы</NavLink></span>
            <span className={styles.link}><NavLink to="/search" className={setActive}>Поиск</NavLink></span>
        </header>
    )
}