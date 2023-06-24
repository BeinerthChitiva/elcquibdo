import "./MobileMenu.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu-content">
        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={onClose} />
        <div className="menu-structure">

            <hr className="mobile-menu-hr"/>

            <div className="ms-link">
                <div className="ms-left">
                    <h3 className="left-link-title">Quienes Somos</h3>
                </div>
                <div className="ms-right">
                    <div className="link-group">
                        <ul>
                            <Link to="/quienes-somos" className="nav-link">Historia ELC</Link>
                            <Link to="/metodologia" className="nav-link">Metodología</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/staff" className="nav-link">Staff</Link>
                            <Link to="/testimonios" className="nav-link">Testimonios</Link>
                            <Link to="/contacto" className="nav-link">Contacto y Ubicación</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mobile-menu-hr"/>

            <div className="ms-link">
                <div className="ms-left">
                    <h3 className="left-link-title">Cursos De Inglés</h3>
                </div>
                <div className="ms-right">
                    <div className="link-group">
                        <ul>
                            <Link to="/cursos" className="nav-link">Cursos</Link>
                            <Link to="/saber11" className="nav-link">Preparación Saber 11</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/especiales" className="nav-link">Cursos Especiales</Link>
                            <Link to="/descuentos" className="nav-link">Programa De Descuentos</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mobile-menu-hr"/>

            <div className="ms-link">
                <div className="ms-left">
                    <h3 className="left-link-title">Nuestros Servicios</h3>
                </div>
                <div className="ms-right">
                    <div className="link-group">
                        <ul>
                            <Link to="/inmersion" className="nav-link">Campos De Inmersión</Link>
                            <Link to="/tutorias" className="nav-link">Tutorías</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/toeic" className="nav-link">TOEIC</Link>
                            <Link to="/unica" className="nav-link">UNICA</Link>
                            <Link to="/amity" className="nav-link">AMITY</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/club" className="nav-link">Club De Conversación</Link>
                            <Link to="/herramientas" className="nav-link">Herramientas De Aprendizaje</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mobile-menu-hr"/>

            <div className="ms-link">
                <div className="ms-left">
                    <h3 className="left-link-title">Eventos / Programas</h3>
                </div>
                <div className="ms-right">
                    <div className="link-group">
                        <ul>
                            <Link to="/seedsofchange" className="nav-link">Seeds Of Change 2023</Link>
                            <Link to="/movingforward" className="nav-link">Moving Forward 2017</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/choco" className="nav-link">Choco Innovative 2016</Link>
                            <Link to="/nuqui" className="nav-link">Nuqui Innovative 2015</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/spellingbee" className="nav-link">Spelling Bee</Link>
                            <Link to="/englishday" className="nav-link">English Day</Link>
                        </ul>
                    </div>
                    <div className="link-group">
                        <ul>
                            <Link to="/becas" className="nav-link">Fondo De Becas Oscar Gonzalez</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mobile-menu-hr"/>

            <div className="ms-link">
                <div className="ms-left">
                    <h3 className="last-left-link-title">
                        <Link to="/blog" className="nav-link" style={{color: "dodgerblue"}}>Blog</Link>
                    </h3>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default MobileMenu;