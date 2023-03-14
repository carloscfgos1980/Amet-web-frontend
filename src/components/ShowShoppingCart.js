import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paintNotReservedAsync, removePainting } from "../redux/gallerySlice";
import { motion } from 'framer-motion';


const ShowShoppingCart = () => {
    let total = 0;
    const addedPainting = useSelector(state => state.data.addedPainting);

    addedPainting.forEach(item => {
        total += item.price;
    });

    const dispatch = useDispatch();

    const removing = (item) => {
        dispatch(removePainting(item));
        dispatch(paintNotReservedAsync(item))
    }
    return (
        <motion.div
            className='container-fluid text-center py-5'
            style={{ backgroundColor: '#F5EFF6' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <Link to='/shop' >
                <div className="text-start ms-5">
                    <Button variant="warning">back</Button>{' '}
                </div>
            </Link>
            <h1 className="display-5 fw-bold" >Shopping Cart</h1>
            {addedPainting.map(painting => {
                const imagen = painting.img
                return (
                    <div key={painting.id} className='container my-5'>
                        <div className="row justify-content-center align-items-end">
                            <div className="col-md-5 text-center">
                                <img src={require(`${imagen}`)}
                                    width="100%"
                                    alt={painting.title} />
                            </div>
                            <div className="col-md-3 text-start pt-5" >
                                <p>Title: {painting.title}</p>
                                <p>Price: {painting.price}</p>
                            </div>
                            <div
                                onClick={() => removing(painting)}
                                className="col-md-1 text-center btn btn-danger btn-lg"><BsFillTrashFill />
                            </div>
                        </div>
                    </div>
                )
            })}
            {total > 1 ?
                <div className="btn btn-lg shadow p-2 rounded text-center" >total: {total}</div>
                :
                <h3 className="text-danger">You haven't selected any piece!</h3>}
            <div className="text-end mt-5 me-5">
                <Link to="/contacts-clients">
                    {total > 1 && <h1 className="btn btn-success btn-lg px-5">RESERVE!</h1>}
                </Link>
            </div>
        </motion.div>
    );
}

export default ShowShoppingCart;