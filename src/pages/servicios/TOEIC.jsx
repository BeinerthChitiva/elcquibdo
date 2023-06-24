import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./TOEIC.css"
import toeic from "../../images/toeic2.png"

function TOEIC(){
    return(
        <>
            <HeroPages name="TOEIC"/>
            <div className="container">
                <h2>Inscripción Y Apliación De Prueba Estandarizada (TOEIC)</h2>
                <div className="toeic">
                    <div className="toeic-img">
                        <img src={toeic} alt="discount"/>
                    </div>
                    <div className="toeic-text">
                        <p>
                            Para certificar su nivel de inglés, el Ministerio de Educación Nacional admite una serie de exámenes,
                            entre ellos destacamos: MET, KET, PET, IELTS, TOEFL y TOEIC. Hasta hace poco las personas residentes en
                            poblaciones como Quibdó sólo podían presentar estos exámenes en ciudades como Bogotá, Medellín, Cali, etc.
                            Ahora, gracias a la gestión del ELC, usted puede certificar su nivel de inglés sin salir de Quibdó.
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="toeic-text">
                    <div className="toe-par">
                        <h3>Ventajas de certificar su nivel de inglés en Quibdó</h3>
                        <p>1.) Su hoja de vida tiene más peso cuando demuestra mediante una certificación válida sus conocimientos de inglés.</p>
                        <p>2.) Ahorre tiempo y mucho dinero en gasto de tiquetes, alojamiento, alimentación, transporte urbano, etc.</p>
                        <p>3.) Empresas nacionales y extranjeras necesitan personal bilingüe; sea uno de ellos.</p>
                        <p>4.) Una certificación a mano le permite estar listo para participar en convocatorias o concursos.</p>
                    </div>
                    <div className="toe-par">
                        <h3>Exámenes que puede presentar y costos</h3>
                        <p>TOEIC (Examen general de Listening y Reading). Es un examen que mide hasta el nivel C1. $200.000</p>
                        <p>TOEIC Bridge Es un examen que mide sus conocimientos hasta el nivel B1. $120.000</p>
                    </div>
                    <div className="toe-par">
                        <h3>Condiciones y lugar de inscripción</h3>
                        <p className="toe-par-last">
                            Se requiere de un número no inferior a diez (10) personas para la realización de la prueba. Inscríbase personalmente en
                            la sede del Centro Para el Aprendizaje de Inglés-The English Learning Center (ELC). Calle 31 No. 5-21 Sede Escuela
                            Anexa al IEFEM. Tel. 3203204536 o 6714563.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TOEIC;