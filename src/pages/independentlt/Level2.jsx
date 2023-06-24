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

function Level2(){
    return(
        <>
            <HeroPages name="ILT - Fill In The Blanks"/>
            <div className="container">
                <h3 className="ilt-maintitle">Fill In The Blanks - Level 2</h3>
                <div className="ilt-accordion">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #1
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks01/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks01/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks01/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #2
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks02/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks02/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks02/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #3
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks03/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks03/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks03/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #4
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks04/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks04/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks04/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #5
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks05/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks05/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks05/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #6
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks06/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks06/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks06/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #7
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks07/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks07/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks07/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #8
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks08/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks08/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks08/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #9
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks09/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks09/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks09/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Answers
                                    </a>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading className="accordion-header">
                                <AccordionItemButton style={{color: "black"}}>
                                    Fill In The Blanks #10
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="acc-btns">
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks10/activity.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks10/audio.mp3" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/02-fill-in-the-blanks/fill-in-the-blanks10/answers.pdf" target="_blank" rel="noopener noreferrer" className="acc-btn">
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

export default Level2;