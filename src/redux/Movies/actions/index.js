export function changeMoviesList(movies) {
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
            search: text
        }
    }
}