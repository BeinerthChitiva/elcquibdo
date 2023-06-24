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

function Level4(){
    return(
        <>
            <HeroPages name="ILT - Understanding As Many"/>
            <div className="container">
                <h3 className="ilt-maintitle">Understanding As Many - Level 4</h3>
                <div className="ilt-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #1
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many01/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many01/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many01/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #2
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many02/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many02/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many02/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #3
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many03/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many03/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many03/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #4
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many04/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many04/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many04/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #5
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many05/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many05/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many05/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #6
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many06/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many06/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many06/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #7
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many07/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many07/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many07/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #8
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many08/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many08/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many08/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #9
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many09/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many09/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many09/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Understanding As Many #10
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many10/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many10/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/04-understanding-as-many/understanding-as-many10/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
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

export default Level4;