import './ProductCard.css';
import {FavIconSelected, ColorOptions} from '../StyledLinks/StyledLinks';
import {Link} from 'react-router-dom';

function ProductCard({id, name, desc, color, type, image, price, isFavorite}){

    return(
        <>
            <Link to={`/product/${id}`} className="CardWrapper">
                <main>
                    <section>
                        <header>{type}
                            <aside>
                                {isFavorite ?
                                    <FavIconSelected key={`iconSelected${id}`} />
                                :
                                    null
                                }
                            </aside>
                        </header>
                    </section>
                    <section>
                        <figure><img src={image} alt={name} /></figure>
                    </section>
                    <section>
                        <h3>{name}</h3>
                        <h5>{desc}</h5>
                        <section><ColorOptions color={color} /> <ColorOptions /> <ColorOptions color={color} /></section>
                        <section>{price}</section>
                    </section>
                </main>
            </Link>
        </>
    );
}

export default ProductCard;