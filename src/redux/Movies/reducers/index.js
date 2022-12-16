const initialState = {
    searchLine: '',
    movies: []
}

export default function reducerMovies(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_MOVE_LIST':
            return {
                ...state,
                movies: action.payload.movies
            }

        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchLine: action.payload.search
            }


        default:
            return state;
    }
}