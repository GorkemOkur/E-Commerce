

export const addCart = (id) => {
    console.log("ACTION Cart ID: ",id);
    return { type: 'Add_Cart' , payload: id };
};