import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages";
import "./SpecialCourses.css"

function SpecialCourses(){
    return(
        <>
            <HeroPages name="Cursos Especiales"/>
            <div className="container">
                <div className="special-text">
                    <h2>Cursos Especiales</h2>
                    <p>
                        El Centro Para El Aprendizaje De Inglés también le ofrece cursos especiales enfocados en:
                        preparación para exámenes estandarizados de inglés como TOEFL, comprensión de lectura, comunicación (habla y escucha),
                        tutorías personalizadas en temáticas específicas, entre otros.
                        Para estos casos, tenemos la flexibilidad y nos adaptamos a las necesidades del cliente.
                        Los horarios y costos son acordados directamente con el cliente.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SpecialCourses;