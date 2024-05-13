import React from "react";
import styles from './SearchFilmInput.module.scss';

export default function SearchFilmInput({findFilms, setQueryFilms, queryFilms}){
    return(
        <>
            <form className={styles.search} onSubmit={findFilms}>
                <input type="text" className={styles['search-film']} name="query-films" onChange={(e) => setQueryFilms(e.target.value)} value={queryFilms}/>
                <button className={styles.button} type="submit">Искать</button>
            </form>
        </>
    )
}