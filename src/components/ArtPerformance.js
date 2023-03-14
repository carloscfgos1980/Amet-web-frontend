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
                        <p>

                            From Cienfuegos, my city, and I was born in Cuba. I started  around 20 createds ago, my step into the art world by the teaching of many art professors, which I'm very thankful for a part of  the knowledge that I have today. As an artist I'm constantly learning from the others, from their stories  mixing with my own experience as a  person and from there I start to give shape to my palette, always following the concept from raw colors and lines. From a moment I can remind you of a wall from the street full of life and struggles. It is not my intention to follow the general concept of beauty or a standard beauty that is easy to notice.
                        </p>
                        <img className="izquierda" width='500px' src="./images/performance/Amet_performance_2017.jpg" alt="Amet KBola" />
                        <p>

                            In Cuba I have participated in many collective art events and solo shows but also have the joy of being co-founder of the art experimental project <a href='https://www.facebook.com/profile.php?id=100009424089335'>"Poco Bonito"</a> with Carlos Infante and other artist friends. There was our creative space and support where all the ideas was dancing in our head and brushes but also with our workshop we had a way to connect to with neighbors in the area from the  workshop which also children  and teenager was able to get close and see how we prepare our canvas and colors so in that way we made and influence in the community showing others way to create that not necessary was academic but with creativity freedom, freedom that many time  cause us political polemics with the establishment and also collateral to our gallery and with part of the incomes from the art selling. We had an event, creating  an scenery on the street where singers and bands coming from different cities  from cuba with not voice at the tv or radio the name of this project event was kbola which the  popular expression(kbola) can  meanings like saying hi or calling the attention from someone can be used on both ways when you are angry or when you are happy , this educative energies that surround us in our projects in Cuba. I was able to continue in Netherlands teaching in school name Isa Amsterdam as visual art professor teacher work that i enjoy and i combined also with my independent project as artist
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ArtPerformance;