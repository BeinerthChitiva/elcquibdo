import "./Footer.css"
import elclogo from "../images/elclogo.png"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    return(
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content-1">
                            <li>
                                <span>ELC</span>
                            </li>
                            <li>
                                English Learning Center
                            </li>
                            <li>
                                <a href="tel:3203204536" className="special">
                                    <FontAwesomeIcon icon={faPhone}/> &nbsp; (320)-320-4536
                                </a>
                            </li>
                            <li>
                                <a href="mailto:elc@gmail.com" className="special">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    &nbsp; elc@gmail.com
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-content-2">
                            <li>Links</li>
                            <li>
                                <a href="#home" className="special">Quienes Somos</a>
                            </li>
                            <li>
                                <a href="#home" className="special">Cursos</a>
                            </li>
                            <li>
                                <a href="#home" className="special">Servicios</a>
                            </li>
                            <li>
                                <a href="#home" className="special">Eventos / Programas</a>
                            </li>
                            <li>
                                <a href="#home" className="special">Blog</a>
                            </li>
                        </ul>

                        <ul className="footer-content-2">
                            <li>Horario De Atención</li>
                            <li>Lunes - Viernes: 9:00AM - 9:00PM</li>
                            <li>Sábado: 9:00AM - 19:00PM</li>
                            <li>Domingo: Cerrado</li>
                        </ul>

                        <ul className="footer-content-2">
                            <img src={elclogo} alt="elclogo" className="elclogo"/>
                        </ul>

                    </div>
                    <div className="copyright">
                        Designed By&nbsp;BeinerthChitivaM.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;