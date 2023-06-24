import Footer from "../../components/Footer";
import HeroPages from "../../components/HeroPages";
import "./Blog.css"

import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

function Blog(){
    return(
        <>
            <HeroPages name="Blog"/>
            <div className="container">
                <div className="blog">
                    <div className="blog-post">
                        <MDBCard>
                            <MDBCardHeader className="blog-title">FOURTH INSTITUTIONAL SPELLING BEE 2022</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>September 12, 2022</MDBCardTitle>
                                <MDBCardText>
                                    This past August 18th we carried out our Fourth Institutional Spelling Bee Contest which was an amazing journey having
                                    as always high-quality teachers as judges. Our attendants enjoyed every word spelled and became more experienced in
                                    leading with competitions of this kind. Teachers, students, parents and people from the community attended and
                                    witnessed a two-hour...
                                </MDBCardText>
                                <MDBBtn href='/spellingbee' style={{backgroundColor: "dodgerblue"}}>Read More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="blog-post">
                        <MDBCard>
                            <MDBCardHeader className="blog-title">SEGUIMOS FORTALECIENDO EL BILINGÜISMO EN QUIBDÓ</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>March 27, 2019</MDBCardTitle>
                                <MDBCardText>
                                    Este es nuestro sexto año de gestión en Quibdó y seguimos apoyando a la comunidad con el aprendizaje de inglés como segunda lengua.
                                    En este 2019, la buena respuesta de nuestros estudiantes no se ha hecho esperar. Ahora mismo: niños, jóvenes y adultos están siendo
                                    formados bajo estándares de alta calidad en nuestro centro...
                                </MDBCardText>
                                <MDBBtn href='/bilinguismo' style={{backgroundColor: "dodgerblue"}}>Read More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="blog-post">
                        <MDBCard>
                            <MDBCardHeader className="blog-title">THIRD INSTITUTIONAL SPELLING BEE CONTEST</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>December 10, 2018</MDBCardTitle>
                                <MDBCardText>
                                    This past May 30th we carried out our fourth Institutional Spelling Bee Contest which was an amazing journey having as always high-quality
                                    teachers as judges. Our attendants enjoyed every word spelled and became more experienced in leading with competitions of this kind.
                                    Teachers, students, parents and people from the community attended and witnessed a...
                                </MDBCardText>
                                <MDBBtn href='/spellingbee' style={{backgroundColor: "dodgerblue"}}>Read More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="blog-post">
                        <MDBCard>
                            <MDBCardHeader className="blog-title">80 ESTUDIANTES DE LA UNIVERSIDAD TECNOLÓGICA DEL CHOCÓ SEDE ITSMINA RECIBEN CAPACITACION EN EL ÁREA DE INGLÉS DE LA PRUEBA SABER PRO</MDBCardHeader>
                            <MDBCardBody>
                            <MDBCardTitle>November 29, 2018</MDBCardTitle>
                                <MDBCardText>
                                    Nuestro Programa de Preparación para la Prueba Saber Pro también llegó a Istmina. Más de 80 estudiantes de la Universidad Tecnológica del Chocó - Sede Istmina
                                    participaron en una jornada llena de aprendizajes y...
                                </MDBCardText>
                                <MDBBtn href='/utch-istmina' style={{backgroundColor: "dodgerblue"}}>Read More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Blog;