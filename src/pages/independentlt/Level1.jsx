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
                                    <a href="https://drive.google.com/file/d/1REDyNRQi5vGOZOHuD-A1UB5vx9jeyc_w/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1sWVXA69nk3RjRYuY66i127pALWYHy3gW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="https://drive.google.com/file/d/1ijIG5FNQ2RcAFov25zBIstsCvJvqKAvk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="https://drive.google.com/file/d/1kFMkrzMLOtr4thvgp37REoN7fC5NUakK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1OrOqh3xYV14TGYlxnZP2rEruDLdSReXk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1LYlRvs9zPk3fC-OYSRwSASRhPF-qQCAY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #1
                                    </a>
                                    <a href="https://drive.google.com/file/d/1wwbLUP_YvfycC651dnywzF_2yfDHs6_t/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio #2
                                    </a>
                                    <a href="https://drive.google.com/file/d/1PlsM1PZ4qvQvnTpunV91OfwDfTrjRFEe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/13uwtIeq0ogqRQwGm9bYsjI1VYh-LgBfq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1xTjV2_weiNuj1C_iedSBZ6OfnLQpdeZ2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/15gvP6Gg-j_zFI5Z2P32p2a7Z_LIuTcxU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1G9PFTQOqkdn2kO6oN_slN3Gri2iE4u95/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rxTex6pqgZR1mUmloX-OIZjar4uEO0NH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1bQhcP5ctO5DQ6Ag0R7z4eCUyzpgB8GhN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1biFt4n34QDF2XhDOhqpGyRTxOU0NC1c2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1L5IdQnFd_pPyJyacLcV_ovcEvQ513NyN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1WIMcvnki9WIKlKHD_MC7_3HsqWDOLiAs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/17-7l6U6Q55__qiwNVg8EcVgbFacipusb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1mhP6dgS1VJd2gkwBPcBTZyyoIkt3Eq0g/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1SRXMxnXiu1TV9l2bPJzOHVbUUO8YCiRO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1B3Nyd32N-z3jbtrZvvUN0JWmyvh87vRC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1i8alXWDFaUSF-8FtZV8lBLZqhuQbNsOR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1icBzCGWDZO3KohKI6EjXP92rd1xDEZkE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1trwZIBMSlBtUuw7XY6NI_fYkaAIj6Kbr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1NNgCJfpxhdvhv2pKkJGaCHwApIcow1Bx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1vO12HINb6NlwKBVA5OKRNSPNMUqG5vhE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1RDOeyKAeVd3VtzMxtQXHAOzDBaUZnfHn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1oxdamQstEQJXGDiul3jpBwRxaVLQOS0B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1IRocvcvTK59JnQ-Ly6w3wvcCWUGsL9Ow/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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
                                    <a href="https://drive.google.com/file/d/1uGeJS37CNhCXLcKBlS0Yyv_AazUG9bgF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Activity
                                    </a>
                                    <a href="https://drive.google.com/file/d/1KSVeBxc7kAxZLqp6B_ddTBld6VI_cI7X/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
                                        Audio
                                    </a>
                                    <a href="https://drive.google.com/file/d/1is8e5k57yzmu1fHxn4fIcnp1BO1QnuRG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="acc-btn">
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