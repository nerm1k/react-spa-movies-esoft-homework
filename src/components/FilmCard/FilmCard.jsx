import React from "react";

export default function FilmCard({title, cast, genres, description}){
    return(
        <div className="film">
            <div className="film__title">
                {title}
            </div>
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