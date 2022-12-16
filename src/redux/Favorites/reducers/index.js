
const initialState = {
    favorite: [{
        title: 'New List',
        movies: []
    }
    ]
};

export default function reducerFavorite(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAV_LIST':
            const movie = action.payload.movies.find(item => item?.imdbID === action.payload?.id);
            const existInList = state.favorite[0].movies.some(item => item?.imdbID === action.payload?.id)
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: existInList ? [...state.favorite[0].movies] : [...state.favorite[0].movies, movie]
                }]
            }
        case 'DELETE_FROM_FAV_LIST':
            console.log(action)
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: state.favorite[0].movies.filter((e) => {
                        return e.imdbID !== action.payload.id;
                    })
                }]
            }
        case 'CHANGE_LIST_TITLE':
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    title: action.payload.title
                }]
            }


        default:
            return state;
    }
}