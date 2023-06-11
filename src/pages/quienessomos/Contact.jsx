import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages"
import "./Contact.css"
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaInstagramSquare } from 'react-icons/fa';

function Contact(){
    return(
        <>
            <section className="contact">
                <HeroPages name="Contacto y Ubicación"/>
                <div className="container">
                    <div className="contact-text">
                        <h2>CONTÁCTANOS!!!</h2>
                        <h1>Estamos ubicados en la Calle 31 # 5-21 Sede Anexa al IEFEM. Quibdó - Chocó</h1>
                        <h3>
                            <FontAwesomeIcon icon={faPhone}/> Teléfonos: <span>6714563 - 3203204536</span>
                        </h3>
                        <h3>
                            <FontAwesomeIcon icon={faEnvelope}/> Correo Electrónico: <span>elcquibdo@gmail.com</span>
                        </h3>
                        <h3>
                            <FontAwesomeIcon icon={faGlobe}/> Página Web: <a href="www.elcquibdo.com">www.elcquibdo.com</a>
                        </h3>
                        <h3>
                            <FaFacebook icon={FaFacebook} /> Facebook: <a href="https://www.facebook.com/elc.quibdo">
                                ELC Facebook
                                </a>
                        </h3>
                        <h3>
                            <FaInstagram icon={FaInstagramSquare}/> Instagram: <a href="https://www.instagram.com/elcquibdo/">
                                ELC Instagram
                                </a>
                        </h3>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Contact;