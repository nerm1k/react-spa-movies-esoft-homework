import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <h1>Страницы не существует. На главную <Link to="/"></Link></h1>
    )
}