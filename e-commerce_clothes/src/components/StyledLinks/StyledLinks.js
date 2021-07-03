import styled from 'styled-components';
import { FaShoppingCart, FaHeart, FaHome} from "react-icons/fa";

const CartIcon = styled(FaShoppingCart)`
    color: ${ (props) => props.color ? `${props.color}` : '#b5b5b5' };
`;

const FavIconSelected = styled(FaHeart)`
    color: ${ (props) => props.color ? `${props.color}` : '#b5b5b5' };
`;

const HomeIcon = styled(FaHome)`
    color: ${ (props) => props.color ? `${props.color}` : '#b5b5b5' };
`;

const ColorOptions = styled.span`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: .2rem .4rem;
    vertical-align: middle;
    background-color: ${ (props) => props.color ? props.color : '#b5b5b5' }
`;

const AddFavorite = styled.button`
    display: inline-block;
    color: ${ (props) => props.color ? `${props.color}` : '#b5b5b5' };
    background-color: #000;
    width: 20rem;
    padding: .5rem 1rem;
    border: ${ (props) => props.color ? `${props.color}` : '#b5b5b5' } 2px solid;
    border-radius: .4rem;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0 0 0;
    cursor: pointer;
    &:hover{
        background-color: ${ (props) => props.color ? `${props.color}` : '#000' };
        color: #b5b5b5;
    }
`;

const AddCart = styled(AddFavorite)`
    margin: 2rem 0 0 0;
`;

export {CartIcon, FavIconSelected, HomeIcon, ColorOptions, AddFavorite, AddCart};