import React from "react";
import { Link } from "react-router-dom";
import styles from './SimilarFilmCard.module.scss';

export default function SimilarFilmCard({id, title, thumbnail, rating }){
    return(
        <div className={styles["similar-film"]}>
            <Link to={`../../films/${id}`}>
                <div className={styles["similar-film__title"]}>
                    {title}
                </div>
            </Link>
            <div className={styles["similar-film__rating"]}>
                Рейтинг: {rating}
            </div>
            <div className={styles["similar-film__thumbnail"]}>
                <img src={thumbnail} alt=""/>
            </div>
        </div>
    )
}