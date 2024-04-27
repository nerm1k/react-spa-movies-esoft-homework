import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../FilmCard/FilmCard";
import movies from "../../movies-2020s";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater } from "../../store/actions";

export default function SearchPage(){
    const [queryFilms, setQueryFilms] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);

    function toggleFavourite(id){
        if (favourites.includes(id)){
            dispatch(removeFromFavourites(id));
        }
        else{
            dispatch(addToFavourites(id));
        }
    }

    function toggleWatchLater(id){
        if (watchLater.includes(id)){
            dispatch(removeFromWatchLater(id));
        }
        else{
            dispatch(addToWatchLater(id));
        }
    }

    function findFilms(e){
        e.preventDefault();
        setSearchedMovies(movies.filter(movie => {
            return movie.title.toLowerCase().includes(queryFilms.toLowerCase());
        }));
        setQueryFilms('');
    }

    return(
        <>
            <form onSubmit={findFilms}>
                <input type="text" name="query-films" onChange={(e) => setQueryFilms(e.target.value)} value={queryFilms}/>
                <button type="submit">Искать</button>
            </form>
            {searchedMovies != '' && 
                searchedMovies.map((movie, i) => 
                    <FilmCard key={movie.id} id={movie.id} href={movie.href} title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract}  toggleFavourite={toggleFavourite} isFavourite={favourites.includes(movie.id) ? true : false}
                    toggleWatchLater={toggleWatchLater} isWatchLater={watchLater.includes(movie.id) ? true : false}/>
            )}
        </>
    )
}