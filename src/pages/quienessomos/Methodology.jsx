import HeroPages from "../../components/HeroPages";
import Footer from "../../components/Footer";
import "./Methodology.css"

function Methodology(){
    return(
        <>
            <HeroPages name="Metodología De Trabajo"/>
            <div className="container">
                <div className="methodology-main">
                    <div className="methodology-text">
                        <h1>Metodología De Trabajo</h1>
                        <p>
                            Los Programas del ELC facilitan el desarrollo de las
                            cuatro habilidades lingüísticas de forma dinámica,
                            efectiva y amena. Los alumnos tienen la oportunidad
                            de practicar la escucha, el habla, la lectura y la
                            escritura en inglés, en un entorno donde el estudiante
                            y sus necesidades lingüísticas son el enfoque de la
                            metodología. Durante el desarrollo de las clases, se
                            hace un enfoque especial en las competencias comunicativas,
                            siempre abriendo espacios para que los alumnos puedan ir
                            fortaleciendo sus destrezas en el inglés verbal y en la
                            escucha.
                        </p>
                        <h2>Principios Generales</h2>
                        <ul>
                            <li>
                                Se enfatiza el uso de estrategias de aprendizaje.
                            </li>
                            <li>
                                Se enfatiza la importancia del trabajo autónomo / independiente.
                            </li>
                            <li>
                                Las estrategias y herramientas de aprendizaje independiente se incorporan a las actividades diarias usando fuentes útiles como: VOA, BBC, CNN, audacity, voxapop, etc.
                            </li>
                            <li>
                                Se desarrolla un proceso de aprestamiento lingüístico como base de un adecuado proceso de aprendizaje.
                            </li>
                            <li>
                                Igualmente, cada individuo aumenta su nivel de seguridad y confianza en su capacidad de aprender una segunda lengua. El filtro afectivo es el apropiado para que el proceso de aprendizaje sea fructífero. El estudiante siente que es capaz y cada vez que logra completar una actividad satisfactoriamente refuerza dicho nivel de seguridad.
                            </li>
                            <li>
                                Una de nuestras tareas fundamentales en el aula es fomentar la fe en cada individuo; fe en que ellos tienen todo lo que se requiere para aprender inglés.
                            </li>
                            <li>
                                Se parte de lo fácil a lo más complejo, y siempre se da prioridad a la etapa de reconocimiento o identificación, luego se va a la comprensión y producción.
                            </li>
                            <li>
                                Las clases son una experiencia de adquisición en un ambiente lingüísticamente rico, dándole prevalencia a lo significativo y a lo lúdico.
                            </li>
                            <li>
                                Se da prioridad a la experiencia auditiva (input) sin excluir los otros tipos de input y sin forzar la producción verbal temprana. Dichos momentos de experiencia auditiva exponen al individuo a un inglés “auténtico.” De manera especial, se evita la exposición a un lenguaje manipulado o controlado (en la vida real el lenguaje no es controlado para quien empieza a adquirir su lengua materna; eso buscamos replicarlo, en cierta medida, en el aula).
                            </li>
                            <li>
                                Los pilares de esta primera experiencia de aprendizaje desde el punto de vista lingüístico son: “listening, vocabulary, phonemic awareness y word collocation.”
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Methodology;