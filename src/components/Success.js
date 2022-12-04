import celebration from "./images-plus/celebration.gif"
import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAddedPainting } from "../redux/gallerySlice";
import { motion } from 'framer-motion';


const Success = () => {
    const dispatch = useDispatch();
    const reset = () => {
        dispatch(resetAddedPainting())
    }
    return (
        <motion.div className="container-lg mt-2"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: '100%', transition: { duration: 0.4 } }}
        >
            <div className='text-end'>
                <Link to="/">
                    <Button onClick={reset} variant="danger" ><AiFillCloseCircle /></Button>{' '}
                </Link>
            </div>
            <div className="text-center">
                <h1>THANKS FOR SUPPORTING ART!</h1>
                <h5 className="text-warning bg-dark py-3">You have a month to do the payment</h5>
                <img src={celebration}
                    width="30%"
                    alt="Celebration" />
            </div>
        </motion.div>
    );
}

export default Success;