import Home from '../Pages/Home/Home';
import Favorites from'../Pages/Favorites/Favorites';
import Cart from'../Pages/Cart/Cart';
import Product from'../Pages/Product/Product';


export const HeaderRoutes = [
    {
        path:'/',
        name:'Home',
        component: <Home />,
        isExact: true,
    },
    {
        path:'/favorites',
        name:'Favorites',
        component: <Favorites />,
        isExact: true,
    },
    {
        path:'/cart',
        name:'Cart',
        component: <Cart />,
        isExact: true,
    },
    {
        path:'/product/:id',
        name:'Product',
        component: <Product />,
        isExact: false,
    }
];

export default HeaderRoutes;