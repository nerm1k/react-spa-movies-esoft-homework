import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../FilmCard/FilmCard";
import movies from "../../movies-2020s";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater, filterGenres } from "../../store/actions";
import SearchFilm from "../SearchFilm/SearchFilm";
import FilterGenres from "../FilterGenres/FilterGenres";

export default function SearchPage(){
    const [queryFilms, setQueryFilms] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);
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
        // setQueryFilms('');
    }

    function handleChangeCheckbox(e){
        const genre = e.target.name;
        dispatch(filterGenres(genre));
        // setSearchedMovies(searchedMovies.filter(movie => genres.every(genre => movie.genres.includes(genre))));
    }

    // if (filterGenres.length > 0){
    //     const filmms = searchedMovies.filter(movie => filterGenres.every(genre => movie.genres.includes(genre)))
    //     console.log(filmms);
    //     setSearchedMovies(filmms);
    // }

    return(
        <>
            <SearchFilm findFilms={findFilms} setQueryFilms={setQueryFilms} queryFilms={queryFilms} />
            <FilterGenres handleChangeCheckbox={handleChangeCheckbox}/>
            {searchedMovies != '' && 
                searchedMovies.map((movie, i) => 
                    <FilmCard key={movie.id} id={movie.id} href={movie.href} title={movie.title} cast={movie.cast} genres={movie.genres} description={movie.extract} rating={movie.rating} toggleFavourite={toggleFavourite} isFavourite={favourites.includes(movie.id) ? true : false}
                    toggleWatchLater={toggleWatchLater} isWatchLater={watchLater.includes(movie.id) ? true : false}/>
            )}
        </>
    )
}