import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const setActive = ({isActive}) => isActive ? "active-link" : "";

export default function Layout(){
    return(
        <>
            <header>
                <span className={styles.link}><NavLink to="/" className={setActive}>Все фильмы</NavLink></span>
                <span className={styles.link}><NavLink to="/search" className={setActive}>Поиск</NavLink></span>
            </header>
            <main>
                <Outlet />
            </main>
            <Sidebar />
            <footer>
                2024
            </footer>
        </>
    )
}