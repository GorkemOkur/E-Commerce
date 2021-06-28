import './Home.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../ProductCard/ProductCard';
import { getClothes } from '../../../actions/getClothes';


function Home(props){

    useEffect( () => { props.getClothes(); } , [] );

    return(
        <>
            <h1>HOME</h1>
            <div className="cardContainer">
                {
                    props.clothes.map( c => (
                        <Card key={c.id} {...c} isFavorite={props.favorites.includes(c.id)} />
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
)(Home);