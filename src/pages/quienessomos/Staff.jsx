import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages";
import "./Staff.css"
import staff1 from "../../images/staff1.jpg"
import staff2 from "../../images/staff2.jpg"

const images = [
    staff1,
    staff2
];

function Staff(){
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
            <section className="staff">
                <HeroPages name="Staff ELC"/>
                <div className="container">
                    <div className="staff-slider">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <img key={index} src={image} alt="" className="slider-img"/>
                            ))}
                        </Slider>
                    </div>
                    <hr/>
                    <div className="staff-text">
                        <p>
                            Contamos con un equipo con amplia experiencia en la dirección de
                            programas de educación bilingüe y enseñanza del inglés.
                            El equipo está liderado por el abogado, licenciado en idiomas y
                            magister de la Universidad de Michigan—Beinerth Chitiva Mosquera,
                            quien ha sido profesor en Estados Unidos, en varias universidades
                            de Bogotá y del Centro Colombo Americano de Cali y Bogotá,
                            Supervisor del Centro Colombo Americano de Bogotá y durante los
                            últimos casi siete (7) años fue Coordinador del Departamento de
                            Inglés de la Institución Universitaria Colombo Americana-UNICA de
                            Bogotá (2008-2013). Adicionalmente, un gran porcentaje del cuerpo
                            docente ha tenido experiencia
                            internacional participando en programas de intercambio.
                        </p>
                        <p>
                            Todos los docentes tienen por lo menos un nivel de licenciatura
                            en idiomas o en la enseñanza de inglés. Somos la única institución
                            de educación en el departamento que constantemente cuenta con el
                            servicio de personal extranjero hablantes de inglés como lengua
                            nativa.
                            El equipo docente tiene experiencia en diferentes programas
                            educativos y se mantiene en un proceso constante de desarrollo
                            profesional, lo que permite asegurar altos estándares de calidad.
                        </p>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Staff;