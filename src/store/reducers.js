import { combineReducers } from "redux";
import { ADD_TO_FAVOURITES, 
         REMOVE_FROM_FAVOURITES, 
         ADD_TO_WATCH_LATER, 
         REMOVE_FROM_WATCH_LATER, 
         ADD_COMMENT, 
         SORT_ASC_RATING, 
         SORT_DESC_RATING,
         SORT_DEFAULT_RATING,
         SELECT_ASC_RATING,
         SELECT_DESC_RATING,
         SELECT_DEFAULT_RATING, 
         FILTER_GENRES} from "./actions";
import movies from "../movies-2020s";

const initialMovies = movies;
const sortedMovies = [...initialMovies];
const initialSelectSort = 'default';
const initialFavouritesState = [];
const initialWatchLaterState = [];
const initialCommentsState = [{}];
const initialFilterGenres = [];

const favouritesReducer = (state = initialFavouritesState, action) => {
    switch (action.type){
        case ADD_TO_FAVOURITES:
            return [...state, action.payload];
        case REMOVE_FROM_FAVOURITES:
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
}

const watchLaterReducer = (state = initialWatchLaterState, action) => {
    switch (action.type){
        case ADD_TO_WATCH_LATER:
            return [...state, action.payload];
        case REMOVE_FROM_WATCH_LATER:
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
}

const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type){
        case ADD_COMMENT:
            const {id, comment} = action.payload;
            const isExistsAlready = state.findIndex(movie => movie.id == id);
            if (isExistsAlready != -1){
                return state.map(movie => {
                    if (movie.id == id){
                        return {
                            ...movie,
                            comments: [...movie.comments, comment]
                        }
                    }
                    return movie;
                })
            }
            else{
                return [...state, {
                    id: id,
                    comments: [comment]
                }]
            }
        default:
            return state;
    }
}

const sortedMoviesReducer = (state = sortedMovies, action) => {
    switch (action.type){
        case SORT_ASC_RATING:
            return [...sortedMovies].sort((movie1, movie2) => movie1.rating - movie2.rating);
        case SORT_DESC_RATING:
            return [...sortedMovies].sort((movie1, movie2) => movie2.rating - movie1.rating);
        case SORT_DEFAULT_RATING:
            return [...initialMovies];
        default:
            return state
    }
}

const selectSortReducer = (state = initialSelectSort, action) => {
    switch (action.type){
        case SELECT_ASC_RATING:
            return 'asc';
        case SELECT_DESC_RATING:
            return 'desc';
        case SELECT_DEFAULT_RATING:
            return 'default';
        default:
            return state;
    }
}

const filterGenresReducer = (state = initialFilterGenres, action) => {
    switch (action.type){
        case FILTER_GENRES:
            const genre = action.payload;
            const isExistsAlready = state.indexOf(genre);
            if (isExistsAlready != -1){
                return state.filter(g => g != genre);
            }
            else{
                return [...state, genre];
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    favourites: favouritesReducer,
    watchLater: watchLaterReducer,
    comments: commentsReducer,
    sortedMovies: sortedMoviesReducer,
    selectSort: selectSortReducer,
    filterGenres: filterGenresReducer
})

export default rootReducer;