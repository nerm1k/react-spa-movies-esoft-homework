import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout(){
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Sidebar />
            <Footer />
        </>
    )
}