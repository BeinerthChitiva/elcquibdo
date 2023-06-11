import "./Discounts.css"
import discount from "../../images/discount.png"
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/Footer";

function Discounts(){
    return(
        <>
            <HeroPages name="Programa De Descuentos"/>
            <div className="container">
                <div className="desc">
                    <div className="desc-img">
                        <img src={discount} alt="discount"/>
                    </div>
                    <div className="desc-text">
                        <h3>
                            ¡No hay por qué pagar la tarifa plena! ¡Entérese de los descuentos que ofrece el ELC y disfrute!
                        </h3>
                        <div className="text-par">
                            <span>Descuento para docentes:</span>
                            <p>Docentes de básica primaria y secundaria ($225.000/curso).</p>
                        </div>
                        <div className="text-par">
                            <span>Descuentos familiares, compañeros de trabajo y grupo de amigos:</span>
                            <p>10% descuento para cada uno de los miembros. Familia inmediata.</p>
                        </div>
                        <div className="text-par">
                            <span>Descuentos estudiantes y docentes IEFEM:</span>
                            <p>10% de descuento</p>
                        </div>
                        <div className="text-par">
                            <p>
                                *Se aplican restricciones y condiciones. No se puede combinar estos descuentos con otras promociones que el Centro ofrezca.
                                Los descuentos están sujetos a cambios sin aviso previo y dependen de la disponibilidad de cupos y espacios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Discounts;