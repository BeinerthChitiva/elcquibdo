import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Nuqui.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nuqui from "../../images/nuqui.png"
import nuqui1 from "../../images/nuqui1.jpg"
import nuqui2 from "../../images/nuqui2.jpg"

const images = [
    nuqui1,
    nuqui2,
]

function Nuqui(){

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return(
        <>
            <HeroPages name="Nuqui Innovative"/>
            <div className="container">
                <div className="nuqui-main">
                    <h3 className="nuqui-title">NUQUÍ INNOVATIVE 2015</h3>
                    <div className="nuqui">
                        <div className="nuqui-img">
                            <img src={nuqui} alt="discount"/>
                        </div>
                        <div className="nuqui-text">
                            <p>
                                Nuquí Innovative: Programa de bilingüismo con enfasis en turismo, desarrollado en el municipio de Nuquí, Chocó.
                                Los estudiantes y docentes de las instituciones educativas del lugar recibieron formación en inglés y turismo;
                                el objetivo central era capacitar a los estudiantes  para que pudieran brindar información y guía a muchos turistas
                                extranjeros que visitan esta zona costera. Este programa se desarrolló en el año 2015 y se formó a más de 150 estudiantes
                                y docentes de la región. La etapa formativa introdujo diferentes temáticas como liderazgo, tecnología y otras.
                            </p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="nuqui-slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" className="slider-img"/>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Nuqui;
