import React from "react";
import { useSelector } from "react-redux";
import styles from './FilterGenres.module.scss';

const genres = ['Horror',
                'Supernatural',
                'Action',
                'Science Fiction',
                'Comedy',
                'Drama',
                'Crime',
                'Mystery',
                'Thriller',
                'Adventure',
                'Fantasy',
                'War',
                'Superhero',
                'Family',
                'Teen',
                'Romance',
                'Spy',
                'Historical',
                'Political',
                'Animated',
                'Sports',
                'Musical',
                'Biography',
                'Noir',
                'Dance',
                'Documentary',
                'Live Action',
                'Erotic',
                'Legal',
                'Short',
                'Satire',
                'Western',
                'Slasher',
                'Martial Arts',
                'Performance',
                'Independent',
                'Disaster',
                'Found Footage'];

export default function FilterGenres({handleChangeCheckbox}){
    const checkedGenres = useSelector((state) => state.filterGenres);

    return(
        <>
            <form className={styles.genres}>
                {genres.map(genre => (
                    <label className={styles.genre} key={genre}>
                        <input type="checkbox" name={genre} onChange={handleChangeCheckbox} defaultChecked={checkedGenres.includes(genre)}/>
                        {genre}
                    </label>
                ))}
            </form>
        </>
    )
}