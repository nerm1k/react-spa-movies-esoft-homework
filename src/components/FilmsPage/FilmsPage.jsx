import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import movies from "../../movies-2020s";
import FilmCard from "../FilmCard/FilmCard";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater } from "../../store/actions";
import SortRatingSelect from "../SortRatingSelect/SortRatingSelect";
import styles from './FilmsPage.module.scss';

export default function FilmsPage({}){
    // const [sortRating, setSortRating] = useState();
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);
    const movies = useSelector((state) => state.sortedMovies);

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

    // function handleChange(e){
    //     const sort = e.target.value;
    //     console.log(sort);
    //     if (sort == 'asc'){
    //         movies.sort((a, b) => a.rating - b.rating);
    //         setSortRating('asc');
    //     }
    //     else if (sort == 'desc'){
    //         movies.sort((a, b) => b.rating - a.rating)
    //         setSortRating('desc');
    //     }
    //     else{
    //         setSortRating('default');
    //     }
    // }

    return(
        <>
            <div className={styles.select_sort}>
                <SortRatingSelect />
            </div>
            <div className={styles.container}>
                {movies.map((movie) => {
                    return(
                        <FilmCard key={movie.id} id={movie.id} href={movie.href} title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract} thumbnail={movie.thumbnail} rating={movie.rating} toggleFavourite={toggleFavourite} isFavourite={favourites.includes(movie.id) ? true : false}
                        toggleWatchLater={toggleWatchLater} isWatchLater={watchLater.includes(movie.id) ? true : false}/>
                    )
                })}
            </div>
        </>
    )
}