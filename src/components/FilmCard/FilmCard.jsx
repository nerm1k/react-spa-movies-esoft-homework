import React from "react";
import { Link } from "react-router-dom";
import './film-card.scss';

export default function FilmCard({id, href, title, cast, genres, description, rating, toggleFavourite, isFavourite, toggleWatchLater, isWatchLater}){
    // function setFavourite(){
    //     dispatch(toggleFavorites(id));
    // }

    return(
        <div className="film">
            <div className="film__title">
                <Link to={`films/${href}`}>
                    {title}
                </Link>
            </div>
            <div className="film__rating">
                {rating}
            </div>
            <button className={isFavourite ? "film__favourite favourite" : "film__favourite"} onClick={() => toggleFavourite(id)}>
                F
            </button>
            <button className={isWatchLater ? "film__watch-later watch-later" : "film__watch-later"} onClick={() => toggleWatchLater(id)}>
                W
            </button>
            <div className="film__cast">
                Актеры:
                <ul>
                    {cast.map((actor, i) => 
                        <li key={i}>{actor}</li>
                    )}
                </ul>
            </div>
            <div className="film__genres">
                Жанры:
                <ul>
                    {genres.map((genre, i) => 
                        <li key={i}>{genre}</li>
                    )}
                </ul>
            </div>
            <div className="film__description">
                {description}
            </div>
        </div>
    )
}