import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Choco.css"

function Choco(){

    const videoUrl = "https://www.youtube.com/embed/BQAbcDd8LAg"

    return(
        <>
            <HeroPages name="Chocó Innovative"/>
            <div className="container">
                <div className="choco-text">
                    <h3>CHOCÓ INNOVATIVE 2016</h3>
                    <p>
                        En vista de los excelentes resultados obtenidos con el programa Nuquí Innovative en el año anterior.
                        En el 2016, se le dio continuidad al programa; esta vez con el nombre Chocó Innovative, logrando
                        cubrir una población mucho mayor. Capurganá y Bahía Solano, también poblaciones costeras chocoanas,
                        fueron positivamente impactadas a través de esta inédita iniciativa de bilingüismo que involucró a
                        un poco más de 500 personas, entre estudiantes y docentes en Nuquí, Bahía Solano y Capurganá.
                        En esta ocasión, se siguieron fortaleciendo los conocimientos y las competencias comunicativas en
                        inglés de los participantes, además de los componentes de liderazgo y tecnología. 
                    </p>
                    <p>
                        Nuestra experiencia en el departamento del Chocó nos ha hecho detectar grandes rasgos de liderazgo en
                        nuestros estudiantes, y este programa potenció este aspecto de manera muy significativa. Al igual que
                        en el programa anterior, pudimos desarrollar nuestras actividades con el apoyo de la Secretaría de
                        educación departamental y las instituciones educativas de las poblaciones indicadas, quienes participaron
                        activamente. Esto demuestra nuestras serias intenciones de transformar la educación en nuestro departamento
                        a través de la inclusión y empoderamiento de instituciones.
                    </p>
                </div>
                <hr/>
                <div className="choco-vids">
                    <iframe
                        title="YouTube Video"
                        width="660"
                        height="415"
                        src={videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen 
                    >
                    </iframe>
                </div>
                <hr className="bassy"/>
            </div>
            <Footer/>
        </>
    )
}

export default Choco;