import Footer from "../../components/Footer"
import HeroPages from "../../components/HeroPages"
import "./Estudiantes.css"
import avatarw from "../../images/avatarw.jpg"
import avatarm from "../../images/avatarm.jpg"
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';

function Estudiantes(){
    return(
        <>
            <HeroPages name="Seeds Of Change 2023"/>
            <div className="container">
                <div className="stu-text">
                    <h3>SEMILLAS DE CAMBIO: PERFIL ESTUDIANTES SELECCIONADOS 2023</h3>
                    <p>
                        La mejor manera de apoyar a una persona es brindándole las condiciones y herramientas que le permitan desarrollar su potencial máximo. 
                        Una educación transformadora, de calidad, es la mejor inversión y el aporte más perdurable que podemos entregarles a las nuevas generaciones,
                        especialmente a los miles de niños, niñas y jóvenes que nacieron en ambientes marginalizados o empobrecidos. 
                    </p>
                    <p>
                        El programa educativo Semillas de Cambio surge como una oportunidad de empoderamiento, diseñado, abonado, irrigado y realizado con amor y vocación de servicio.
                        Todos los beneficiarios son estudiantes de instituciones educativas públicas u oficiales en Quibdó, Chocó.
                        La gran mayoría reside en barrios con altos niveles de inseguridad y violación de los derechos humanos. 
                    </p>
                    <span>Este es el perfil de algunos de los jóvenes cuyas vidas pueden ser tocadas y cambiadas gracias al valioso aporte que usted puede hacer ahora.</span>
                </div>
                <hr className="stu-hr"/>
                <div className="stu-profiles">
                <MDBRow>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarw} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Miriam Hapzelly Mena Salas</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 14 años y le gustan las matemáticas, el inglés y la lectura. Vive con su mamá y su hermano menor.
                                    Su mamá es ama de casa, no cuenta con un empleo que le genere un ingreso estable y permanente;
                                    a veces cuida niños por lo cual recibe algún tipo de retribución económica. Sueña con graduarse de la universidad como médica forense,
                                    convertirse en un soporte para su familia y conocer nuevos lugares y nuevas personas.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarm} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Kevinson Pestaña Palacios</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 16 años y le gusta estudiar inglés con aplicaciones. Vive con su mamá y 3 hermanos (2 hombres y una mujer).
                                    Su mamá es ama de casa. El sueña con ser docente de inglés para salir adelante y ayudar a su familia.
                                    Anhela viajar a los Estados Unidos y fortalecer su conocimiento del idioma y la cultura del país.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarw} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Karen Yurleisi Murillo Caceres</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 13 años y le gusta estudiar inglés, compartir con sus amigos y sobre todo estar con su familia.
                                    Hace parte de una familia de cinco personas: mamá, papá y dos hermanos.
                                    Su mamá es ama de casa y su papá se dedica a oficios varios. Su más grande sueño es poder estudiar
                                    medicina y/o diseño de modas.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarm} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Hayud Bejarano Martinez</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 15 años. Vive con sus padres y su hermano menor. Sus padres son agricultores y cultivan plátano,
                                    limón, aguacate, lulo, cacao, etc. Su gran anhelo es ser profesor de inglés para salir adelante
                                    y poder ayudar a su familia. Le gustaría conocer otros países de habla inglesa.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarw} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Yulieth Arrollo Caicedo</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 15 años. Vive con la mamá, el padrastro y un hermano menor. La mamá es ama de casa y el padrastro
                                    trabaja en la mina como buzo. Sueña con ser enfermera superior, construirle una casa a su madre y
                                    poder contribuir a la sociedad, viajar a los Estados Unidos, aprender hablar excelente el inglés.
                                    Le gusta mucho escribir y leer libros.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarm} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Alexander Parra Ortiz</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 14 años. Es parte de una familia de siete (7) personas: mamá, padrastro y cuatro hermanos (2 hermanas y 2 hermanos).
                                    La madre es ama de casa y el padrastro trabaja como operario de una máquina de buceo en una mina.
                                    También manifiesta que le gusta el inglés, las matemáticas, leer y jugar fútbol.
                                    Sueña con ser un contador y tener una microempresa de contadores.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarw} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Camila Andrea Berno Córdoba</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 15 años y es parte de una familia de siete (7) miembros:  tres hermanos, dos primos y la mamá que trabaja en la plaza
                                    de mercado de Quibdó, vendiendo plátano, banano etc. Le gusta tocar el piano. Anhela ser una gran profesora de inglés para
                                    poder ayudar a su familia económicamente.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarm} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Yeisson Andrés Gamboa Machado</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 14 años. Vive con sus padres; la mamá es ama de casa y el papá trabaja en la mina como buzo.
                                    Le gusta estudiar inglés y compartir con sus amigos. Sueña con ser abogado para defender a aquellos que no son escuchados.
                                    Desea hacer sus estudios superiores para tener una vida económica estable y poder ayudar a sus padres y hermana.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarw} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Geidy Liceth Chala Moreno</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 14 años. Vive con sus padres y una hermana menor. El papá es vigilante y la mamá trabaja en un restaurante.
                                    Le gusta el inglés, leer y escuchar música. Sueña con ser una psicóloga exitosa para ayudar económicamente a su
                                    familia y crear una fundación de su autoría que apoye a niños de escasos recursos.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="pro-card">
                            <MDBCardBody>
                                <MDBCardImage src={avatarm} position='top' alt='...' />
                                <MDBCardTitle className="pro-title">Yanier Estiven Palacios Chalá</MDBCardTitle>
                                <MDBCardText>
                                    Tiene 14 años. Le gusta hacer las tareas del colegio y a veces trabajar con su padrastro.
                                    Vive con la mamá, el padrastro y 2 hermanos varones. La mamá trabaja en la plaza de mercado de Quibdó,
                                    vendiendo hierbas medicinales y el padrastro trabaja en la construcción como ayudante. Sueña con ser un gran contador público,
                                    tener su propia empresa de contadores y sacar a su familia adelante.    
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                </MDBRow>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Estudiantes;