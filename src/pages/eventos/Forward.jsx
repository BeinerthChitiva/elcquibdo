import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Forward.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mov1 from "../../images/mov1.jpg"
import mov2 from "../../images/mov2.jpg"
import mov3 from "../../images/mov3.jpg"
import mov4 from "../../images/mov4.jpg"
import mov5 from "../../images/mov5.jpg"
import mov6 from "../../images/mov6.jpg"
import mov7 from "../../images/mov7.jpg"
import mov8 from "../../images/mov8.jpg"
import mov9 from "../../images/mov9.jpg"
import mov10 from "../../images/mov10.jpeg"
import mov11 from "../../images/mov11.jpg"
import mov12 from "../../images/mov12.jpg"

const images = [
    mov1,
    mov2,
    mov3,
    mov4,
    mov5,
    mov6,
    mov7,
    mov8,
    mov9,
    mov10,
    mov11,
    mov12,
]

function Forward(){

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
            <HeroPages name="Moving Forward 2017"/>
            <div className="container">
                <div className="moving-text">
                    <h3>QUIBDÓ BILINGÜE - MOVING FORWARD 2017</h3>
                    <p>
                        Durante el año 2017, se llevó a cabo un programa masivo junto a la Secretaría de educación municipal llamado:
                        Quibdó Bilingüe - Moving Forward, a través de este, se convocó al total de los grupos focalizados según el
                        convenio: 59 docentes del área de inglés, 75 docentes de la básica primaria, 300 estudiantes de grado 11,
                        y el mismo número para grado 10; no obstante, es importante anotar que el número de estudiantes atendidos
                        superó el de los focalizados, siendo todos formados bajo la luz de los mismos estándares de calidad.
                        Por medio de este programa se llevaron a cabo actividades inéditas en el municipio de Quibdó: Campos de inmersión
                        en inglés para docentes de instituciones públicas, concurso municipal de deletreo (Spelling bee) con estudiantes
                        de todas las instituciones, English Day, actividades masivas y conjuntas con estudiantes de varias instituciones
                        (Carreras de observación) y se involucró a instituciones ubicadas fuera de la jurisdicción: Institución Cristo Rey
                        de Tutunendo y la Institución agropecuaria de Tagachí.
                    </p>
                    <p>
                        El entrenamiento consistió en el fortalecimiento de rasgos lingüísticos y metodológicos; tanto estudiantes,
                        como docentes recibieron formación en estrategias para desarrollar un mejor proceso enseñanza -
                        aprendizaje, y hubo énfasis en propósitos específicos como: Preparación para la prueba saber,
                        metodología de la enseñanza, estrategias de aprendizaje y otros.                        
                    </p>
                </div>
                <div className="moving-slider">
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

export default Forward;