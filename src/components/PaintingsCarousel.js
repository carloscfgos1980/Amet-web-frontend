import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const PaintingsCarousel = () => {
    const paintingsData = useSelector(state => state.data.paintingsData);
    const apiData=useSelector(state=>state.data.mockData);
    console.log('apiData', apiData);


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
                            // console.log("reserved", painting.reserved)
                            return (
                                <Carousel.Item key={painting.id}>
                                    <div className="container-sm">
                                        <div >{painting.reserved && <h3 className='btn btn-dark btn-sm text-warning' >RESERVED</h3>}</div>
                                    </div>

                                    <Link to={`/art/${painting.title}`}>
                                        <img
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


/*
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

*/