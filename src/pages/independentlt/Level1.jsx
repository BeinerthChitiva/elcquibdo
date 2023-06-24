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

function Level1(){
    return(
        <>
            <HeroPages name="ILT - Unscramble"/>
            <div className="container">
                <h3 className="ilt-maintitle">Unscramble - Level 1</h3>
                <div className="ilt-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #1
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-The-History-of-video-games-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble01/audio1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble01/audio2.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answer-1.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #2
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-The-Story-of-Radio-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble02/audio1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble02/audio2.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #3
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-About-Chocolate-and-Its-History-activity-3.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble03/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answers-1.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #4
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-Project-Mercury-Activity-1.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Audio-1.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answer.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #5
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-The-Story-of-Apollo-13-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble05/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answer-1-1.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #6
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-Guitar-Heroes-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble06/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answers-2.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #7
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-Nigerian-Film-Festival-in-Paris-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble07/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answers-3.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #8
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-Blind-Boy-Defines-His-Life-with-Music-activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble08/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answer-2.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #9
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/5-YEAR-OLD-GIRL-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble09/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/Answers-4.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Unscramble #10
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/A-Little-Exercise-Is-Better-Than-None-Activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/01-unscramble/unscramble10/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/2019/08/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
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

export default Level1;