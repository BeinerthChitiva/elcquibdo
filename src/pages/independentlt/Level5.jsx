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

function Level5(){
    return(
        <>
            <HeroPages name="ILT - What's The Main Idea"/>
            <div className="container">
                <h3 className="ilt-maintitle">What's The Main Idea - Level 5</h3>
                <div className="ilt-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #1
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea01/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea01/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea01/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #2
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea02/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea02/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea02/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #3
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea03/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea03/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea03/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #4
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea04/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea04/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea04/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #5
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea05/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea05/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea05/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #6
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea06/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea06/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea06/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #7
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea07/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea07/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea07/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #8
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea08/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea08/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea08/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #9
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea09/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea09/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea09/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    What's The Main Idea #10
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea10/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea10/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/05-whats-the-main-idea/whats-the-main-idea10/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
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

export default Level5;