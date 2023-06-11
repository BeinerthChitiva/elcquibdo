import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Becas.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import becas1 from "../../images/becas1.jpg"
import becas2 from "../../images/becas2.jpg"
import becas3 from "../../images/becas3.jpg"
import becas4 from "../../images/becas4.jpg"
import becas5 from "../../images/becas5.jpg"
import becas6 from "../../images/becas6.jpg"
import becas7 from "../../images/becas7.jpg"

const images = [
    becas1,
    becas2,
    becas3,
    becas4,
    becas5,
    becas6,
    becas7
]

function Becas(){

    const video1Url = "https://www.youtube.com/embed/JVNIynagqXQ"
    const video2Url = "https://www.youtube.com/embed/GUAUbBY7Rc0"
    const video3Url = "https://www.youtube.com/embed/pf9KOeMAiXU"
    const video4Url = "https://www.youtube.com/embed/uaVHpwTsYns"

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
            <HeroPages name="Fondo De Becas"/>
            <div className="container">
                <div className="becas-text">
                    <h3>FONDO DE BECAS OSCAR GONZÁLEZ</h3>
                    <h4>El Fondo es la materialización de nuestra creencia de que a las personas se les debe brindar oportunidades y herramientas, no limosnas. La herramienta más poderosa para una vida próspera es la educación.</h4>
                    <p>
                        Haciendo uso de nuestra responsabilidad social, desde el año 2016 venimos apoyando a la comunidad chocoana, especialmente brindando ayuda
                        a jóvenes de escasos recursos que presentan dificultades para acceder a la educación.  Por medio de nuestro Fondo de Becas Oscar Gonzáles,
                        participamos activamente en el apadrinamiento y la donación de kits escolares a niños, otorgamos becas o descuentos que facilitan el ingreso
                        a nuestro centro de lenguas y, además, apadrinamos a estudiantes que no cuentan con recursos suficientes para ingresar a la educación superior,
                        mediante becas totales o parciales.
                    </p>
                    <p>
                        Para garantizar una selección transparente o equitativa, contamos con un Comité de Selección que evalúa rigurosamente las solicitudes.
                        Los beneficiarios no reciben dinero en efectivo en ninguno de los casos; el ELC directamente hace los pagos de matrículas a las universidades.
                    </p>
                    <p>
                        Nuestra gestión podría ser mejor, por eso necesitamos que Usted se sume a este esfuerzo, así podremos mantener y ampliar el número de beneficiarios.
                        La equidad se construye diariamente y con acciones concretas; permitamos que las nuevas generaciones alcancen su máximo potencial.
                    </p>
                </div>

                <hr/>

                <div className="becas-slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" className="slider-img"/>
                        ))}
                    </Slider>
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
                <div className="inm-vids">
                    <iframe
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={video3Url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen 
                    >
                    </iframe>
                    <iframe
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={video4Url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen 
                    >
                    </iframe>
                </div>

                <hr className="neyo"/>

            </div>
            <Footer/>
        </>
    )
}

export default Becas;