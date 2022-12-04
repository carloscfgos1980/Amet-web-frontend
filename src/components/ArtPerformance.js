import { motion } from 'framer-motion';

const ArtPerformance = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            Performance
        </motion.div>
    );
}

export default ArtPerformance;