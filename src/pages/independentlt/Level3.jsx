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
                                    <a href="https://drive.google.com/file/d/1Zv2EGFf9V8jVps65s-Z2EYJTAk0K1ioW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1GT1_CwagJv2g6zJCBpzx_ASCIUu7WJpj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/12qa-2p2YAOPp5G02JRJ5r8_14Skpt75o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/17Q5j00tCh67KMyeaMEc9KY9lVqRr9xcP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1xJYVoWFDAy0zcQ9sR3KJ5-0yicuYaET-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="https://drive.google.com/file/d/1SGXHSHTm53NncWSGGxBDHEdWmTIzWcqU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Ozqdx8nKhEpYJHj8r_yfpLFo0GluCiZY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1Xv3DaRPQd2gJd0qVSb7fa9M3hoM1F2ke/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1T4S9PDhoGYS_v8mJ1TmaMuaQWkLHeytx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1cjVD_MnUAytnRtPP0amSdNEIFKtyKrSk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1Sk3WGzYHkBo9zUn793NY018FNrnUZFwC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/13aECzdgecZvbnoZk0sfXE2kdc5nVMQyQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Iape8bgmvrpiElaAtHwUWLCwrjd12gsb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="https://drive.google.com/file/d/10Ng38o_L34zG8qWcZE6gcyR6CIJ4k4qQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1a3wvrBnbAUbT7DH503aimBC-gIUGTZgO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1kH4WGMzdzZLUXroPwDRLjvfSIKTqbdJx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="https://drive.google.com/file/d/15n_UsegbN0OHzp0_mhi4ehriwpcquz5e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Pe9IFsk7UZYQocCFdEjkcfItR6_T-s0W/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/18wxr0qAM1v-CF5YunlpPzi5NM0nCY8u_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1k502kV4TCs3kHShPGMX7h5vRI4zg8Bsw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1HxEPQK1KNwEJbH22Vq0JDLOl4MQBr2C6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1lwnUvPvVaD9tqmyxxXpR2mtv73VPULzs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rtAIhuEFElDsnuOxw5h8pUGNZ6G5pjCh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1fMwRqH5nkgEPhlw5L8EnYcLoI9P6O_pK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1MYjsNw7x76vuRaxTd-0J5ZlCu11I7SDo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1VHbwWgrMcObODrpKvDOQtzyzCEex5YH-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1H1_sZHUfjNW5yCYbtCd41I1Cb2jWT81x/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1eprpob3dVFg3c-zMmiaJ3t-ewM_rugzD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/11Gif7OiY-Wo3rUStrpY0T6MoqRjKR6f2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/15hRfLPLWj9QfNlh49MioZ-zxrFv3nUm7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1FdebSitpGtIRBBOcNzYshMDp-0V5oyPR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1Cd2ZfO3ir_kiprXRHb_d2wHWPGVQzEfz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1uJWCYghK3YwglpP47jEnj7fGBt_dXbNu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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