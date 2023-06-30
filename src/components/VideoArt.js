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
                <h1 className="display-5 text-center my-3 ">Video Art</h1>
                <div className='px-5 py-2'>
                    <p className='lead lead text-start'>
                        “I create video-arts with  "blender" app and video editing. They are based on the idea of complementing the stories that I capture on my canvases. It's like fabulating, starting from reality as a joke with myself, thinking a about the concept of magical realism. I think everything like a drawing in motion. The idea always starts in my mind as if it had a paper and pencil. Painting as a reaction to the social and cultural environment where I am, intertwined as a spectator, as-well as actor, channeling and trying to interpret the social feeling by taking it to my imagination.”</p>
                    <p className='lead lead text-start'>
                        “I believe that a creative person should start his ideas at the center and then expand to the global. That's my strategy: open a book to readers, show them a world they probably don't know. The visual aesthetic is handmade. In that sense, it is not in my creative interest to follow a conventional animation, but rather to follow that line of art brut as an outsider.  I use a lot of cyclical repetition like a loop. It is just like watching Cuban state-owned networks, same type of news all the time. The feeling of being trapped in time. Surrealism in its purest form where reality is always stranger than fiction.”
                    </p>
                </div>
                <div className="col-text-center col-sm-5 my-3">
                    <div className="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0NxAsZgxkMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-text-center col-sm-5" >
                    <h2 className="lead pb-4 mx-3 text-start">Title: "Keep dancing"
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">Duration: 1:37 minutes
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">The dance, dancing has many positive things but not when it is designed by the power structure to entertain the minds and keep them away from their social and political issues. Looping is part of Cuban reality, endless chaotic situation and poor quality of life but circus keep people entertained.
                    </h2>
                </div>
                <div className="col-text-center col-sm-5" >
                    <h2 className="lead pb-4 mx-3 text-start">Title: "If you don't clap..."
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">Duration: 21 seconds
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">It is based on books such as “The farm rebellion” and “1984”. I play with the idea of the consequences to Cuban citizen if we don't show obedience to the regime by applauding constantly
                    </h2>
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
                    <h2 className="lead pb-4 mx-3 text-start">“The sky is falling”
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">Duration: 30 seconds
                    </h2>
                    <h2 className="lead pb-4 mx-3 text-start">It is an alert to totalitarian power over population, by borrowing the phrase from the children's story “The sky is going to fall and the king must know”
                    </h2>
                </div>
            </div>







        </motion.div>
    );
}

export default VideoArt;