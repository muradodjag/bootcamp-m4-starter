export const addToList = (id, movies) => ({ type: 'ADD_TO_FAV_LIST', payload: { id, movies } });
export const deleteFromList = (idx) => ({ type: 'DELETE_FROM_FAV_LIST', payload: { idx } })
export const changeTitle = (title) => ({ type: 'CHANGE_LIST_TITLE', payload: { title } })