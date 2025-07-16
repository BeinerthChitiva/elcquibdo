import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./ILT.css"
import iltl1 from "../../images/ilt-l1.png"
import iltl2 from "../../images/ilt-l2.png"
import iltl3 from "../../images/ilt-l3.png"
import iltl4 from "../../images/ilt-l4.png"
import iltl5 from "../../images/ilt-l5.png"

function ILT() {
    return (
        <>
            <HeroPages name="Independent Learning Tools" />
            <div className="container">
                <div className="ilt-guides">
                    <h3 className="ilt-guides-title">GUIDES</h3>
                    <div className="guides-voa">
                        <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/Guia-Para-el-Correcto-Uso-de-VOA-audiofiles-English.pdf" target="_blank" rel="noopener noreferrer" className="guides-btn">
                            Guía para el correcto uso de VOA Audio Files - English
                        </a>
                        <a href="http://elcquibdo.com/wp-content/uploads/independent-learning-tools/Guia-Para-el-Correcto-Uso-de-VOA-audiofiles-Spanish.pdf" target="_blank" rel="noopener noreferrer" className="guides-btn">
                            Guía para el correcto uso de VOA Audio Files - Español
                        </a>
                    </div>
                    <div className="guides-act-pt1">
                        <a href="/ilt-unscramble" rel="noopener noreferrer">
                            <img src={iltl1} alt="ILT - Level 1" />
                        </a>
                        <a href="ilt-fill-in-the-blanks" rel="noopener noreferrer">
                            <img src={iltl2} alt="ILT - Level 2" />
                        </a>
                        <a href="ilt-understanding-words" rel="noopener noreferrer">
                            <img src={iltl3} alt="ILT - Level 3" />
                        </a>
                    </div>
                    <div className="guides-act-pt2">
                        <a href="ilt-understanding-as-many" rel="noopener noreferrer">
                            <img src={iltl4} alt="ILT - Level 4" />
                        </a>
                        <a href="ilt-main-idea" rel="noopener noreferrer">
                            <img src={iltl5} alt="ILT - Level 5" />
                        </a>

                        <a href="ilt-main-idea" rel="noopener noreferrer">
                            <img src={iltl5} alt="ILT - Level 5" />
                        </a>
                    </div>
                </div>
                <hr />
                <div className="ilt-fundamentals">
                    <h3 className="ilt-funds-title">BASIC FUNDAMENTALS OF ENGLISH</h3>
                    <div className="ilt-funds-structure">
                        <div className="funda-left">
                            <h4 className="funda-subtitle">100 Most Common Verbs In English</h4>
                            <p>
                                In order for our users to identify and learn basic vocabulary and
                                expressions, here we post the 100 most common verbs in English and
                                useful expressions with pronunciation.
                            </p>
                            <a href="http://elcquibdo.com/wp-content/uploads/100-most-common-verbs-in-english.mp3" target="_blank" rel="noopener noreferrer" className="fund-audio">
                                Audio
                            </a>
                            <table className="ilt-table">
                                <thead>
                                    <tr>
                                        <th colspan="2">100 Most Common Verbs In English</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.) Be</td>
                                        <td>51.) Believe</td>
                                    </tr>
                                    <tr>
                                        <td>2.) Have</td>
                                        <td>52.) Hold</td>
                                    </tr>
                                    <tr>
                                        <td>3.) Do</td>
                                        <td>53.) Bring</td>
                                    </tr>
                                    <tr>
                                        <td>4.) Say</td>
                                        <td>54.) Happen</td>
                                    </tr>
                                    <tr>
                                        <td>5.) Go</td>
                                        <td>55.) Must</td>
                                    </tr>
                                    <tr>
                                        <td>6.) Can</td>
                                        <td>56.) Write</td>
                                    </tr>
                                    <tr>
                                        <td>7.) Get</td>
                                        <td>57.) Provide</td>
                                    </tr>
                                    <tr>
                                        <td>8.) Would</td>
                                        <td>58.) Sit</td>
                                    </tr>
                                    <tr>
                                        <td>9.) Make</td>
                                        <td>59.) Stand</td>
                                    </tr>
                                    <tr>
                                        <td>10.) Know</td>
                                        <td>60.) Lose</td>
                                    </tr>
                                    <tr>
                                        <td>11.) Will</td>
                                        <td>61.) Pay</td>
                                    </tr>
                                    <tr>
                                        <td>12.) Think</td>
                                        <td>62.) Meet</td>
                                    </tr>
                                    <tr>
                                        <td>13.) Take</td>
                                        <td>63.) Include</td>
                                    </tr>
                                    <tr>
                                        <td>14.) See</td>
                                        <td>64.) Continue</td>
                                    </tr>
                                    <tr>
                                        <td>15.) Come</td>
                                        <td>65.) Set</td>
                                    </tr>
                                    <tr>
                                        <td>16.) Could</td>
                                        <td>66.) Learn</td>
                                    </tr>
                                    <tr>
                                        <td>17.) Want</td>
                                        <td>67.) Change</td>
                                    </tr>
                                    <tr>
                                        <td>18.) Look</td>
                                        <td>68.) Lead</td>
                                    </tr>
                                    <tr>
                                        <td>19.) Use</td>
                                        <td>69.) Understand</td>
                                    </tr>
                                    <tr>
                                        <td>20.) Find</td>
                                        <td>70.) Watch</td>
                                    </tr>
                                    <tr>
                                        <td>21.) Give</td>
                                        <td>71.) Follow</td>
                                    </tr>
                                    <tr>
                                        <td>22.) Tell</td>
                                        <td>72.) Stop</td>
                                    </tr>
                                    <tr>
                                        <td>23.) Work</td>
                                        <td>73.) Create</td>
                                    </tr>
                                    <tr>
                                        <td>24.) May</td>
                                        <td>74.) Speak</td>
                                    </tr>
                                    <tr>
                                        <td>25.) Should</td>
                                        <td>75.) Read</td>
                                    </tr>
                                    <tr>
                                        <td>26.) Call</td>
                                        <td>76.) Allow</td>
                                    </tr>
                                    <tr>
                                        <td>27.) Try</td>
                                        <td>77.) Add</td>
                                    </tr>
                                    <tr>
                                        <td>28.) Ask</td>
                                        <td>78.) Spend</td>
                                    </tr>
                                    <tr>
                                        <td>29.) Need</td>
                                        <td>79.) Grow</td>
                                    </tr>
                                    <tr>
                                        <td>30.) Feel</td>
                                        <td>80.) Open</td>
                                    </tr>
                                    <tr>
                                        <td>31.) Become</td>
                                        <td>81.) Walk</td>
                                    </tr>
                                    <tr>
                                        <td>32.) Leave</td>
                                        <td>82.) Win</td>
                                    </tr>
                                    <tr>
                                        <td>33.) Put</td>
                                        <td>83.) Offer</td>
                                    </tr>
                                    <tr>
                                        <td>34.) Mean</td>
                                        <td>84.) Remember</td>
                                    </tr>
                                    <tr>
                                        <td>35.) Keep</td>
                                        <td>85.) Love</td>
                                    </tr>
                                    <tr>
                                        <td>36.) Let</td>
                                        <td>86.) Consider</td>
                                    </tr>
                                    <tr>
                                        <td>37.) Begin</td>
                                        <td>87.) Appear</td>
                                    </tr>
                                    <tr>
                                        <td>38.) Seem</td>
                                        <td>88.) Buy</td>
                                    </tr>
                                    <tr>
                                        <td>39.) Help</td>
                                        <td>89.) Wait</td>
                                    </tr>
                                    <tr>
                                        <td>40.) Talk</td>
                                        <td>90.) Serve</td>
                                    </tr>
                                    <tr>
                                        <td>41.) Turn</td>
                                        <td>91.) Die</td>
                                    </tr>
                                    <tr>
                                        <td>42.) Start</td>
                                        <td>92.) Send</td>
                                    </tr>
                                    <tr>
                                        <td>43.) Might</td>
                                        <td>93.) Expect</td>
                                    </tr>
                                    <tr>
                                        <td>44.) Show</td>
                                        <td>94.) Build</td>
                                    </tr>
                                    <tr>
                                        <td>45.) Hear</td>
                                        <td>95.) Stay</td>
                                    </tr>
                                    <tr>
                                        <td>46.) Play</td>
                                        <td>96.) Fall</td>
                                    </tr>
                                    <tr>
                                        <td>47.) Run</td>
                                        <td>97.) Cut</td>
                                    </tr>
                                    <tr>
                                        <td>48.) Move</td>
                                        <td>98.) Reach</td>
                                    </tr>
                                    <tr>
                                        <td>49.) Like</td>
                                        <td>99.) Kill</td>
                                    </tr>
                                    <tr>
                                        <td>50.) Live</td>
                                        <td>100.) Remain</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="funda-right">
                            <h4 className="funda-subtitle">Useful Classroom Expressions</h4>
                            <a href="http://elcquibdo.com/wp-content/uploads/2018/05/USEFUL-CLASSROOM-EXPRESSION-1.mp3" target="_blank" rel="noopener noreferrer" className="fund-audio">
                                Audio
                            </a>
                            <ul>
                                <li>1.) What's the word for “marcador” in English?</li>
                                <li>2.) What's “notebook” in Spanish?</li>
                                <li>3.) How do you spell “notebook”?</li>
                                <li>4.) How do you pronounce this word?</li>
                                <li>5.) What does “single” mean?</li>
                                <li>6.) How do you use “single” in a sentence?</li>
                                <li>7.) Could/Can you repeat that please?</li>
                                <li>8.) Speak more slowly, please.</li>
                                <li>9.) Can I borrow your pen?</li>
                                <li>10.) May/Can I go to the bathroom?</li>
                            </ul>
                            <a href="http://oedb.org/ilibrarian/50_essential_resources_for_esl_students/" target="_blank" rel="noopener noreferrer" className="fund-audio">
                                50 ESSENTIAL RESOURCES FOR ESL STUDENTS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ILT;