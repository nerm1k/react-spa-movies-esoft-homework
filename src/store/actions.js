export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ADD_TO_WATCH_LATER = 'ADD_TO_WATCH_LATER';
export const REMOVE_FROM_WATCH_LATER = 'REMOVE_FROM_WATCH_LATER';

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
