import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Istmina.css"

function Istmina(){
    return(
        <>
            <HeroPages name="UTCH - ISTMINA"/>
            <div className="container">
                <div className="ist">
                    <h3>80 ESTUDIANTES DE LA UNIVERSIDAD TECNOLÓGICA DEL CHOCÓ SEDE ITSMINA RECIBEN CAPACITACIÓN EN EL ÁREA DE INGLÉS DE LA PRUEBA SABER PRO</h3>
                    <p>
                        Nuestro Programa de Preparación para la Prueba Saber Pro también llegó a Istmina. Más de 80 estudiantes de la Universidad Tecnológica del Chocó -
                        Sede Istmina participaron en una jornada llena de aprendizajes y recibieron gratuitamente materiales para la prueba.
                    </p>
                    <p>
                        Queremos transformar la realidad educativa mediante una política de inclusión en la que muchos tengan facilidades de aprendizaje a través de métodos
                        y estrategias efectivas.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Istmina;