import { combineReducers } from "redux";
import reducerFavorite from "./Favorites/reducers";
import reducerMovies from "./Movies/reducers";

const mainReducer = combineReducers({
    reducerFavorite,
    reducerMovies
});

export default mainReducer;