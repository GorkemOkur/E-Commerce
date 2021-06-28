import './Product.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClothes } from '../../../actions/getClothes';
import { addFavorites } from '../../../actions/AddFavorites';
import { addCart } from '../../../actions/AddCart';
import { ColorOptions , FavIconSelected, AddFavorite , AddCart } from '../../StyledLinks/StyledLinks';

function Product(props){

    const productID = useParams().id;

    console.log('productID: ',productID);

    useEffect( () => { 
        props.getClothes();
    },[]);

    const product = props.clothes.filter( c => c.id === productID )[0];

    return (
        <>
            <h1>Product</h1>
            {
                props.isLoading ? <p>Loading...</p>
                :
                    props.message ? <p>{props.message}</p>
                    :
                        product && (<div className="productWrapper">
                            <main>
                                <section>
                                    <header>{product.name} {props.favorites.includes(product.id) ? <FavIconSelected/> : null }</header>
                                    <figure><img src={product.image} alt={product.name}/></figure>
                                </section>
                                <section className="prtrs">
                                        <p><span>Description:</span> {product.desc}</p>
                                        <p><span>Price:</span> {product.price}</p>
                                        <p><span>color:</span> <ColorOptions color={product.color} /></p>
                                        <p><AddFavorite color={product.color} onClick={ (e) => props.addFavorites(product.id)  } >Add Favorite</AddFavorite></p>
                                        <p><AddCart color={product.color} onClick={ (e) => props.addCart(product.id)  } >Add Cart</AddCart></p>
                                </section>
                            </main>
                        </div>)
            }
        </>
    );
}

const mapStateProps = state => ({
    clothes:    state.clothes,
    favorites:  state.favorites,
    cart:       state.cart,
    isLoading:  state.isLoading,
    message:    state.message
});

export default connect(
    mapStateProps,
    {
        getClothes,
        addFavorites,
        addCart
    }
)(Product);