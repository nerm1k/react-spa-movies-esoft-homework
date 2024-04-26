import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({isActive}) => isActive ? "active-link" : "";

export default function Layout(){
    return(
        <>
            <header>
                <NavLink to="/" className={setActive}>Все фильмы</NavLink>
                <NavLink to="/search" className={setActive}>Поиск</NavLink>
            </header>
            <Outlet />
            <footer>
                2024
            </footer>
        </>
    )
}