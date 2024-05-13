export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ADD_TO_WATCH_LATER = 'ADD_TO_WATCH_LATER';
export const REMOVE_FROM_WATCH_LATER = 'REMOVE_FROM_WATCH_LATER';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SORT_ASC_RATING = 'SORT_ASC_RATING';
export const SORT_DESC_RATING = 'SORT_DESC_RATING';
export const SORT_DEFAULT_RATING = 'SORT_DEFAULT_RATING';
export const SELECT_ASC_RATING = 'SELECT_ASC_RATING';
export const SELECT_DESC_RATING = 'SELECT_DESC_RATING';
export const SELECT_DEFAULT_RATING = 'SELECT_DEFAULT_RATING';
export const FILTER_GENRES = 'FILTER_GENRES';


export const addToFavourites = (movie) => ({
    type: ADD_TO_FAVOURITES,
    payload: movie
})

export const removeFromFavourites = (id) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: id
})

export const addToWatchLater = (movie) => ({
    type: ADD_TO_WATCH_LATER,
    payload: movie
})

export const removeFromWatchLater = (id) => ({
    type: REMOVE_FROM_WATCH_LATER,
    payload: id
})

export const addComment = (id, comment) => ({
    type: ADD_COMMENT,
    payload: {
        id: id,
        comment: comment
    }
})

export const sortAscRating = () => ({
    type: SORT_ASC_RATING
})

export const sortDescRating = () => ({
    type: SORT_DESC_RATING
})

export const sortDefaultRating = () => ({
    type: SORT_DEFAULT_RATING
})

export const selectAscRating = () => ({
    type: SELECT_ASC_RATING
})

export const selectDescRating = () => ({
    type: SELECT_DESC_RATING
})

export const selectDefaultRating = () => ({
    type: SELECT_DEFAULT_RATING
})

export const filterGenres = (genre) => ({
    type: FILTER_GENRES,
    payload: genre
})