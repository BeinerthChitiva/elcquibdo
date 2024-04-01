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
                                    <a href="https://drive.google.com/file/d/1gvFUiF5Y9tn9nnWtqlab6-8nnTc1MHW2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1ydg35vdf4_dz-TCKEsFFuR87uBYFLORK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1U59L-_c4FK-qaPxk63vm6-6aRSbq-mSV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1adu6zHpSU8nZXRc-JeCfmYpZgSx6P-0G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1HMq1ttipAK4gMXu2kwfYfXPxIlz4-_oK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1SSEO2ThWMsunF3k5LSE17B7JgWlfDTFo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1pgLHKYXjgaMG8rkbtbutzY-lU1zuCwtB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1LtccuK49UzszmRzru4lFWxxEKTTD0fM7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1ZH4elaQ-DH4LRbLTRaCLrAZ3DCm2l5hx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1hEtD7T-w-J1dam1jMNdyJiSKXHokZiF1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/11aRF14s-zpOW8GzjM3VevOZQYaQ-SdvF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1qLd1XpLckZ39nT-fmhlHorTPcDBw1noc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1KwzgDAkkCfYv07Ro7oeNYNQsL8cGlXNB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/12-yDiU46TzBhcT7rXUMdUTwOjF2ObfXK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1BMN5pojwZv82mmf4NTSGM4FnGrsokCnM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1E2eLUhG9XG7c3gs0rlk_ZGxfoO3PGktU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1dt-kP2K1m3G4c7El6SKbYMIiMcjRY207/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1t2YpKTojciux6Tq2lvghRiETVHXnvcnc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1h0yHvHXDUoh3pDhSrhBbAPVt_OgVhpAT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1vTOAtjZH3zeChXfVHvZKFXnEGZRuiv67/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Q2RqDW4MRv9BW2dqVy3t5RNsDfWQPRuu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1Gtv2XAYrspYM60Wgr2-3eg2AF6C2UJvK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rU0YNgh7NPYDv8eNTmL_cEKwwks2Ialv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/13PNMJKwOxzAKvPojV04O69pWpBUOec0a/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1JiIDpwr_6XcH_6eR4VZ0Xr0t5wSvQ1fC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Gs3hCeaw_n_gshayMAL4CNE-NL4xDt6x/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1K6QcPl4wYCvqlFMfo4WhQd2eqkRyImFv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1f0yfnM3XXI1Ixc74BStwZ2eSEALXCUl1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1o7lMiRVNd78Dgg8d4BKN5A0xpxo7gcbz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rE9_e1bzs3xGVvg-osDyON5iM_cj_t2w/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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