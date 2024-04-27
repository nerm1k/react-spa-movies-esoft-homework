import React from "react";
import { useDispatch, useSelector } from "react-redux";
import movies from "../../movies-2020s";
import FilmCard from "../FilmCard/FilmCard";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater } from "../../store/actions";

export default function FilmsPage({}){
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

    return(
        <>
            {movies.map((movie) => {
                return(
                    <FilmCard key={movie.id} id={movie.id} href={movie.href} title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract}  toggleFavourite={toggleFavourite} isFavourite={favourites.includes(movie.id) ? true : false}
                    toggleWatchLater={toggleWatchLater} isWatchLater={watchLater.includes(movie.id) ? true : false}/>
                )
            })}
        </>
    )
}