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
            return {
                ...state,
                favorite: [{
                    ...state.favorite[0],
                    movies: [...state.favorite[0].movies]
                }]
            }
        case 'DELETE_FROM_FAV_LIST':
            return {
                ...state,
                favorites: [{
                    ...state.favorite[0],
                    movies: state.favorite[0].movies.filter((e) => {
                        return e.imdbID !== action.payload;
                    })
                }]
            }


        default:
            return state;
    }
}