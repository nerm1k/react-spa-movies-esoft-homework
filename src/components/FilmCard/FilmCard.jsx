import React from "react";
import { Link } from "react-router-dom";
import styles from './FilmCard.module.scss';
import ButtonCategory from "../ButtonCategory/ButtonCategory";

export default function FilmCard({id, fromSearch, href, thumbnail, title, cast, genres, description, rating, toggleFavourite, isFavourite, toggleWatchLater, isWatchLater}){

    return(
        <div className={styles.film}>
            <div className={styles.film__title}>
                {fromSearch ? 
                    <Link to={`../films/${id}`}>
                        {title}
                    </Link> 
                    : 
                    <Link to={`films/${id}`}>
                        {title}
                    </Link>
                }
            </div>
            <div className={styles.film__rating}>
                Рейтинг: {rating}
            </div>
            <div className={styles.film__image}>
                <img src={thumbnail} alt="" />
            </div>
            <div className={styles.film__category}>
                <ButtonCategory isActive={isFavourite} onClick={() => toggleFavourite(id)}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </ButtonCategory>
                <ButtonCategory isActive={isWatchLater} onClick={() => toggleWatchLater(id)}>
                    <i className="fa-solid fa-bookmark"></i>
                    <i className="fa-regular fa-bookmark"></i>
                </ButtonCategory>
            </div>
            <div className={styles.film__cast}>
                Актеры:
                <ul>
                    {cast.map((actor, i) => 
                        <li key={i}>{actor}</li>
                    )}
                </ul>
            </div>
            <div className={styles.film__genres}>
                Жанры:
                <ul>
                    {genres.map((genre, i) => 
                        <li key={i}>{genre}</li>
                    )}
                </ul>
            </div>
            <div className={styles.film__description}>
                {description}
            </div>
        </div>
    )
}