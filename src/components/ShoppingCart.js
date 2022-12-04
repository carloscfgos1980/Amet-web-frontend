import { Button } from "react-bootstrap";
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const addedPainting = useSelector(state => state.data.addedPainting);
    const amount = addedPainting.length;
    return (
        <div className="text-end px-5">
            <Link to='/shopping-cart'>
                <Button width='30px' variant="warning" className="text-inline"><TiShoppingCart />  {amount}</Button>{' '}
            </Link>

        </div>
    );
}

export default ShoppingCart;