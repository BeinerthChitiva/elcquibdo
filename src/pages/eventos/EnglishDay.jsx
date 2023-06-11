import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages";
import "./EnglishDay.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eday1 from "../../images/eday1.jpg"
import eday2 from "../../images/eday2.jpg"
import eday3 from "../../images/eday3.jpg"
import eday4 from "../../images/eday4.jpg"
import eday5 from "../../images/eday5.jpg"
import eday6 from "../../images/eday6.jpg"
import eday7 from "../../images/eday7.jpg"
import eday8 from "../../images/eday8.jpg"

const images = [
    eday1,
    eday2,
    eday3,
    eday4,
    eday5,
    eday6,
    eday7,
    eday8,
]

function EnglishDay(){

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
            <HeroPages name="English Day"/>
            <div className="container">
                <div className="eday-text">
                    <h3>ENGLISH DAY</h3>
                    <p>
                        En aras de lograr resultados significativos en el desempeño de los estudiantes, se requiere generar ambientes que los motiven
                        a comunicarse en inglés y propicien el gusto por hacerlo, en actividades cotidianas. Este evento fue un espacio para que, en el
                        ambiente escolar, se resaltaran y se crearan oportunidades para usar el inglés como vehículo de comunicación.
                        También, fue una oportunidad para empoderar a los docentes y a sus estudiantes en el proceso de construcción y uso significativo
                        de la lengua, mostrando sus talentos ante la comunidad escolar. Generar espacios para el aprendizaje del inglés a través de actividades
                        lúdicas y académicas permite que los estudiantes se esfuercen por comunicarse en dicho idioma. Con el fin de garantizar su adecuado desarrollo,
                        la planeación de este día fue uno de los puntos trabajados durante la inmersión.
                    </p>
                    <p>
                        Esta fase permitió evidenciar el trabajo cooperativo entre los docentes del área, el compromiso y motivación. Posteriormente, el día del
                        evento el equipo del Programa Quibdó Bilingüe - Moving Forward se desplazó a las instituciones para hacerles el respectivo acompañamiento
                        en dicha actividad. Se pudo constatar que los estudiantes tuvieron múltiples oportunidades de comunicarse en inglés, mejorarando la ortografía
                        y pronunciación de muchas palabras a través de las semifinales del Spelling Bee, llevadas a cabo ese día.
                    </p>
                    <p>
                        Una de las metas del Programa Quibdó Bilingüe - Moving Forward es institucionalizar el English Day, como un espacio propicio para fortalecer
                        las competencias en lengua y, a la vez, mostrar avances en el desempeño de estudiantes y docentes.
                    </p>
                </div>
                <div className="eday-slider">
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

export default EnglishDay;