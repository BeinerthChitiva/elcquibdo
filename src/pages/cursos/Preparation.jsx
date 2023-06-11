import HeroPages from "../../components/HeroPages";
import "./Preparation.css"
import Footer from "../../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prep1 from "../../images/prep1.jpg"
import prep2 from "../../images/prep2.jpg"
import prep3 from "../../images/prep3.jpg"
import prep4 from "../../images/prep4.jpg"

const images = [
    prep1,
    prep2,
    prep3,
    prep4
]

function Preparation(){
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
            <HeroPages name="Preparation For Saber 11"/>
            <div className="container">
                <div className="prep-text">
                    <div className="prep-paragraph">
                        <h3>SEGUIMOS APORTANDO A LA FORMACIÓN DE LOS MEJORES BACHILLERES Y PROFESIONALES DEL DEPARTAMENTO</h3>
                        <p>
                            En los últimos años, hemos venido desarrollando exitosos procesos de preparación para las Pruebas Saber 11 y Pro.
                            Nos hemos convertido en expertos en la materia obteniendo siempre resultados plenamente satisfactorios. 
                            Cada año ofrecemos este programa y nos enorgullece poder apoyar a los futuros profesionales a través de una
                            metodología eficaz, dinámica y poderosa. En el 2017, por ejemplo, el Centro Para el Aprendizaje de Inglés-English Learning Center
                            (ELC) preparó a los mejores bachilleres del departamento. Nos sentimos orgullosos de haber contribuido al proceso formativo en
                            inglés de un grupo de jóvenes que obtuvieron el beneficio del programa "Ser Pilo Paga" y accedieron a carreras en instituciones
                            de educación superior acreditadas en alta calidad. Ellos son un ejemplo a seguir. Los felicitamos a ellos, a sus familias y a sus
                            docentes. El ELC fortalece su compromiso con la educación chocoana y estamos seguros que en el 2018 tendremos más beneficiarios.
                            Nuestros estudiantes acreedores de este magnífico beneficio son: Adrían David Abadía Palomeque, Alex David Córdoba López,
                            Rosy Edith Córdoba Palacios, Herklin Federico Asprilla Barrios, Harold Hernán Mena Ríos Y Hader Darío Palacios.
                        </p>
                        <p>
                            En el año 2018, por segunda ocasión consecutiva, desarrollamos de manera exitosa el <span>Programa de Preparación para la Prueba Saber 11.</span>
                            Y repetimos el mismo logro, pero esta vez, con un mayor número de participantes. 19 estudiantes hicieron parte del programa y todos
                            obtuvieron resultados satisfactorios en el área de inglés, superando el promedio nacional. El promedio grupal estuvo 15 puntos por
                            encima de la media nacional.  Cada día demostramos que estamos altamente capacitados para conducir procesos de este tipo y,
                            nos sentimos plenamente orgullosos de nuestros estudiantes y sus familias. Durante este 2019, estamos desarrollando el programa,
                            y al igual que los dos años anteriores, promete la consecución de excelentes resultados gracias a la calidad y buena metodología de nuestros docentes. 
                        </p>
                    </div>
                    <hr/>
                    <div className="prep-paragraph">
                        <h3>PROGRAMA DE PREPARACIÓN PARA LA PRUEBA SABER PRO EN EL ÁREA DE INGLÉS</h3>
                        <p>
                            El Centro para el Aprendizaje de Inglés - The English Learning Center (ELC) en convenio con la Universidad Tecnológica del Chocó “Diego Luis Córdoba”
                            ha desarrollado un programa orientado a la preparación para la Prueba Saber Pro en el área de inglés. Este programa tiene como principal objetivo mejorar
                            los resultados institucionales y regionales en el área de inglés a través del entrenamiento a 600 estudiantes inscritos para tomar la prueba Saber este año 2018.
                            Los estudiantes de la Universidad Tecnológica del Chocó fueron certificados por su participación en el programa. El ELC los felicita y les desea lo mejor de
                            cara a las pruebas de estado. Nos sentimos satisfechos y alegres del magnífico programa que hemos desarrollado junto a ustedes.
                        </p>
                    </div>
                </div>
                <div className="prep-slider">
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

export default Preparation;