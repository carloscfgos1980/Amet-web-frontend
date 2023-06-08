import { motion } from 'framer-motion';

const ArtPerformance = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="row bg-warning">
                <div className="text-center">
                    <h3 className="lead text-dark py-3 fw-bold">Amet's performance</h3>
                    <div className='mx-3'>
                        <img className="derecha" width='500px' src="./images/performance/amet-performance_2012.jpg" alt="Amet wall" />
                        <p>Title: “I will sit down to meditate”</p>
                        <p>Cienfuegos, Cuba. 2015</p>
                        <p>
                            The main goal of this performance that I presented in 2013 is based on the question: how long can one remain calm when they survive in an environment that threatens her/him? This question starts from the individual subject being but the true intention is also to search an answer of Cuban society as whole. I made this performance in my hometown, Cienfuegos, Cuba.  The scenery of the action takes place in the center of the city, specifically on the most busy pedestrian crossing in the city.
                            I sat there for 5 minutes, in a meditative pose. The duration of the performance is neither realted to being cowardly and brave, just being human.
                            Traffic laws are part of the discourse of the performance metaphor as the functioning of society.
                        </p>
                        <img className="izquierda" width='500px' src="./images/performance/Amet_performance_2017.jpg" alt="Amet KBola" />
                        <p>Title: “Act of violence year”</p>
                        <p>Cienfuegos, Cuba. 2015</p>
                        <p>
                            This performative action in one of its concepts tries to call the attention of a society. People are  becoming less and less sensitive to what happens around them. At the same time bring the attention about the fact that force can disfigure an object, idea, person, etc. I used an iron barrel to store water. I ditached from the commun use of this barrel.
                            I started to hit the barrel with a heavy hammer. People were just watching. After a while few of the expectators requested the hammer and started to hit the barrel. I was a like a liberatin act of all this frustration we carry inside.
                            An act of violence also  disfigured the one in power towards something inhuman. The gestures of the faces in those movements, the use of force, creates a type of expression and transformation.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ArtPerformance;