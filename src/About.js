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
                                I was born in Cienfuegos, Cuba. My journey as an artist started around 20 ago. As an artist I'm constantly learning from everything and from anyone. It could be an artist, my beloved teachers, the nature or people walking throughout the street. My main source of inspiration is children's drawing on the sidewalk. I get tune with people stories and I allow my palette to apprehend such a rich world. I rather use raw colors and lines for this propose. It is not my intention to follow the general concept of standard beauty that is easy to notice.
                            </p>
                            <img className="derecha" width='400px' src="./images/about/amet-wall.png" alt="Amet wall" />
                            <p>
                                IIn Cuba, I have participated in solo and collective exhibitions. I am also proud of being co-founder of the art art experimental project <a href='https://www.facebook.com/profile.php?id=100009424089335' target="_blank" rel="noreferrer">"Poco Bonito"</a> with <a href='https://www.linkedin.com/in/carlos-y-infante-vera-a2b1aa14a/' target="_blank" rel="noreferrer">"Carlos Infante"</a> and other artists. We became a family. There was our creative space to give shape to all most romantic and challenged ideas, It was just not an exlusive space for art but also a way to connect to the average citizen, neighbors of all ages, especially children and teenager. They reach us out, winessing how we prepared our canvas and colors. We taught people a non traditional concept of art, beyond the academic aesthetic: freedom of creativity. Freedom is a problematic word in Cuba context due the free speech repression. Unfortunately, in 2018 we were forced to shoot this project down when the owner of the location didn't want to continue renting the place. Someone told us that it was under pressure of the political police.
                            </p>
                            <img className="izquierda" width='400px' src="./images/about/amet_kbola.jpg" alt="Amet KBola" />
                            <p>
                                We used a share of our incomes to host hip hop concert. We believe in rap as a way to denounce the political and social issues caused by the totalitarian regime in the Island. Our painting was a way to rap. All this was done under the umbrella of <a href='https://www.facebook.com/profile.php?id=100063491860763' target="_blank" rel="noreferrer">K’Bolá project</a>. It was a grass rooted project. It was one of the few spaces where artist critical lyrics where allowed to performance. We had people coming from all around the country. We also sponsor concerts of alternative cuban music, hip hop and reggae mostly. We always mix art with alternative Cuban and international music. It was our way of embrace the difference, to be critical with racism or any other type of discrimination. Besides we use interactive techniques in order to bring our art to the “average Cuban”. We have achieved that by doing action paintings and/or choosing an unorthodox location for the exhibitions. The artists who are part of PB Project were selected based in the criteria of being team players and to have an explicit attitude to artivism.After our gallery was cancelled, we could not afford to continue organizing the concerts, the gallery was oir source of producing such events.
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
                            <img className="derecha" width='400px' src="./images/about/amet-kargadoor.jpg" alt="Amet Kargadoor" />
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