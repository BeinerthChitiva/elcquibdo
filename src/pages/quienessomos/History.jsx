import "./History.css"
import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages";

function History(){
    return(
        <>
            <HeroPages name="Historia ELC"/>
            <div className="container">
                <div className="history-main">
                    <div className="history-text">
                        <h1>The English Learning Center - Centro para el Aprendizaje de Inglés</h1>
                        <p>
                            El ELC es una persona jurídica de derecho privado, sin ánimo de lucro ubicada en Quibdó, Chocó,
                            la cual se rige por su junta directiva según los términos de sus estatutos, ajustados a
                            la Constitución Política y la Ley colombiana. La organización está comprometida con la
                            realización de cambios positivos en el departamento del Chocó mediante la oferta y promoción de programas de inglés de alta calidad y actividades culturales para niños, adolescentes y adultos.
                            The English Learning Center (Centro para el Aprendizaje de inglés)
                            es una Institución de Educación para el Trabajo y el Desarrollo Humano, reconocida por
                            medio de la Resolución No.0665 del 03 de mayo de 2018. Desde su fundación, la institución
                            ha venido desarrollando programas significativos y de alto impacto en la población,
                            de hecho, las dos secretarías de educación—Departamental y Municipal—han confiado en
                            varias ocasiones procesos formativos para sus docentes y estudiantes.
                            Entre los programas desarrollados podemos destacar: Nuquí Innovative 2015,
                            Chocó Innovative 2016, Quibdó Bilingüe - Moving Forward 2017,
                            Programa Comité Cruz Roja Internacional 2018, Comfachico 2018,
                            Preparación Saber Pro Licenciatura en Ciencias Naturales UTCH 2018,
                            Preparación para la Prueba Saber Pro en el área de inglés para 600 estudiantes
                            universitarios 2018, Formación a docentes unoversitarios UTCH 2019.
                        </p>
                        <h2>Misión:</h2>
                        <p>
                            Ser un punto de referencia en la región por nuestro liderazgo en la realización
                            de actividades educativas y culturales. A través de la enseñanza de inglés y
                            la formación docente aportamos a la construcción de la prosperidad del país y
                            sus regiones.
                        </p>
                        <h2>Visión</h2>
                        <p>
                            Ser agentes de cambio en la construcción de una nación y una región con más
                            oportunidades para todos mediante programas educativos de alta calidad.
                            Creemos firmemente en la educación y en el amor por los demás como instrumentos
                            que unen y generan hermandad entre las personas y sus pueblos.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default History;