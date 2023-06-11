import "./Testimony.css"
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/Footer";
import cyntoya from "../../images/cyntoya.jpg"
import alex from "../../images/alex.jpg"
import armando from "../../images/armando.jpg"
import caroline from "../../images/caroline.jpg"
import jeff from "../../images/jeff.jpg"
import ceobeinerth from "../../images/ceobeinerth.png"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


function Testimony(){
    return(
        <>
            <HeroPages name="Testimonies"/>
            <div className="container">
                <div className="test-main">
                    <p>
                        The English Learning Center has been carrying out special and meaningful programs based on education and bilingualism.
                        We have always involved native speakers and given them an important role in the academic programs.
                        Here we have some testimonies from them and from other organizations recognizing our great job:
                    </p>
                </div>
                <div className="test-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "dodgerblue"}}>
                                    Cyntoya McCall
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="accordion-item">
                                    <img src={cyntoya} alt="" className="accordion-img"/>
                                    <p style={{color: "black"}}>
                                        I've been working at the English Learning Center (ELC) since January of 2018 and I must say that this has been
                                        a transformative experience for me. I help coordinate bilingual projects run by the ELC. In addition to this,
                                        I also have the opportunity to teach a group of amazing students who are eager to learn English.
                                        Teaching this group of students has been the best part of my experience and I am grateful to have been able
                                        to build positive relationships with the students that will extend beyond my time here.I enjoy working at the
                                        ELC because it feels good to be a part of a staff that is fully dedicated to providing a quality English
                                        education to the people in Chocó. The director, Beinerth Chitiva, is passionate about education and you
                                        can't help but to feel inspired in his presence. He encourages the staff to be leaders and wants us
                                        to have input in the vision of the ELC. Since the ELC is well connected with a number of
                                        bilingual projects, it's consistently growing. The teachers working at the ELC graduated top in
                                        their university and are committed to learning and growing in English education. We all work hard as
                                        a staff to give students the best foreign language experience using exceptional teaching strategies.
                                        I cannot begin to express how much I have learned since I began working here. The staff has also been
                                        extremely helpful during my transition to life in Quibdó.The community of Quibdó is very welcoming.
                                        It's relatively small, so many people know each other. It has not been too difficult for me to build community. 
                                        In a way, I feel at home. People care about each other and their interactions with each other are genuine.
                                        The population is predominantly Afro-Colombian and as an African-American, I consider it a blessing to be able to
                                        connect with other communities of the African-diaspora.I would like to thank the ELC for providing me with such an enriching experience.
                                        I highly recommend volunteering for this organization if you are interested in having a full Spanish-immersion experience and being
                                        a part of a team that makes a difference in their community.
                                    </p>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "dodgerblue"}}>
                                    Armando Rodriguez
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <img src={armando} alt="" className="accordion-img"/>
                                <p>
                                    My experience working with the ELC in Quibdó, Colombia was amazing. I was able to work with a staff that was patient, helpful and understanding
                                    who were always willing and ready to answer any questions when needed. I loved interacting with the various teachers throughout Quibdó who always
                                    made me feel welcomed, even some going as far as cooking me food and giving me a parting gift. The experience I had in Quibdó, Colombia was eye
                                    opening and life changing to the point that I am planning to return in the future as a volunteer or whatever role becomes available.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "dodgerblue"}}>
                                    Jonathan Jeffers
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <img src={jeff} alt="" className="accordion-img"/>
                                <p>
                                    My name is Jonathan Jeffers and I am a native Philadelphian from the United States. In 2017, I had the opportunity to work with ELC and the team there.
                                    Some of the highlights I will illustrate for the readers include my experience working with the team at ELC and about the community of Chocó, Colombia.
                                    I will express my thoughts in a threefold manner encompassing notes about ELC, the resourcefulness of the ELC team and finally the culture of ELC.
                                    The ELC team is a group of individuals that work together towards the betterment of English in Chocó through developing and implementing active teaching
                                    strategies within the communities they touch. ELC is powered by the guidance of Beinerth Chitiva Mosquera and executed by the various ELC team members.
                                    It is said that to be successful one must learn to utilize the tools of knowing how to be knowledgeable and resourceful. And ELC organization does just this.
                                    They provide the knowledge and resources to set students and teachers on the path to be successful. The keys to advancement within the English language are readily
                                    available for those that cross paths and are influenced by The ELC organization.
                                    Next, working with the ELC team has been immensely beneficial both personally and professionally for myself. I spoke before about being knowledgable and resourceful
                                    and I will continue to use these two examples as they are imperative for success. As a member of the ELC team, I was given practical teaching material from the eyes
                                    of a native Spanish speaker to help guide and assist my students towards better understanding. And this is very important. Much of the learning material that Beinerth
                                    provides is through the eyes of native Spanish learners eyes viewing English. Because English is natural for me, with my native language sometimes it is difficult to 
                                    think first in Spanish then to English. As a result, when trying to overcoming challenges on my own I wasn't able to provide a solution until ELC provided the proper
                                    resources to help me teach from a native's eyesight. This was a huge breakthrough resource and still to this day as I continue to teach in Colombia in a different
                                    department I utilize the resources I gained from ELC. And because of this, I say well done ELC and kudos to the programs and activities they are implementing.
                                    Lastly, I will express my thoughts about the culture within the organization of ELC. More words that I will begin to express would not suffice but allow me to
                                    paint a few for the readers. ELC is an extension of the community of Chocó which is in itself a community filled with warm and friendly faces. And thus is ELC.
                                    ELC is a team of warm welcoming individuals with an authentic and genuine nature. Working with them was an opportunity to become more included in the community of Chocó.
                                    From this, I have had the opportunity to learn from the culture and assimilate better to life in Colombia thanks to ELC and the team.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "dodgerblue"}}>
                                    Alexandré Worthington
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <img src={alex} alt="" className="accordion-img"/>
                                <p>
                                    “My time at ELC was a tremendous opportunity that I hope many more will come to enjoy and benefit from. I learned so much about teaching and the local community.
                                    The staff are overwhelmingly friendly and supportive. I would definitely choose to volunteer to work in Quibdó with the ELC again!”
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "dodgerblue"}}>
                                    Caroline Mervaille
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <img src={caroline} alt="" className="accordion-img"/>
                                <p>
                                    Working at the ELC has been such a great experience. From participating in the first immersion camp to assessing and helping other English teachers of the area,
                                    teaching and dealing with conversation clubs, working with my colleagues at ELC has been more than a matter of collaboration, ideas sharing and good vibes than
                                    anything else. And in fact, the results can be seen on the students, who are motivated and feel that learning English is like a game.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <hr/>
                <h2>Beinerth Chitiva</h2>
                <div className="test-testimonies">
                    <div className="ceo-img">
                        <img src={ceobeinerth} alt="" className="testimonies-img"/>
                    </div>
                    <div className="ceo-text">
                        <p className="ceo-text-p">
                            El Centro para el aprendizaje del Inglés está liderado por profesionales comprometidos con la región que aportan significativamente
                            a su desarrollo educativo, y esto ha sido reconocido por diversas instituciones, tal como lo muestran estos artículos y entrevistas:
                        </p>
                        <ul className="ceo-text-ul">
                            <li>
                                <a href="https://www.lasillavacia.com/historias/silla-nacional/colombia-esta-lejos-de-su-meta-de-biling%C3%BCismo-pero-en-quibdo-se-abre-una-ventana/">
                                    • LaSillaVacia (Beinerth y el sueño de un Chocó Bilingüe)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.colfuturo.org/beinerth-chitiva-y-su-apuesta-por-el-bilinguismo-en-el-choco">
                                    • Colfuturo (Beinerth y su apuesta por el bilingüismo en el Chocó)
                                </a>
                            </li>
                            <li>
                                <a href="http://blogs.eltiempo.com/afrocolombianidad/2013/05/20/un-mundo-sin-negros/">
                                    • El Tiempo (Un Mundo Sin Negros)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Testimony;