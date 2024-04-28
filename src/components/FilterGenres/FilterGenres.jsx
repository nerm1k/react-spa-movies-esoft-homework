import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres } from "../../store/actions";

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
    // const dispatch = useDispatch();

    // function handleChange(e){
    //     const genre = e.target.name;
    //     dispatch(filterGenres(genre));
    // }

    return(
        <>
            <form>
                {genres.map(genre => (
                    <label key={genre}>
                        <input type="checkbox" name={genre} onChange={handleChangeCheckbox} defaultChecked={checkedGenres.includes(genre)}/>
                        {genre}
                    </label>
                ))}
            </form>
        </>
    )
}