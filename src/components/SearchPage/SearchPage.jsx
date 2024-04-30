import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../FilmCard/FilmCard";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater, filterGenres } from "../../store/actions";
import SearchFilm from "../SearchFilm/SearchFilm";
import FilterGenres from "../FilterGenres/FilterGenres";
import SortRatingSelect from "../SortRatingSelect/SortRatingSelect";
import styles from './SearchPage.module.scss';

export default function SearchPage(){
    const [queryFilms, setQueryFilms] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);
    const movies = useSelector((state) => state.sortedMovies);
    const checkedGenres = useSelector((state) => state.filterGenres);

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
        const newArray = movies.filter(movie => movie.title.toLowerCase().includes(queryFilms.toLowerCase()));
        setSearchedMovies(newArray.filter(movie => checkedGenres.every(genre => movie.genres.includes(genre))));
    }

    function handleChangeCheckbox(e){
        const genre = e.target.name;
        dispatch(filterGenres(genre));
    }

    return(
        <>
            <SearchFilm findFilms={findFilms} setQueryFilms={setQueryFilms} queryFilms={queryFilms} />
            <FilterGenres handleChangeCheckbox={handleChangeCheckbox}/>
            <SortRatingSelect />
            <div className={styles.container}>
                {searchedMovies != '' && 
                    searchedMovies.map((movie, i) => 
                        <FilmCard fromSearch={true} key={movie.id} id={movie.id} href={movie.href} thumbnail={movie.thumbnail} title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract} rating={movie.rating} toggleFavourite={toggleFavourite} isFavourite={favourites.includes(movie.id) ? true : false}
                        toggleWatchLater={toggleWatchLater} isWatchLater={watchLater.includes(movie.id) ? true : false}/>
                )}
            </div>
        </>
    )
}