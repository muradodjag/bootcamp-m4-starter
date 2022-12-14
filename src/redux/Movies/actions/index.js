export function changeMoviesList(movies) {
    console.log('gdfgdfgdf5g4df');
    return {
        type: 'CHANGE_MOVE_LIST',
        payload: {
            movies: movies
        }
    }
}

export function changeSearch(text) {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        payload: {
            searchText: text
        }
    }
}