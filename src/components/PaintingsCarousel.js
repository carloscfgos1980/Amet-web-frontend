import { Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRegisterNum } from '../redux/gallerySlice';



const PaintingsCarousel = () => {
    const paintingsData = useSelector(state => state.data.paintingsData);

    const dispatch = useDispatch();

    let registerNumber = Date.now()
    const addRegisterNum = () => {
        dispatch(getRegisterNum(registerNumber));

    }


    return (
        <motion.div className="container-fluid bg-warning py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="row">
                <div className="text-center">
                    <h3 className="lead text-dark py-3 fw-bold">Click on the painting for details</h3>
                    <Carousel fade>
                        {paintingsData.map(painting => {
                            return (
                                <Carousel.Item key={painting.id}>
                                    <div className="container-sm">
                                        <div >{painting.reserved && <h3 className='btn btn-dark btn-sm text-warning' >RESERVED</h3>}</div>
                                    </div>

                                    <Link to={`/art/${painting.title}`}>
                                        <img
                                            onClick={() => addRegisterNum()}
                                            width='40%'
                                            src={painting.img}
                                            alt='slide'
                                        />
                                    </Link>
                                </Carousel.Item>
                            )
                        }
                        )}
                    </Carousel>
                </div>
            </div>
        </motion.div>
    );
}

export default PaintingsCarousel;


