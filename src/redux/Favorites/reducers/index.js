
const initialState = {
    favorite: {
        title: 'New List',
        movies: []
    }

};

export default function reducerFavorite(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAV_LIST':
            const movie = action.payload.movies.find(item => item?.imdbID === action.payload?.id);
            const existInList = state.favorite.movies.some(item => item?.imdbID === action.payload?.id)
            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    movies: existInList ? [...state.favorite.movies] : [...state.favorite.movies, movie]
                }
            }
        case 'DELETE_FROM_FAV_LIST':
            console.log(action)
            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    movies: state.favorite.movies.filter((e) => {
                        return e.imdbID !== action.payload.idx;
                    })
                }
            }
        case 'CHANGE_LIST_TITLE':
            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    title: action.payload.title
                }
            }


        default:
            return state;
    }
}