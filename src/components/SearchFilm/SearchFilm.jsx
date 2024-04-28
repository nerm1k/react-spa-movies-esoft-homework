import React from "react";

export default function SearchFilm({findFilms, setQueryFilms, queryFilms}){
    return(
        <>
            <form onSubmit={findFilms}>
                <input type="text" name="query-films" onChange={(e) => setQueryFilms(e.target.value)} value={queryFilms}/>
                <button type="submit">Искать</button>
            </form>
        </>
    )
}