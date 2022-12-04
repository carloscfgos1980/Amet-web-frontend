import { motion } from 'framer-motion';


const VideoArt = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            VideoArt


            
        </motion.div>
    );
}

export default VideoArt;