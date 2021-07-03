const INITIAL_STATE = {
    clothes:    [],
    favorites:  JSON.parse(localStorage.getItem('favorites')) || [] ,
    cart:       JSON.parse(localStorage.getItem('eCommerceCart')) || {} ,
    isLoading:  false,
    message:    ''
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'Get_Clothes_Start':
            return { ...state, isLoading: true , message: ''};
        case 'Get_Clothes_Success':
            return { ...updateState(state), clothes: action.payload, isLoading: false };
        case 'Get_Clothes_Error':
            return { ...state, isLoading: false , message: action.payload };
        case 'Add_Favorites':
            return addFavorites(state, action.payload);
        case 'Add_Cart':
            return addCart(state, action.payload);
        case 'Increment_Cart_Item':
            return incrementCartItem(state, action.payload);
        case 'Decrement_Cart_Item':
            return decrementCartItem(state, action.payload);
        case 'Delete_Cart_Item':
            return deleteCartItem(state, action.payload);
        default:
            return updateState(state);
    }
};

function addFavorites(state, id){
    if(state.favorites.includes(id)){
        const newFav = [...state.favorites].filter( f => f !== id );
        localStorage.setItem('favorites', JSON.stringify(newFav));
        return { ...state, favorites: newFav };
    }else{
        const newFav = [ ...state.favorites , id];
        localStorage.setItem('favorites', JSON.stringify(newFav));
        return { ...state, favorites: newFav };
    }
}

function addCart(state, id){
    const newCart = { ...state.cart , [id]:1 };
    localStorage.setItem('eCommerceCart', JSON.stringify(newCart));
    return { ...state, cart: newCart };
}

function incrementCartItem(state, id){
    state.cart[id] = state.cart[id] + 1;
    localStorage.setItem('eCommerceCart', JSON.stringify(state.cart));
    return { ...state, cart: {...state.cart} };
}

function decrementCartItem(state, id){
    if(state.cart[id] !== 1 ){
        state.cart[id] = state.cart[id] - 1;
        localStorage.setItem('eCommerceCart', JSON.stringify(state.cart));
        return { ...state, cart: {...state.cart} };
    }
    return state;
}

function deleteCartItem(state, id){
    const updatedCart = Object.fromEntries(
        Object.entries(state.cart).filter( ([key,val],i) => parseInt(key) !== parseInt(id) )
    );
    localStorage.setItem('eCommerceCart', JSON.stringify(updatedCart));
    return { ...state, cart: updatedCart };
}

function updateState(state){
    let updatedFavorites = state.favorites;

    if( !(state.favorites.toString() === JSON.parse(localStorage.getItem('favorites')).toString()) ){
        updatedFavorites = JSON.parse(localStorage.getItem('favorites'));
    }

    return {...state, favorites: updatedFavorites, cart: JSON.parse( localStorage.getItem('eCommerceCart') ) };
}