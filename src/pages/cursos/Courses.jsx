import HeroPages from "../../components/HeroPages"
import "./Courses.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courses1 from "../../images/courses1.jpg"
import courses2 from "../../images/courses2.png"
import Footer from "../../components/Footer";

const images = [
    courses1,
    courses2
]

function Courses(){
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
            <HeroPages name="Courses"/>
            <div className="container">
                <div className="courses-slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" className="slider-img"/>
                        ))}
                    </Slider>
                </div>
                <div className="courses-text">
                    <div className="text-paragraph">
                        <h3>Programa de Inglés para Niños y Adolescentes</h3>
                        <p>
                            Son cursos diseñados para niños que plenamente han desarrollado su proceso de lectoescritura en su lengua materna.
                            El programa para adolescentes inicia con jóvenes de 13 años en adelante. Cada curso cuenta con 32 horas académicas,
                            con una intensidad de 4 horas a la semana y dura aproximadamente 2 meses.
                        </p>
                        <span>Modalidad:</span><p>Semi-intensiva - 4 horas académicas de clases a la semana</p>
                        <span>Horarios:</span>
                        <p>Opción 1: Martes y Jueves, 4:00 - 5:45 pm</p>
                        <p>Opción 2: Miércoles y Viernes, 4:00 - 5:45 pm</p>
                    </div>
                    <div className="text-paragraph">
                        <h3>Programa Académico de Inglés Adultos</h3>
                        <p>
                            Los estudiantes deben tener mínimo 16 años de edad. Cada nivel consta de un total de
                            32 horas académicas de enseñanza y se trabajan 8 horas a la semana. 
                        </p>
                        <span>Modalidades:</span>
                        <p>Intensiva - 8 horas académicas de clases a la semana.</p>
                        <p>Semi-intensiva - 4 horas académicas de clases a la semana.</p>
                        <span>Opción De Horarios:</span>
                        <p>De Lunes a Jueves, 6:00 - 7:45 pm</p>
                        <p>De Martes a Viernes, 6:00 - 7:45 pm</p>
                        <p>A partir del año 2020 retomaremos los cursos sabatinos. Para mayor información, acercarse a nuestra oficina.</p>
                    </div>
                    <div className="text-paragraph">
                        <h3>Inversión</h3>
                        <p>$300.000 por nivel y $25.000 por matricula (Sólo una vez)</p>
                        <p>
                            Esta tarifa incluye: materiales (libros, CD's, agenda, lapicero, etc.), clases presenciales, tutorías, herramientas de
                            aprendizaje independiente y clubes de conversación con hablantes nativos.
                            Cada estudiante nuevo debe presentar el examen de clasificación. Este examen no tiene costo para quienes se
                            matriculan en el Centro.  
                        </p>
                    </div>
                    <div className="text-paragraph">
                        <h3>Formas De Pago</h3>
                        <p>Consignación: BANCOLOMBIA</p>
                        <p>Nombre: Centro para el Aprendizaje del Inglés</p>
                        <p>Cuenta de ahorros: 536 204 690 48</p>
                        <p>SUGERENCIA: Para recibir un servicio mucho más rápido, les recomendamos realizar la transacción en uno de los CORRESPONSALES del municipio.</p>
                    </div>
                    <div className="text-paragraph">
                        <ul>
                            <li>
                                EXPRESO CHOCO S.A - Calle 31 #6- 46
                            </li>
                            <li>
                                DISTRICOL MEDIQUIBDO IPS LTDA - Carrera 5 # 29 - 70
                            </li>
                            <li>
                                SURTIZORA SOCIEDAD POR ACCIONES SIMPLIFICADA - Carrera 4 # 30 - 14
                            </li>
                            <li>
                                DISTRICOL DISTRIBUIDORA DE MATERIALES DEL PACIFICO - Calle 26 # 7 - 26
                            </li>
                            <li>
                                PAPELERIA COLOMBIA - Calle 26 # 8 - 08
                            </li>
                            <li>
                                MI ROPERITO QUIBDÓ - Carrera 3 # 30 - 78
                            </li>
                            <li>
                                CACHARRERIA Y PAPELERIA MAYORKA - Carrera 4 # 27- 05. Barrio La Alameda
                            </li>
                            <li>
                                AFROMIA TIENDA - Carrera 5 # 26 - 12
                            </li>
                            <li>
                                DISTRICOL AGRO ATRATO - Calle 26 # 4 - 59
                            </li>
                            <li>
                                DROGERIA LA ECONOMIA 2 QUIBDO - Carrera 3 # 26 - 98
                            </li>
                            <li>
                                PALMIRA SUPERMERCADO - Calle 26 530 Barrio La Alameda
                            </li>
                            <li>
                                DISTRICOL DROGUERIA ZYMAR - Calle 25 # 5 - 25
                            </li>
                            <li>
                                SUPERMERCADO EL TAMBO QUIBDO - Calle 24 # 19 - 26. Barrio Jardín
                            </li>
                            <li>
                                MULTIMARCAS BERLIN - Carrera 3 # 26 - 10
                            </li>
                            <li>
                                COMCARD QUIBDO JJCC - Carrera 4 # 25-15
                            </li>
                            <li>
                                PAGA FACIL - QUIBDÓ - Carrera 2 # 24 17
                            </li>
                            <li>
                                DISTRICOL CELUSTAR COMUNICACIONES S.A.S - Carrera 4 # 24 - 177
                            </li>
                            <li>
                                FARMASABE CENTRO - Carrera 4 # 24 - 170
                            </li>
                            <li>
                                MAGISTRAL INVERSIONES LTDA - Calle 3A # 24 A - 38
                            </li>
                            <li>
                                DISTRICOL ALMACEN - Carrera 4 # 24 - 39
                            </li>
                            <li>
                                DISTRICOL DROGUERIA ZONA MINERA - Carrera 25 # 40 - 90
                            </li>
                            <li>
                                SUPERMECADO MERCADIARIO - Carrera 4 # 24 - 163
                            </li>
                            <li>
                                ALMACEN LAS PORRAS - Carrera 2 # 24A - 79
                            </li>
                            <li>
                                PLÁSTICOS Y DESECHABLES LA 20 - Calle 20 #4A - 46
                            </li>
                        </ul>
                    </div>
                    <div className="text-paragraph">
                        <p>También hay corresponsales en los municipios de Istmina, Tadó, Las Ánimas, Condoto, Bahía Solano y Nuquí.</p>
                        <p>¡Haz clic <a href="/descuentos">aquí</a> para mayores informes sobre descuentos y programas de becas que el ELC ofrece!</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Courses;