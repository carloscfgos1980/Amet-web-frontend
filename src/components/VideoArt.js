import { motion } from 'framer-motion';
import React from 'react';




const VideoArt = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >

            <div className="row justify-content-center align-items-center py-3 bg-warning">
                <h1 className="display-5 text-center mt-2 mb-4 ">Video Art</h1>
                <div className="col-text-center col-sm-5 my-3">
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0NxAsZgxkMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-text-center col-sm-5" >
                    <h2 className="display-6 pb-4 mx-3 text-start">hm veritatis. Ducimus exercitationem, nihil porro expedita excepturi labore numquam aliquid dolores! </h2>
                </div>
                <div className="col-text-center col-sm-5" >
                    <h2 className="display-6 pb-4 mx-3 text-start">hm veritatis. Ducimus exercitationem, nihil porro expedita excepturi labore numquam aliquid dolores! </h2>
                </div>
                <div className="col-text-center col-sm-5 my-3">
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NKTig9Lf3N8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-text-center col-sm-5 my-3">
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MRYjFsagED4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-text-center col-sm-5" >
                    <h2 className="display-6 pb-4 mx-3 text-start">hm veritatis. Ducimus exercitationem, nihil porro expedita excepturi labore numquam aliquid dolores! </h2>
                </div>
            </div>







        </motion.div>
    );
}

export default VideoArt;