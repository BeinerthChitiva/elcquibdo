import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./UNICA.css"
import unica from "../../images/unica.jpg"

function UNICA(){
    return(
        <>
            <HeroPages name="UNICA"/>
            <div className="container">
                <h3 className="unica-title">BECA LICENCIATURA EN EDUCACIÓN BILINGÜE EN UNICA</h3>
                <div className="unica">
                    <div className="unica-img">
                        <img src={unica} alt="discount"/>
                    </div>
                    <div className="unica-text">
                        <p>
                            Si tu deseo es estudiar educación bilingüe en la mejor universidad de este tipo en Colombia,
                            el ELC te ayuda a cumplirlo.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UNICA;