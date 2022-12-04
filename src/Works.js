import { motion } from 'framer-motion';
const Works = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >Works</motion.div>
    );
}

export default Works;