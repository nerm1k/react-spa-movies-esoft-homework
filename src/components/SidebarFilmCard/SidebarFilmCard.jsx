import React from "react";
import { Link } from "react-router-dom";
import ButtonCategory from "../ButtonCategory/ButtonCategory";
import styles from './SidebarFilmCard.module.scss';

export default function SidebarFilmCard({id, title, href, thumbnail, toggleFavourite, toggleWatchLater, isFavourite, isWatchLater}){
    return(
        <div className={styles.sidebar__film}>
            <div className={styles.sidebar__film__image}>
                <img src={thumbnail} alt="" />
                <div className={styles.sidebar__film__image__category}>
                {isFavourite && (
                    <ButtonCategory isActive={isFavourite} onClick={() => toggleFavourite(id)}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </ButtonCategory>
                )}
                {isWatchLater && (
                    <ButtonCategory isActive={isWatchLater} onClick={() => toggleWatchLater(id)}>
                        <i className="fa-solid fa-bookmark"></i>
                        <i className="fa-regular fa-bookmark"></i>
                    </ButtonCategory>
                )}
            </div>   
            </div>
            <div className={styles.sidebar__film__title}>
                <Link to={`films/${id}`}>
                    {title}
                </Link>
            </div>
        </div>
    )
}