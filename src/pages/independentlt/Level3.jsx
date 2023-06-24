import "./IndependentStyles.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/Footer";

function Level3(){
    return(
        <>
            <HeroPages name="ILT - Understanding Words"/>
            <div className="container">
                <h3 className="ilt-maintitle">Understanding Words - Level 3</h3>
                <div className="ilt-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #1
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words01/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words01/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words01/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #2
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words02/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words02/audio1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words02/audio2.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words02/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #3
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words03/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words03/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words03/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #4
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words04/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words04/audio1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words04/audio2.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words04/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #5
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words05/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words05/audio1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words05/audio2.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words05/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #6
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words06/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words06/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words06/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #7
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words07/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words07/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words07/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #8
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words08/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words08/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words08/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #9
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words09/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words09/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words09/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding Words #10
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words10/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words10/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/03-understanding-words/understanding-words10/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Level3;