

export const decrementCartItem = (id) => {
    return { type: 'Decrement_Cart_Item' , payload: id };
};