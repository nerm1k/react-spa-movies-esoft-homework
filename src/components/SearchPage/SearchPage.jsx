import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilmCard from "../FilmCard/FilmCard";
import movies from "../../movies-2020s";

export default function SearchPage(){
    const [queryFilms, setQueryFilms] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);

    function findFilms(e){
        e.preventDefault();
        setSearchedMovies(movies.filter(movie => {
            return movie.title.toLowerCase().includes(queryFilms.toLowerCase());
        }));
        setQueryFilms('');
    }
    console.log(searchedMovies);
    return(
        <>
            <form onSubmit={findFilms}>
                <input type="text" name="query-films" onChange={(e) => setQueryFilms(e.target.value)} value={queryFilms}/>
                <button type="submit">Искать</button>
            </form>
            {searchedMovies != '' && 
                searchedMovies.map((movie, i) => 
                    <Link key={i} to={`../films/${movie.href}`}>
                        <FilmCard title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract}/>
                    </Link>
            )}
        </>
    )
}