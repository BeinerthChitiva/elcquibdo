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
                                    <a href="https://drive.google.com/file/d/1xmaIR1uA208KMUwJBsB-roEvknWDbyYu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Q2kEArHgbigEZz4pbKmoBUoMAwzvviSa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Yxu9aZzhB1RlIlkVuzI6jCh4Q-tnL1ma/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1ifHUk22xu7cz09zdCN4iAVijIYxSHo31/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1fyQ2SW18whZQYLGpmtRvvZDwOrGabG0w/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/170RLIk2jKJC4KMPKatl19BVR0uMN8zjB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1ybjVirJzUNuCNAoM2ZG4W-3dQvGd2F3G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Y7cYpkUj_wXJbsxFUdDU0nluCbRQvLo4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1d7lmsKQp9HFfSrOSRyMlKFvJF50lQnMb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1eYjYf1pN3atZX3DqlIZugGu3cZvohTIt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/12YZCLjkTjYzVvzEy2hlGJ1ejRbSErsFk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1JFRt6R-MR7nBlmP9RLwrMAsT4N0kFc8N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1KZLKMX4bf0PW47g_Z5rd78-Td4VXpyVo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/19eu317IdRxzLw6JZ8G21DWR5BFupi6LH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rFhu-lY_L-IBEs2BdpXjBurA_1NwIHfM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/10BorVIerJhm9C98xs6rv0W1eginpJQYm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1JLhiC1yasFK9FQPWM6Jeb8tHb7lLFtSj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1iXk44clvfU5jRn2XlnhxN0CJkIua7lSc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1IOmYAGSBFa8k-O_Dj_8-8fx33xMQF9_q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1D25wflhNm35HJJ4OAS-42aM5Jp6GAIzY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/14Xr6DYRqB_4oLj2xZk5XFg_XJ643p7zR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/16tkWpBqPnJeAUPsYq6owqweODeW3xj5s/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1-x1SthpKbua2UFUyG184A2_iMheoSIpI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Np13oNzNpzw_u3YJCMzPnfWBJyGk2sOs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1Bo6zei02H2sOvP5GWfu7oMqidqZB-QM7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1UU2rJRIFfrLBZBqJOkySFrJVfxOUCWDT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1wh0uhigtLCOe8z8q45dTT-0OI-cIL559/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1W7jd9s4cz9Fh22B8YIAR7Dxvr2yRnkyz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1ER1yAytVe9tNdTh6ywu9tp6vMdllWKBE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1R-NSG7NrJIYFPzO3l3XN0yBi56YqT7Nf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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