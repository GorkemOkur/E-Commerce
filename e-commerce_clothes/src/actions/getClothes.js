import Axios from "axios";

export const getClothes = () => dispatch => {
    dispatch({ type: 'Get_Clothes_Start'});
    Axios.get('https://60bd404cb8ab3700175a04ca.mockapi.io/e-commerce-clothes/item')
    .then(response => dispatch({ type: 'Get_Clothes_Success' , payload: response.data   }) )
    .catch(error   => dispatch({ type: 'Get_Clothes_Error'   , payload: error           }) );
};