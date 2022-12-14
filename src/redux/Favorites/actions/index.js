export const addToList = (id) => ({ type: 'ADD_TO_FAV_LIST', payload: { id } });
export const deleteFromList = (idx) => ({ type: 'DELETE_FROM_FAV_LIST', payload: { idx } })