import React from "react";
import styles from './SimilarFilms.module.scss';
import SimilarFilmCard from "../SimilarFilmCard/SimilarFilmCard";

export default function SimilarFilms({similarFilms}){
    return(
        <div className={styles["similar-films"]}>
                <h3 className={styles["similar-films__title"]}>Фильмы с похожими категориями</h3>
                {similarFilms.map(movie => (
                    <SimilarFilmCard key={movie.id} id={movie.id} title={movie.title} thumbnail={movie.thumbnail} rating={movie.rating} />
                ))}
            </div>
    )
}