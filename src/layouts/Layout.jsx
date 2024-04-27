import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const setActive = ({isActive}) => isActive ? "active-link" : "";

export default function Layout(){
    return(
        <>
            <header>
                <NavLink to="/" className={setActive}>Все фильмы</NavLink>
                <NavLink to="/search" className={setActive}>Поиск</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
            <div className="sidebar">
                <Sidebar />
            </div>
            <footer>
                2024
            </footer>
        </>
    )
}