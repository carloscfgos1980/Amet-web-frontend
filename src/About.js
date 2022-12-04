import { Accordion } from "react-bootstrap";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div className="container-lg p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="header display-5">Cuba</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <p>
                                From Cienfuegos, my city, and I was born in Cuba. I started  around 20 years ago, my step into the art world by the teaching of many art professors, which I'm very thankful for a part of  the knowledge that I have today. As an artist I'm constantly learning from the others, from their stories  mixing with my own experience as a  person and from there I start to give shape to my palette, always following the concept from raw colors and lines. From a moment I can remind you of a wall from the street full of life and struggles. It is not my intention to follow the general concept of beauty or a standard beauty that is easy to notice.
                            </p>
                            <img className="derecha" width='400px' src="./images-about/amet-wall.png" alt="Amet wall" />
                            <p>
                                In Cuba I have participated in many collective art events and solo shows but also have the joy of being co-founder of the art experimental project <a href='https://www.facebook.com/profile.php?id=100009424089335'>"Poco Bonito"</a> with Carlos Infante and other artist friends. There was our creative space and support where all the ideas was dancing in our head and brushes but also with our workshop we had a way to connect to with neighbors in the area from the  workshop which also children  and teenager was able to get close and see how we prepare our canvas and colors so in that way we made and influence in the community showing others way to create that not necessary was academic but with creativity freedom, freedom that many time  cause us political polemics with the establishment and also collateral to our gallery and with part of the incomes from the art selling. We had an event, creating  an scenery on the street where singers and bands coming from different cities  from cuba with not voice at the tv or radio the name of this project event was kbola which the  popular expression(kbola) can  meanings like saying hi or calling the attention from someone can be used on both ways when you are angry or when you are happy , this educative energies that surround us in our projects in Cuba. I was able to continue in Netherlands teaching in school name Isa Amsterdam as visual art professor teacher work that i enjoy and i combined also with my independent project as artist
                            </p>
                            <img className="izquierda" width='400px' src="./images-about/amet_kbola.jpg" alt="Amet KBola" />
                            <p>
                                Poco Bonito gallery is a place where flow in harmony diverse
                                artistic expressions as photography, painting and sculpture. Pieces
                                there explore social content themes from current Cuban reality.
                                More than a gallery, Poco Bonito is a project in which artists see
                                art as an attitude towards life; and through the creation, they
                                channel their experiences, concerns and projections for the current
                                reality. Many of the pieces appeal to the combination of formats
                                and materials near or less the world of art. In that sense, the visual
                                result is a reflection of that formal experimentation and self
                                mixture of Cuban society.
                                where all people with positive energy is welcomed, we mix art with music (NO
                                REGGEATON) and domino game. Our space works like a workshop
                                and a gallery at the same time. We also sponsor concerts of alternative cuban music,
                                hip hop and reggae mostly <a href='https://www.facebook.com/profile.php?id=100063491860763'>(K’Bolá project)</a>. Almost 3 years we have been working as
                                Poco Bonito Project. During this time we have done 7 exhibitions. We always mix art
                                with alternative Cuban and international music. There are just two
                                differents ways of réflex our ideas of inclusión, embrece the difference, to be critical
                                with racismor any other type of discrimination. Besides we use interactive techniques
                                in order to bring our art to the “walking Cuban”, we have achieved that by doing action
                                paintings and/or choosing a no tradictional location for the exhibitions. The artists who
                                are part of PB Project were selected based in the critria of being team players and to
                                have an explicit
                                attitude to artivism.
                            </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="header display-5">The Netherlands</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <img className="derecha" width='400px' src="./images-about/amet-kargadoor.jpg" alt="Amet Kargadoor" />
                            <p>I live in Holland since 2018. Integrating into a different society requires persistence and creativity. Therefore my stories and my style keep on changing. As an artist I keep on developing and I never stop learning. I combine the stories from others, scenes that I see on the street and add those to my own live experience. From there I compose my palette. I don’t offer a general concept of beauty nor an accessible style. My work is characterized by raw colors and lines that resemble brick walls with rough surfaces and street art.</p>
                            <p>I have participated in ....</p>
                            <p>Today I’m an extra curricular art teacher at the International School of Amsterdam. In my classes my goal is not to teach in an academic way, but to inspire my students to be free in their expression, similar to the spirit that our gallery in Cuba used to have. </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="header display-5">Awards</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accord">
                            <ul>
                                <li>
                                    2009 – Salon de la ciudad ,La habitacion preferidad de la
                                    realidad</li>
                                <li> 2012 – Provincial Cinema Festival “Sur Imagen”, piece:
                                    “Trance”.</li>
                                <li> 2011 – Salón “5 de Septiembre”, piece: “Kaos” (cólera),
                                    premio videoarte.
                                    Visual arts festival in central Cuba
                                    By Jorge Domínguez Morado CUBARTE PERFORMING ARTS</li>
                                <li> 2013 – Salón “5 de Septiembre”, piece: “Me sentaré a
                                    meditar” (performance).The Awarding Jury -composed by Nelson Domínguez, Nelson Herrera, Yadira
                                    Góngora, Virginia Alberdi, José A. Vincench and Andrés Domínguez-</li>

                                <li> 11.11.2015
                                    With Acto de violencia (Act of violence), a happening where artist
                                    Amet Laza Muñoz combines elements of theater and visual arts,
                                    Visuarte 2015.
                                    project top_oS 10th biennal of art havana.
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </motion.div>
    );
}

export default About;