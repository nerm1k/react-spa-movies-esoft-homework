import { act } from "react";
import { combineReducers } from "redux";
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } from "./actions";

const initialFavouritesState = [];
const initialWatchLaterState = [];

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


const rootReducer = combineReducers({
    favourites: favouritesReducer,
    watchLater: watchLaterReducer
})

export default rootReducer;