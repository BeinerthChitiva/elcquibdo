import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Club.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import club1 from "../../images/club1.jpg"
import club2 from "../../images/club2.jpg"
import club3 from "../../images/club3.jpg"

const images = [
    club1,
    club2,
    club3
]

function Club(){

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
            <HeroPages name="Club De Conversación"/>
            <div className="container">
                <h3 className="club-title">CLUBES DE CONVERSACIÓN EN INGLÉS CON HABLANTES NATIVOS</h3>
                <div className="club-text">
                    <div className="club-paragraph">
                        <p>
                            Como parte de nuestra responsabilidad social, ofrecemos clubes de conversación gratuitos para la población en general.
                            Estos clubes son desarrollados por hablantes nativos y la idea central es abrir un espacio para la práctica
                            comunicativa de inglés a través de actividades significativas. Los clubes realizados son basados en funciones de la
                            lengua inglesa y se tratan temas de la vida cotidiana.
                        </p>
                    </div>
                    <div className="club-paragraph">
                        <span>Horarios:</span>
                        <p>
                            Los clubes de conversación se realizan los días miércoles cada 15 días en la sede del Centro Para el Aprendizaje de
                            Inglés-The English Learning Center (ELC). Calle 31 No. 5-21 Sede Escuela Anexa al IEFEM. Hora: 06:00 pm
                        </p>
                    </div>
                    <div className="club-paragraph">
                        <span>Nota:</span>
                        <p>
                            Para conocer las fechas exactas y cambios en la programación,
                            visítanos en nuestro perfil de <a href="https://www.facebook.com/elc.quibdo">Facebook</a>
                        </p>
                    </div>
                </div>
                <div className="club-slider">
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

export default Club;