import './Header.css';
import { Link } from 'react-router-dom';
import {CartIcon,FavIconSelected,HomeIcon} from '../StyledLinks/StyledLinks';


function Header(props){

    return(
        <>
            <header className='headerWrapper'>
                <nav>
                    <div className="headerContentwrapper">
                        <Link to='/'><HomeIcon/>HOME</Link>
                        <div className="headerRight">
                            <Link to='/favorites'>Favorties <FavIconSelected/></Link>
                            <Link to='/cart'><CartIcon/></Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;