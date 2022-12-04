import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Home = () => {
    return (
        <motion.div className="Container-fluid py-3 bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-text-center col-sm-5">
                    <img className="pb-2 px-5" width='110%' src="./images-home/amet-portfolio.png" alt="Amet Portfolio" />
                </div>
                <div className="col-text-center col-sm-6" >
                    <h2 className="display-6 pb-4 mx-3 text-start">Art goes beyond the sense of beauty, it has an "... integral rol in the fight for social change and the quest for freedom of expression.</h2>
                    <h2 className="display-6 pb-4 mx-3 text-start">... Art has the power to instil empathy -between people of different races and backgrounds- across the time and space, and that compassion is necessary to justice"
                    </h2>
                    <h5 className="fw-bold text-end pt-3 me-3">Darren Walker</h5>
                    <h5 className="text-end me-3">President, Ford Fundation</h5>
                </div>
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-sm-7 text-end">
                        <h2 className="display-5">I live througout Art. I carry my notebook everywhere I go. I draw everything that catch the attention of my pupils. Children's drawings are my bigger inspiration. They have a way to read realy that is not affected by all human prejudice</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="imagen-overlay">
                            <Link to="/paintings">
                                <img width='100%' src="./images-home/amet-notebook.png" alt="Amet notebook" />
                                <div className="text-overlay">
                                    <p>click to watch more paintings</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;