import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Tutor.css"
import tutoring from "../../images/tutoring.png"

function Tutor(){
    return(
        <>
            <HeroPages name="Tutorías"/>
            <div className="container">
                <div className="tutor">
                    <div className="tutor-img">
                        <img src={tutoring} alt="discount"/>
                    </div>
                    <div className="tutor-text">
                        <p>
                            El Centro Para el Aprendizaje del Inglés también te ofrece un programa de tutorías estructurado,
                            el cual busca nivelar a aquellos estudiantes que por alguna razón han estado ausentes de dos o más sesiones.
                            Adicionalmente, estas también forman parte de un <span>plan de intervención</span> siempre que haya un caso extremo como:
                            una viaje o enfermedad que cause la pérdida de muchas clases.
                            Estas son gratuitas y personalizadas. Normalmente, se desarrollan antes o después de la clase,
                            previo acuerdo con el estudiante.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Tutor;