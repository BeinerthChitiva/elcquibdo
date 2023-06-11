import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./AMITY.css"
import amity from "../../images/amity.png"

function AMITY(){
    return(
        <>
            <HeroPages name="AMITY"/>
            <div className="container">
                <h3 className="amity-title">INTERNSHIP PROGRAM AMITY</h3>
                <div className="amity">
                    <div className="amity-img">
                        <img src={amity} alt="discount"/>
                    </div>
                    <div className="amity-text">
                        <p>
                            El ELC también te ayuda a tener una experiencia internacional haciendo tu pasantía en AMITY.
                            Ya hemos tenido estudiantes que han sido afectados positivamente por este gran programa que ayuda
                            a fortalecer tus competencias en inglés, a ganar experiencia en el área de la enseñanza y a ser
                            un embajador formal de Colombia en las instituciones educativas americanas. Echa un vistazo a
                            la descripción y requerimientos de la misma ((aquí.))
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AMITY;