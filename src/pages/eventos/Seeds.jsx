import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Seeds.css"
import seeds1 from "../../images/SeedsInfo.png"

function Seeds(){
    return(
        <>
            <HeroPages name="Seeds Of Change"/>
            <div className="container">
                <div className="seedsinfo">
                    <h3>Seeds Of Change - Semillas De Cambio</h3>
                    <img className="seedsimg" src={seeds1} alt="Informational"/>
                    
                    <span>Learn more about our Seeds <a href="/semillas-2023">HERE.</a></span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Seeds;