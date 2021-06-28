import './Favorites.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../ProductCard/ProductCard';
import { getClothes } from '../../../actions/getClothes';


function Favorites(props){
    
    useEffect( () => { props.getClothes(); } , [] );
    
    return(
        <>
            <h1>Favorites</h1>
            <div className="cardContainer">
                {
                    props.clothes.map( c => (
                        props.favorites.includes(c.id)
                            ? <Card key={c.id} {...c} isFavorite={props.favorites.includes(c.id)} />
                            : null
                    ))
                }
            </div>
        </>
    );

}

const mapStateProps = state => ({
    clothes:    state.clothes,
    favorites:  state.favorites,
    isLoading:  state.isLoading,
    message:    state.message
});

export default connect(
    mapStateProps,
    {
        getClothes
    }
)(Favorites);