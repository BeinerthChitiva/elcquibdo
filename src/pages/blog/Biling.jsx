import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Biling.css"

function Biling(){
    return(
        <>
            <HeroPages name="Bilinguismo en Quibdó"/>
            <div className="container">
                <div className="buib">
                    <h3>SEGUIMOS FORTALECIENDO EL BILINGÜISMO EN QUIBDÓ</h3>
                    <p>
                        Este es nuestro sexto año de gestión en Quibdó y seguimos apoyando a la comunidad con el aprendizaje de inglés como segunda lengua.
                        En este 2019, la buena respuesta de nuestros estudiantes no se ha hecho esperar. Ahora mismo: niños, jóvenes y adultos están siendo
                        formados bajo estándares de alta calidad en nuestro centro y nos sentimos muy orgullosos de poder aportar en su crecimiento.
                    </p>
                    <p>
                        Con el firme propósito e intención de dar un salto de calidad a nivel comunitario, invitamos a la comunidad a ser parte de nuestros
                        eficientes programas. ¡Ven y aprende con nosotros, te esperamos en el ELC!
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Biling;