import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages"
import "./Inmersion.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import inm1 from "../../images/inm1.jpg"
import inm2 from "../../images/inm2.jpg"
import inm3 from "../../images/inm3.jpg"
import inm4 from "../../images/inm4.jpg"
import inm5 from "../../images/inm5.jpeg"
import inm6 from "../../images/inm6.jpeg"
import inm7 from "../../images/inm7.jpeg"

const images = [
    inm1,
    inm2,
    inm3,
    inm4,
    inm5,
    inm6,
    inm7
]

function Inmersion(){

    const video1Url = "https://www.youtube.com/embed/BQAbcDd8LAg"
    const video2Url ="https://www.youtube.com/embed/xHwc9wSxzAI"

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
            <HeroPages name="Campos De Inmersión"/>
            <div className="container">
                <div className="inm-text">
                    <p>
                        En sus años de funcionamiento, el ELC ha llevado a cabo varios campos de inmersión de inglés orientados a
                        diferentes poblaciones: estudiantes, docentes de bachillerato y docentes de básica primaria. Somos la única institución
                        en el departamento del Chocó que ha creado estos espacios para brindar una experiencia de aprendizaje distinta,
                        siempre contando con hablantes nativos de inglés en el equipo de líderes. El Centro para el Aprendizaje de Inglés
                        promueve e impulsa estas prácticas con la finalidad de familiarizar a nuestros estudiantes y usuarios con un inglés
                        auténtico y real. Además, la importancia de usar la lengua en contextos diversos y con propósitos específicos, promueve
                        el desarrollo de actividades significativas como efecto motivador para crear experiencias memorables. Durante los últimos
                        años, el ELC ha realizado los siguientes campos de inmersión:
                    </p>
                </div>
                <div className="inm-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Marco / Programa</th>
                                <th>Población Estudiantil</th>
                                <th>Número De Beneficiarios</th>
                                <th>Lugar De Desarrollo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chocó Innovative</td>
                                <td>Estudiantes Bachillerato</td>
                                <td>30</td>
                                <td>Nuquí - Chocó</td>
                                <td>Noviembre 16 - 19 / 2016</td>
                            </tr>
                            <tr>
                                <td>Chocó Innovative</td>
                                <td>Estudiantes Bachillerato</td>
                                <td>30</td>
                                <td>Bahía Solano - Chocó</td>
                                <td>Noviembre 21 - 25 / 2016</td>
                            </tr>
                            <tr>
                                <td>Chocó Innovative</td>
                                <td>Estudiantes Bachillerato</td>
                                <td>30</td>
                                <td>Capurganá - Chocó</td>
                                <td>Noviembre 28 - Diciembre 01 / 2016</td>
                            </tr>
                            <tr>
                                <td>Quibdó Bilingüe - Moving Forward</td>
                                <td>Docentes Bachillerato</td>
                                <td>59</td>
                                <td>Istmina - Chocó</td>
                                <td>Octubre 11 - 14 / 2017</td>
                            </tr>
                            <tr>
                                <td>Quibdó Bilingüe - Moving Forward</td>
                                <td>Docentes Básica Primaria</td>
                                <td>75</td>
                                <td>Quibdó - Chocó</td>
                                <td>Noviembre 13 / 2017</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
                <div className="inm-vids">
                    <iframe
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={video1Url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen 
                    >
                    </iframe>
                    <iframe
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={video2Url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen 
                    >
                    </iframe>
                </div>
                <hr/>
                <div className="inm-slider">
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

export default Inmersion;
