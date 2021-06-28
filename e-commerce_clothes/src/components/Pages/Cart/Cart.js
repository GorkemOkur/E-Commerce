import './Cart.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClothes } from '../../../actions/getClothes';
import { incrementCartItem as increment } from '../../../actions/incrementCartItem';
import { decrementCartItem as decrement} from '../../../actions/decrementCartItem';

function Cart(props){

    useEffect( () => { props.getClothes(); }, [] );

    const cartIDs = Object.keys(props.cart);

    let price = 0;

    if(props.clothes)
        props.clothes.map( c=> {
            if(cartIDs.includes(c.id)){
                console.log("Type of Price before: ", price);
                price += Number(c.price * props.cart[c.id]);
                console.log("Type of Price after: ", price);
            }
        });

    return(
        <>
            <h1>Cart</h1>
            <ul className="CartWrapper">
            {
                props.isLoading ? <p>Loading...</p>
                    :
                        props.clothes && (
                            props.clothes.map( c => (
                                cartIDs.includes(c.id) ? 
                                <li key={c.id} className="CartItem">
                                    <p>{c.name}</p>
                                    <p> <span onClick={ (e) => props.decrement(c.id) } >-</span> <span onClick={ (e) => props.increment(c.id) }>+</span> </p>
                                </li>
                                : null
                            ))
                        )
                        
            }
            </ul>

            { 
                props.isLoading ? null : <p>Total: {price}$</p>
            }

            {
                console.log(props.cart)
            }
        </>
    );

}

const mapStateProps = state => ({
    clothes:    state.clothes,
    cart:       state.cart,
    isLoading:  state.isLoading,
    message:    state.message
});

export default connect(
    mapStateProps,
    {
        getClothes,
        increment,
        decrement
    }
)(Cart);