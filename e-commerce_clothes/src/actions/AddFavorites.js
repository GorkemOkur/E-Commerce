

export const addFavorites = (id) => {
    console.log('Action ID: ', id);
    return { type: 'Add_Favorites', payload: id };
};