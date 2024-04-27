import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater } from "../../store/actions";
import movies from "../../movies-2020s";
import SidebarFilmCard from "../SidebarFilmCard/SidebarFilmCard";

export default function Sidebar(){
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

    const films = movies.filter(movie => (
        favourites.includes(movie.id) || watchLater.includes(movie.id)
    ))

    return(
        <div className="sidebar__content">
            <h2>Избранные и фильмы к просмотру позже</h2>
            {films.map(film => (
                <SidebarFilmCard key={film.id} id={film.id} title={film.title} href={film.href} thumbnail={film.thumbnail} toggleFavourite={toggleFavourite} toggleWatchLater={toggleWatchLater} isFavourite={favourites.includes(film.id) ? true : false}
                isWatchLater={watchLater.includes(film.id) ? true : false} />
            ))}
        </div>
    )
}