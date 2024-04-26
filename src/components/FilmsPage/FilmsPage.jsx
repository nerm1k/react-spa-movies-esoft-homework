import React from "react";
import movies from "../../movies-2020s";
import FilmCard from "../FilmCard/FilmCard";
import { Link } from "react-router-dom";


export default function FilmsPage({}){
    return(
        <>
            {movies.map((movie, i) => {
                return(
                    <Link key={i} to={`films/${movie.href}`}>
                        <FilmCard title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract}/>
                    </Link>
                )
            })}
        </>
    )
}